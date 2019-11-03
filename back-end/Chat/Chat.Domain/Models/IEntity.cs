using System;

namespace Chat.Domain.Models
{
    public interface IEntity
    {
        DateTime CreatedDate { get; set; }
    }
}
