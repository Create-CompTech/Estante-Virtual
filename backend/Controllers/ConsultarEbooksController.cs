using System;
using System.Linq;
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
                List<string> generos = new List<string>();
                List<Models.TbEbook> ebooks = await business.EbooksPorGenero();
                List<Models.Response.EbookResponse> ebookResponse = conversor.ParaResponse(ebooks);
                List<List<Models.Response.EbookResponse>> ebookResponseFinal = new List<List<Models.Response.EbookResponse>>(); 


                foreach(Models.Response.EbookResponse ebook in ebookResponse)
                {
                    List<Models.TbGeneroEbook> generoEbook = business.AtribuirGenero(ebook.id);
                    
                    string generoPrincipal = generoEbook.FirstOrDefault( x => x.BtGeneroPrincipal == true).IdGeneroNavigation.NmGenero;
                    ebook.generoPrincipal = generoPrincipal; 
                    generos.Add(generoPrincipal);

                    ebook.outrosGeneros = generoEbook.Where( x => x.BtGeneroPrincipal == false)
                                                     .Select(x => x.IdGeneroNavigation.NmGenero)
                                                     .ToList();
                }

                foreach(string genero in generos)
                {
                    ebookResponseFinal.Add(
                        ebookResponse.Where(x => x.generoPrincipal == genero).ToList()
                    );
                }
                
                
                return ebookResponseFinal;
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
        public async Task<ActionResult<List<List<Models.Response.EbookResponse>>>> EbooksCliente (int idLogin) 
        {
            try 
            {
                List<List<Models.TbEbook>> ebooks = await business.EbooksCliente(idLogin);

                return conversor.ParaResponse(ebooks);
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

        [HttpGet("/generos")]
        public ActionResult<List<Models.Response.GenerosResponse>> ConsultarGeneros ()
        {
            try 
            {
                List<Models.TbGeneroEbook> generos = business.Generos();

                return generos.Select(x => conversor.ParaResponse(x)).ToList();
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

        [HttpGet("/autores")]
        public ActionResult<List<Models.Response.AutorResponse>> ConsultarAutores ()
        {
            try 
            {
                List<Models.TbAutor> autores = business.ConsultarAutores();

                return autores.Select(x => conversor.ParaResponse(x)).ToList();
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }
    }
}