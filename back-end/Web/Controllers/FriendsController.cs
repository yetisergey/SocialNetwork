namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Linq;
    using System.Threading.Tasks;
    using Web.Helpers;
    using Web.Mappings.User;
    using Web.Models.Friend;

    [Route("api/[controller]")]
    [ApiController]
    [RedisAuthorize]
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
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
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
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            await _friendService.AddUserToFriendsAsync(userId, friendRequest.FriendId);
            return Ok();
        }
    }
}