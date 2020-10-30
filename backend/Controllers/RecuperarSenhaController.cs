using System;
using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class RecuperarSenhaController : ControllerBase
    {
        Business.RecuperarSenhaBusiness business = new Business.RecuperarSenhaBusiness();
        Utils.Conversor.RecuperarSenhaConversor conversor = new Utils.Conversor.RecuperarSenhaConversor();

        Services.EnviarMensagem.EmailMensagem mail = new Services.EnviarMensagem.EmailMensagem();
        Utils.GeradorCodigo.RecuperacaoSenha gerador = new Utils.GeradorCodigo.RecuperacaoSenha();




        [HttpPost("email")]
        public ActionResult<Models.Response.MensagemResponse> VerificarEmail (string destinatario)
        {
            try 
            {
                mail.EmailSimples(new Models.Request.VerificarEmail() {
                    destinatario = destinatario,
                    assunto = "Verificação de email",
                    conteudo = $"Olá! Você acabou de pedir uma alteração de senha na GoBook Company. Seu código de verificação é: ${gerador.GerarCodigo()}. OBS: Se você não fez o pedido, ignore este e-mail."
                });

                return new Models.Response.MensagemResponse() {
                    msg = "Email enviado com sucesso"
                };
            }
            catch (Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

        public ActionResult<Models.Response.MensagemResponse> AlterarSenha(Models.Request.AlterarSenhaRequest req)
        {
            try 
            {
                business.AlterarSenha(conversor.ParaTabela(req));

                return new Models.Response.MensagemResponse() {
                    msg = "Senha alterada com sucesso" 
                };
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }

        }
    }
}