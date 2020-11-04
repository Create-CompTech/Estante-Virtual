using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsultarEbooksController : ControllerBase
    {
        

        Business.ConsultarEbooksBusiness business = new Business.ConsultarEbooksBusiness();
        Utils.Conversor.ConsultarEbooksConversor conversor = new Utils.Conversor.ConsultarEbooksConversor();


        [HttpGet]
        public ActionResult<List<List<Models.Response.EbookResponse>>> EbooksPorGenero ()
        {
            try 
            {
                return conversor.ParaResponse(business.EbooksPorGenero());

            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }

    }
}