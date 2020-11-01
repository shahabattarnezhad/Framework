using System.ComponentModel.DataAnnotations;

namespace Framework.web.Models
{
    public class ContactUs
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        [Display(Name = "Email")]
        public string UserEmail { get; set; }

        [Display(Name = "Subject")]
        public string UserSubject { get; set; }

        [Display(Name = "Description")]
        public string UserDescription { get; set; }
    }
}
