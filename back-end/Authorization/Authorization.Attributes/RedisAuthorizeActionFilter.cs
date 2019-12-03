namespace Authorization.Attributes
{
    using Authorization.Service;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Filters;
    using System.Threading.Tasks;

    //todo: remove and rename projects
    public class RedisAuthorizeActionFilter : IAsyncAuthorizationFilter
    {
        private readonly IAuthorizationRedisService _authorizationRedisService;

        public RedisAuthorizeActionFilter(IAuthorizationRedisService authorizationRedisService)
        {
            _authorizationRedisService = authorizationRedisService;
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            if (context.HttpContext.Request.Headers.TryGetValue("X-UserId", out var userId) &&
                context.HttpContext.Request.Headers.TryGetValue("Authorization", out var userToken))
            {
                var isAuth = await _authorizationRedisService.IsAuthorizedAsync(int.Parse(userId), userToken);
                if (isAuth)
                {
                    return;
                }
            }
            context.Result = new UnauthorizedResult();
        }
    }
}