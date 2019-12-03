namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Linq;
    using System.Threading.Tasks;
    using Web.Mappings.Interests;
    using Web.Models.Interests;

    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class InterestsController : ControllerBase
    {
        private readonly IInterestsService _interestsService;

        public InterestsController(IInterestsService interestsService)
        {
            _interestsService = interestsService;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var userId = HttpContext.User.GetUserId();
            var interests = await _interestsService.GetUserInterestsAsync(userId);
            var response = interests.Select(u => u.ToInterestResponse()).ToList();
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] InterestRequest interestRequest)
        {
            var userId = HttpContext.User.GetUserId();
            var interest = await _interestsService.AddUserInterestAsync(userId, interestRequest.Name!);
            return Ok(interest.ToInterestResponse());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(int interestId)
        {
            var userId = HttpContext.User.GetUserId();
            await _interestsService.RemoveUserInterestAsync(userId, interestId);
            return Ok();
        }
    }
}
