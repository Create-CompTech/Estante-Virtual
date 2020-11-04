using System;
using System.Linq;

namespace backend.Database
{
    public class RecuperarSenhaDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public void AlterarSenha(Models.TbLogin tb)
        {
            Models.TbLogin login = 
                ctx.TbLogin.FirstOrDefault(x => x.IdLogin == tb.IdLogin);

            login.DsSenha = tb.DsSenha;
            ctx.SaveChanges();
        }
        
    }
}