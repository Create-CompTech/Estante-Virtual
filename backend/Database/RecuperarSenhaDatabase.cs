using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class RecuperarSenhaDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public async Task<Models.TbLogin> AlterarSenha(Models.TbLogin tb)
        {
            Models.TbLogin login = 
                await ctx.TbLogin.FirstOrDefaultAsync(x => x.IdLogin == tb.IdLogin);

            login.DsSenha = tb.DsSenha;
            await ctx.SaveChangesAsync();

            return login;
        }
        
    }
}