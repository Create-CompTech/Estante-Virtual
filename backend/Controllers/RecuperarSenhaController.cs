using System;
using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class RecuperarSenhaController : ControllerBase
    {
        Utils.RecuperarSenhaConversor conversor = new Utils.RecuperarSenhaConversor();
        Business.RecuperarSenhaBusiness business = new Business.RecuperarSenhaBusiness();
        Resources.EnviarEmail mail = new Resources.EnviarEmail();

        [HttpPost("email")]
        public ActionResult<string> VerificarEmail (string info)
        {
            try 
            {
                // mail.VerificarEmail();
                return "Ok";
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
                return new Models.Response.MensagemResponse() {
                    msg = business.AlterarSenha(conversor.ParaTabela(req))
                };
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }

        }
    }
}