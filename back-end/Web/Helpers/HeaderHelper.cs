namespace Web.Helpers
{
    using Microsoft.AspNetCore.Http;
    using System;
    public static class HeaderHelper
    {
        public static int GetUserIdFromHeaders(IHeaderDictionary headers)
        {
            if (headers.TryGetValue("X-UserId", out var userIdStr) &&
                int.TryParse(userIdStr, out var userId))
            {
                return userId;
            }
            throw new UnauthorizedAccessException();
        }
    }
}
