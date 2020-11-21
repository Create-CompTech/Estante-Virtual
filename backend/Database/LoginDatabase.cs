using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class LoginDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public async Task<Models.TbLogin> RealizarLogin (Models.TbLogin dados)
        {
            Models.TbLogin login = await ctx.TbLogin.FirstOrDefaultAsync(x =>
                x.DsEmail == dados.DsEmail && 
                x.DsSenha == dados.DsSenha
            );

            if (login.DsPerfil == "admin")
            {
                await ctx.AddAsync(new Models.TbControleAdmin() {
                    IdLogin = login.IdLogin,
                    DtLogin = DateTime.Now
                });
                await ctx.SaveChangesAsync();
            }

            return login;
        }

        public int IdCliente (int idLogin)
        {
            Models.TbUsuario user = ctx.TbUsuario.FirstOrDefault(x => x.IdLogin == idLogin);
            
            return ctx.TbCliente.FirstOrDefault(x => x.IdUsuario == user.IdUsuario)
                                .IdCliente;
        }
    }
}