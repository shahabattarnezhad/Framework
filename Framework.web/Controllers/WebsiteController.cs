using System.Threading.Tasks;
using Framework.web.Data;
using Framework.web.Models;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;

namespace Framework.web.Controllers
{
    public class WebsiteController : Controller
    {
        private readonly AuthDbContext _context;
        private readonly IEmailSender _emailSender;

        public WebsiteController(AuthDbContext context, IEmailSender emailSender)
        {
            _context = context;
            _emailSender = emailSender;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Team()
        {
            return View();
        }

        public IActionResult Price()
        {
            return View();
        }

        // GET: Website/Create => Sending e-mail from customer to admin
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,UserEmail,UserSubject,UserDescription")] ContactUs contactUs)
        {
            if (ModelState.IsValid)
            {
                _context.Add(contactUs);
                await _context.SaveChangesAsync();

                //var msg = $"{contactUs.Name} {contactUs.UserDescription}";
                var msg = "<h4>" + contactUs.Name + "</h4>" + "<br/>" +
                          "<p>" + contactUs.UserDescription + "</P>";
                await _emailSender.SendEmailAsync(contactUs.UserEmail, contactUs.UserSubject, msg);

                ViewBag.ConfirmMsg = "Your message has been sent!";

                return View("ThanksPage");
            }
            return View(contactUs);
        }
    }
}
