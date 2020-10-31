using System;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class LoginController : ControllerBase
    {
        Business.LoginBusiness business = new Business.LoginBusiness();
        Utils.Conversor.LoginConversor conversor = new Utils.Conversor.LoginConversor();


        [HttpPost]
        public ActionResult<Models.Response.LoginResponse> FazerLogin (Models.Request.LoginRequest req)
        {
            try 
            {
                Models.TbLogin tb = business.RealizarLogin(conversor.ParaTbLogin(req));
                return conversor.ParaResponse(tb);

            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }
        }
    }
}