namespace Domain.Models
{
    using System;
    using System.Collections.Generic;

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        public Guid Password { get; set; }

        public bool IsDeleted { get; set; }

        public List<Friend> Friends { get; set; }
    }
}
