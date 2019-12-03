namespace Chat.Web.Hubs
{
    using Authorization.Attributes;
    using Chat.Services;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.SignalR;
    using System.Threading.Tasks;

    // todo: problem with auth
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ChatHub : Hub
    {
        private readonly IChatService _chatService;

        public ChatHub(IChatService chatService)
        {
            _chatService = chatService;
        }

        public async Task Get(int userTo)
        {
            var currentUserId = Context.User.GetUserId();
            var messages = await _chatService.GetMessages(currentUserId, userTo);
            await Clients.User(currentUserId.ToString()).SendAsync("Get", messages);
        }

        public async Task Send(int userTo, string message)
        {
            var currentUserId = Context.User.GetUserId();
            var msg = await _chatService.AddMessage(currentUserId, userTo, message);
            await Clients.User(currentUserId.ToString()).SendAsync("Receive", msg);
            await Clients.User(userTo.ToString()).SendAsync("Receive", msg);
        }
    }

}