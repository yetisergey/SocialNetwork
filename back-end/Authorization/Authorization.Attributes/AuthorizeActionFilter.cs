namespace Authorization.Attributes
{
    using Authorization.Service;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Filters;
    using Microsoft.Extensions.Caching.Distributed;
    using System.Security.Claims;
    using System.Threading.Tasks;

    public class AuthorizeActionFilter : IAsyncAuthorizationFilter
    {
        private readonly IAuthorizationRedisService _authorizationRedisService;

        public AuthorizeActionFilter(IAuthorizationRedisService authorizationRedisService)
        {
            _authorizationRedisService = authorizationRedisService;
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            bool isAuthorized = false;

            if (context.HttpContext.Request.Headers.TryGetValue("X-UserId", out var userId) &&
                context.HttpContext.Request.Headers.TryGetValue("Authorization", out var userToken))
            {
                var isAuth = await _authorizationRedisService.IsAuthorizedAsync(int.Parse(userId), userToken);
                if (isAuth)
                {
                    return;
                }
            }

            if (!isAuthorized)
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
}