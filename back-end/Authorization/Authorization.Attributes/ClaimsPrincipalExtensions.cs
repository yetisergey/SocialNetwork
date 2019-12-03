namespace Authorization.Attributes
{
    using System.Security.Claims;
    public static class ClaimsPrincipalExtensions
    {
        public static int GetUserId(this ClaimsPrincipal principal)
        {
            return int.Parse(principal.FindFirst(ClaimTypes.NameIdentifier).Value);
        }
    }
}
