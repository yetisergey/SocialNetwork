namespace Web.Controllers
{
    using System;
    using System.Threading.Tasks;
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using Web.Models.User;

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
            var userId = GetUserIdFromHeaders();
            var userModel = await _userService.GetUserAsync(userId);
            return Ok(new UserResponse()
            {
                Id = userModel.Id,
                Email = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName
            });
        }

        private int GetUserIdFromHeaders()
        {
            if (HttpContext.Request.Headers.TryGetValue("X-UserId", out var userIdStr) &&
                int.TryParse(userIdStr, out var userId))
            {
                return userId;
            }
            throw new UnauthorizedAccessException();
        }
    }
}
