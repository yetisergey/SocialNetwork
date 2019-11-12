namespace Web.Controllers
{
    using Authorization.Attributes;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System.Linq;
    using System.Threading.Tasks;
    using Web.Helpers;
    using Web.Mappings.Interests;

    [Route("api/[controller]")]
    [ApiController]
    [RedisAuthorize]
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
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            var interests = await _interestsService.GetUserInterestsAsync(userId);
            var response = interests.Select(u => u.ToInterestResponse()).ToList();
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] string interestName)
        {
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            var interest = await _interestsService.AddUserInterestAsync(userId, interestName);
            return Ok(interest.ToInterestResponse());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(int interestId)
        {
            var userId = HeaderHelper.GetUserIdFromHeaders(HttpContext.Request.Headers);
            await _interestsService.RemoveUserInterestAsync(userId, interestId);
            return Ok();
        }
    }
}
