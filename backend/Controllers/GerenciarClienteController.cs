using System;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class GerenciarClienteController : ControllerBase
    {
        [HttpPost()]
        public ActionResult<Models.Response.MensagemResponse> Cadastrar()
        {
            try 
            {
                


                return new Models.Response.MensagemResponse() {
                    msg = "Cliente cadastrado com sucesso"
                };
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }

        }

        [HttpGet("{id}")]
        public void Consultar(int id)
        {

        }

        [HttpPut("{id}")]
        public void Alterar(int id)
        {

        }

        
        [HttpDelete("{id}")]
        public void Deletar(int id)
        {

        }

        
        
    }
}