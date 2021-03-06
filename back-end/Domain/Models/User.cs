﻿#nullable disable
namespace Domain.Models
{
    using System.Collections.Generic;

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public bool IsDeleted { get; set; }

        public virtual ICollection<User> Friends { get; set; } = new List<User>();

        public virtual ICollection<Interest> Interests { get; set; } = new List<Interest>();
    }
}
