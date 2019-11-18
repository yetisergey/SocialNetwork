namespace Web.Controllers
{
    using Authorization.Service;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using Services.Models.User;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using Web.Models.Account;

    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly IAuthorizationRedisService _authorizeService;
        private readonly IUserService _userService;

        public AccountController(IAuthorizationRedisService authorizeService, IUserService userService)
        {
            _authorizeService = authorizeService;
            _userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync([FromBody] LoginRequest loginRequest)
        {
            var userModel = await _userService.GetUserAsync(loginRequest.Email!, loginRequest.Password!);

            if (userModel == null)
            {
                return BadRequest("Invalid username or password.");
            }

            var identity = GetIdentityAsync(userModel);
            var jwt = new JwtSecurityToken(claims: identity.Claims);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            await _authorizeService.AuthorizeUserAsync(userModel.Id, encodedJwt);

            return Ok(new LoginResponse()
            {
                AccessToken = encodedJwt,
                UserId = userModel.Id
            });
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult> RegisterAsync([FromBody] RegisterRequest registerRequest)
        {
            var registerUserModel = new UserRegisterModel()
            {
                Email = registerRequest.Email!,
                FirstName = registerRequest.FirstName!,
                LastName = registerRequest.LastName!,
                Password = registerRequest.Password!
            };

            var userModel = await _userService.RegisterUser(registerUserModel);

            if (userModel == null)
            {
                return BadRequest("Invalid username or password.");
            }

            var identity = GetIdentityAsync(userModel);
            var jwt = new JwtSecurityToken(claims: identity.Claims);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            await _authorizeService.AuthorizeUserAsync(userModel.Id, encodedJwt);

            return Ok(new LoginResponse()
            {
                AccessToken = encodedJwt,
                UserId = userModel.Id
            });
        }

        private ClaimsIdentity GetIdentityAsync(UserModel userModel)
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, userModel.Id.ToString())
                };

            var claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

            return claimsIdentity;
        }
    }
}