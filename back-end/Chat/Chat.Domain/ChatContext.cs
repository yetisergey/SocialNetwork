namespace Chat.Domain
{
    using Microsoft.EntityFrameworkCore;
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Text;
    public class ChatContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }
    }
}
