using System;
using System.Net;
using System.Net.Mail;

namespace backend.Services.EnviarMensagem
{
    public class EmailMensagem
    {
        public void EmailSimples(Models.Request.VerificarEmail req)
        {
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = false;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential("gobookcompany@gmail.com", "gobook@123");

            MailAddress from = new MailAddress("gobookcompany@gmail.com");
            MailAddress to = new MailAddress(req.destinatario);


            MailMessage message = new MailMessage(from, to);
            message.Subject = req.assunto;
            message.Body = req.conteudo;            

            smtp.Send(message);
        }
    }
}