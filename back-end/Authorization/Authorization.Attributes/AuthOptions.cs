namespace Authorization.Attributes
{
    using System.Text;
    using Microsoft.IdentityModel.Tokens;
    public class AuthOptions
    {
        const string KEY = "999868A6-7ADE-49FF-8404-D45CD477EAE4";
        public const string Issuer = "SocialNetwork";
        public const int Lifetime = 60;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
