using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class GerenciarEbooksDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public async Task<Models.TbEbook> CadastrarEbook (Models.TbEbook tb, Models.TbGeneroEbook generoPrincipal, List<Models.TbGeneroEbook> generos) 
        {
            tb.TbGeneroEbook.Add(generoPrincipal);
            foreach(Models.TbGeneroEbook generoEbook in generos)
            {
                tb.TbGeneroEbook.Add(generoEbook);
            }

            await ctx.TbEbook.AddAsync(tb);
            await ctx.SaveChangesAsync();
            
            return tb;
        }
    }
}