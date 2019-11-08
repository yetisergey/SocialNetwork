namespace Authorization.Attributes
{
    using Microsoft.AspNetCore.Mvc;
    public class AuthorizeAttribute : TypeFilterAttribute
    {
        public AuthorizeAttribute()
            : base(typeof(AuthorizeActionFilter))
        {
        }
    }
}
