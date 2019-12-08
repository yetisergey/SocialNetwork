namespace Web.Controllers
{
    using Authorization;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.IdentityModel.Tokens;
    using Services;
    using Services.Models.User;
    using System;
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
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
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

            var encodedJwt = Authenticate(userModel);

            return Ok(new LoginResponse()
            {
                AccessToken = encodedJwt
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
                return BadRequest("Can not register user");
            }

            var encodedJwt = Authenticate(userModel);

            return Ok(new LoginResponse()
            {
                AccessToken = encodedJwt
            });
        }

        private string Authenticate(UserModel userModel)
        {
            var identity = GetIdentityAsync(userModel);
            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.Issuer,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.Lifetime)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return encodedJwt;
        }

        private ClaimsIdentity GetIdentityAsync(UserModel userModel)
        {
            var claims = new List<Claim> {
                new Claim(ClaimTypes.Name, userModel.Id.ToString()),
                new Claim(ClaimTypes.NameIdentifier, userModel.Id.ToString())
            };
            var claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
    }
}