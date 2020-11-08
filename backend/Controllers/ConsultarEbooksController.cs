using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsultarEbooksController : ControllerBase
    {
        

        Business.ConsultarEbooksBusiness business = new Business.ConsultarEbooksBusiness();
        Utils.Conversor.ConsultarEbooksConversor conversor = new Utils.Conversor.ConsultarEbooksConversor();


        [HttpGet("/porgenero")]
        public async Task<ActionResult<List<List<Models.Response.EbookResponse>>>> EbooksPorGenero ()
        {
            try 
            {
                return conversor.ParaResponse(await business.EbooksPorGenero());

            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

        [HttpGet("/pesquisa")]
        public async Task<ActionResult<List<Models.Response.EbookResponse>>> PesquisarEbooks (string nome) 
        {
            try 
            {
                return new List<Models.Response.EbookResponse>();
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }
    }
}