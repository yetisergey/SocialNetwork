namespace Chat.Web.Hubs
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.SignalR;
    using System.Threading.Tasks;

    [RedisAuthorize]
    public class ChatHub : Hub
    {
        public async Task Send(int userToId, string message)
        {
            await this.Clients.All.SendAsync("Send", message);
        }
    }
}