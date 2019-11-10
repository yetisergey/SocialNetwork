namespace Domain.Models
{
    using System;
    using System.Collections.Generic;

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public bool IsDeleted { get; set; }

        public List<Friend> Friends { get; set; } = new List<Friend>();
    }
}
