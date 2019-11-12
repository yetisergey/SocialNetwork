namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Linq;
    using System.Threading.Tasks;
    using Web.Helpers;
    using Web.Mappings.User;

    [Route("api/[controller]")]
    [ApiController]
    [RedisAuthorize]
    public class FriendsController : ControllerBase
    {
        private readonly IUserService _userService;

        public FriendsController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAsync()
        {
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            var userModels = await _userService.GetUserFriendsAsync(userId);
            var result = userModels.Select(u => u.ToUserResponse()).ToList();
            return Ok(result);
        }
    }
}