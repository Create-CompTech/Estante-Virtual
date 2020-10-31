using System;
using System.Linq;

namespace backend.Utils.Conversor
{
    public class LoginConversor
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();


        public Models.TbLogin ParaTbLogin (Models.Request.LoginRequest req)
        {
            Models.TbLogin tb = new Models.TbLogin();

            tb.DsEmail = req.email;
            tb.DsSenha = req.senha;
            
            return tb;
        }

        public Models.Response.LoginResponse ParaResponse(Models.TbLogin tb)
        {
            Models.TbUsuario user = ctx.TbUsuario.FirstOrDefault(x => x.IdLogin == tb.IdLogin);

            return new Models.Response.LoginResponse() {
                    LoginID = tb.IdLogin,
                    Nome = user.NmUsuario,
                    Perfil = tb.DsPerfil
            };
        }
    }
}