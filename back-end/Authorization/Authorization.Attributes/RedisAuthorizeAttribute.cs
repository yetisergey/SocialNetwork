namespace Authorization.Attributes
{
    using Microsoft.AspNetCore.Mvc;
    public class RedisAuthorizeAttribute : TypeFilterAttribute
    {
        public RedisAuthorizeAttribute()
            : base(typeof(RedisAuthorizeActionFilter))
        {
        }

        public int MyProperty { get; set; }
    }
}
