using System;
using System.Net;
using System.Net.Mail;

namespace backend.Resources
{
    public class EnviarEmail
    {
        
        public void VerificarEmail(Models.Request.VerificarEmail req)
        {

            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential("gobookcompany@gmail.com", "gobook@123");

            MailAddress from = new MailAddress("gobookcompany@gmail.com");
            MailAddress to = new MailAddress(req.destinatario);


            MailMessage message = new MailMessage(from, to);
            message.Subject = "Verificação de Email";
            message.Body = $"Olá! Você acabou de pedir a alteração da sua senha na GoBook. Seu código é: ${this.CriarCodigo()}. Obs: Caso você não tenha feito este pedido, ignore este e-mail.";            

            smtp.Send(message);
        }

        public void EmailSimples(Models.Request.VerificarEmail req)
        {
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential("gobookcompany@gmail.com", "gobook@123");

            MailAddress from = new MailAddress("gobookcompany@gmail.com");
            MailAddress to = new MailAddress(req.destinatario);


            MailMessage message = new MailMessage(from, to);
            message.Subject = req.titulo;
            message.Body = req.assunto;            

            smtp.Send(message);
        }

        public string CriarCodigo()
        {
            return null;
        }
    }
}
