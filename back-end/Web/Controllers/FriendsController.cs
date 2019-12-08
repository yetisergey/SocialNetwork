namespace Web.Controllers
{
    using Authorization;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Linq;
    using System.Threading.Tasks;
    using Web.Mappings.User;
    using Web.Models.Friend;

    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class FriendsController : ControllerBase
    {
        private readonly IFriendService _friendService;

        public FriendsController(IFriendService friendService)
        {
            _friendService = friendService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAsync()
        {
            var userId = HttpContext.User.GetUserId();
            var userModels = await _friendService.GetUserFriendsAsync(userId);
            var result = userModels.Select(u => u.ToUserResponse()).ToList();
            return Ok(result);
        }

        [HttpGet]
        [Route("search")]
        public async Task<ActionResult> GetAsync(string search = "", int take = 50, int skip = 0)
        {
            var userModels = await _friendService.SearchFriendsAsync(search, take, skip);
            var result = userModels.Select(u => u.ToUserResponse()).ToList();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync([FromBody] FriendRequest friendRequest)
        {
            var userId = HttpContext.User.GetUserId();
            await _friendService.AddUserToFriendsAsync(userId, friendRequest.FriendId);
            return Ok();
        }
    }
}