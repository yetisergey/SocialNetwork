namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Threading.Tasks;
    using Web.Models.User;

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAsync(int id)
        {
            var userModel = await _userService.GetUserAsync(id);
            return Ok(new UserResponse()
            {
                Id = userModel.Id,
                Email = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName
            });
        }
    }
}
