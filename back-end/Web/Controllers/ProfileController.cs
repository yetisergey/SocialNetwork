namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Threading.Tasks;
    using Web.Helpers;
    using Web.Mappings.Profile;
    using Web.Models.Profile;

    [Route("api/[controller]")]
    [ApiController]
    [RedisAuthorize]
    public class ProfileController : ControllerBase
    {
        private readonly IUserService _userService;

        public ProfileController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAsync()
        {
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            var userModel = await _userService.GetUserAsync(userId);
            return Ok(new ProfileResponse()
            {
                Id = userModel.Id,
                Email = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName
            });
        }

        [HttpPatch]
        public async Task<ActionResult> PatchAsync([FromBody] ProfileRequest profileRequest)
        {
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            var updateModel = profileRequest.ToUserUpdateModel();
            await _userService.UpdateUser(userId, updateModel);
            return Ok();
        }

    }
}
