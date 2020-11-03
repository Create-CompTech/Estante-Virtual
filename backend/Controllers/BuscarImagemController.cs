using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BuscarImagemController : ControllerBase
    {


        Business.GerenciadorImagem gerenciadorImagem = new Business.GerenciadorImagem();

        [HttpGet("{nome}")]
        public ActionResult BuscarFoto(string nome)
        {
            try 
            {
                byte[] foto = gerenciadorImagem.LerFoto(nome);
                string contentType = gerenciadorImagem.GerarContentType(nome);
                return File(foto, contentType);
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(ex, 400)
                );
            }
        }
        
    }
}