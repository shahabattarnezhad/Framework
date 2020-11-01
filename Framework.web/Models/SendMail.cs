using Microsoft.AspNetCore.Identity.UI.Services;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Framework.web.Models
{
    public class SendMail : IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            using (MailMessage mailMessage = new MailMessage())
            {
                mailMessage.From = new MailAddress(email);
                mailMessage.Subject = subject;
                mailMessage.Body = "<h3>" + email + "</h3>"  + "<br/><br/>" + htmlMessage;
                mailMessage.IsBodyHtml = true;
                mailMessage.To.Add(new MailAddress("mybusinessemail038@gmail.com"));
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                System.Net.NetworkCredential networkCredential = new System.Net.NetworkCredential();
                networkCredential.UserName = "mybusinessemail038@gmail.com";
                networkCredential.Password = "myPass4268";
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = networkCredential;
                //smtp.Port = 587;
                smtp.Port = 25;
                await smtp.SendMailAsync(mailMessage);
            }
        }
    }
}
