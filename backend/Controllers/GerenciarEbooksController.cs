using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GerenciarEbooksController : ControllerBase
    {
        Business.GerenciadorImagem gerenciadorImagem = new Business.GerenciadorImagem();
        Business.GerenciarEbooksBusiness business = new Business.GerenciarEbooksBusiness();
        Utils.Conversor.EbooksConversor conversor = new Utils.Conversor.EbooksConversor();


        [HttpPost("/cadastrarebook")]
        public async Task<ActionResult<Models.Response.EbookResponse>> CadastrarEbook ([FromForm] Models.Request.EbookRequest req) 
        {
            try 
            {
                List<Models.TbGeneroEbook> generoEbook = new List<Models.TbGeneroEbook>();

                if (req.outrosGeneros.Count != 0)
                {
                    foreach (int item in req.outrosGeneros)
                    {
                        generoEbook.Add(new Models.TbGeneroEbook() 
                        {
                            IdGenero = item
                        });
                    }    
                }
                
                Models.TbEbook ebook = await business.CadastrarEbook(
                                            conversor.ParaTabela(req), 
                                            new Models.TbGeneroEbook() { IdGenero = req.generoPrincipal },
                                            generoEbook);
                
                ebook.DsImg = gerenciadorImagem.GerarNovoNome(req.img.FileName);
                gerenciadorImagem.SalvarFoto(ebook.DsImg, req.img);

                return conversor.ParaResponse(ebook);

            }
            catch (Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }
    }
}