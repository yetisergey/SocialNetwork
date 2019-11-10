namespace Web.Models.Account
{
    public class LoginResponse
    {
        public string AccessToken { get; set; } = string.Empty;
        public int UserId { get; set; }
    }
}
