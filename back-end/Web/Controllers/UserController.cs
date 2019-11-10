namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Linq;
    using System.Threading.Tasks;
    using Web.Mappings.User;

    [Route("api/[controller]")]
    [ApiController]
    [RedisAuthorize]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAsync(string search = "", int take = 50, int skip = 0)
        {
            var userModels = await _userService.GetUsersAsync(search, take, skip);
            var result = userModels.Select(u => u.ToUserResponse()).ToList();
            return Ok(result);
        }

        [HttpGet]
        public async Task<ActionResult> GetAsync(int id)
        {
            var userModel = await _userService.GetUserAsync(id);
            var result = userModel.ToUserResponse();
            return Ok(result);
        }
    }
}
