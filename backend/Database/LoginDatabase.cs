using System;
using System.Linq;

namespace backend.Database
{
    public class LoginDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public Models.TbLogin RealizarLogin (Models.TbLogin dados)
        {
            Models.TbLogin login = ctx.TbLogin.ToList().FirstOrDefault(x =>
                x.DsEmail == dados.DsEmail && 
                x.DsSenha == dados.DsSenha
            );

            ctx.Add(new Models.TbControleAdmin() {
                IdLogin = login.IdLogin,
                DtLogin = DateTime.Now
            });
            ctx.SaveChanges();

            return login;
        }
    }
}