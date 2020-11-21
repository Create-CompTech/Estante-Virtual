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
        Utils.Conversor.EbooksConversor conversor = new Utils.Conversor.EbooksConversor();


        [HttpGet("/porgenero")]
        public async Task<ActionResult<List<List<Models.Response.EbookResponse>>>> EbooksPorGenero ()
        {
            try 
            {
                await business.EbooksPorGenero();
                return new List<List<Models.Response.EbookResponse>>();
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

        [HttpGet("/ebookautor")]
        public async Task<ActionResult<List<Models.Response.EbookResponse>>> PesquisaEbookAutor (string nome) 
        {
            try 
            {
                List<Models.TbEbook> ebooks = await business.PesquisaEbookAutor(nome);

                return conversor.ParaResponse(ebooks);
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

        [HttpGet("/ebookscliente")]
        public async Task<ActionResult<List<Models.Response.EbookResponse>>> EbooksCliente (int id) 
        {
            try 
            {
                List<Models.TbEbook> ebooks = await business.EbooksCliente(id);

                return conversor.ParaResponse(ebooks);
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }
    }
}