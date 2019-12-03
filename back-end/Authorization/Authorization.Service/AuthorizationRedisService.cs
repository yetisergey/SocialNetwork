namespace Authorization.Service
{
    using Microsoft.Extensions.Caching.Distributed;
    using System.Threading.Tasks;

    public interface IAuthorizationRedisService
    {
        Task AuthorizeUserAsync(int userId, string token);
        Task<bool> IsAuthorizedAsync(int userId, string token);
    }

    public class AuthorizationRedisService : IAuthorizationRedisService
    {
        private readonly IDistributedCache _distributedCache;

        public AuthorizationRedisService(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }

        public async Task AuthorizeUserAsync(int userId, string token)
        {
            var key = GetAuthUserKey(userId);
            await _distributedCache.RemoveAsync(key);
            await _distributedCache.SetStringAsync(key, token);
        }

        public async Task<bool> IsAuthorizedAsync(int userId, string token)
        {
            var key = GetAuthUserKey(userId);
            var redisToken = await _distributedCache.GetStringAsync(key);
            return token == redisToken;
        }

        private string GetAuthUserKey(int userId)
        {
            const string AuthUserKey = "AuthUserKey_";
            return AuthUserKey + userId;
        }
    }
}