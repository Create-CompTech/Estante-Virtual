using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class ConsultarEbooksDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();




        public async Task<List<List<Models.TbGeneroEbook>>> EbooksPorGenero ()
        {
            List<Models.TbGenero> generos = await ctx.TbGenero.ToListAsync();         
            List<List<Models.TbGeneroEbook>> ebooksPorGenero = new List<List<Models.TbGeneroEbook>>();
            

            foreach(Models.TbGenero genero in generos)
            {
                List<Models.TbGeneroEbook> ebooks =
                    ctx.TbGeneroEbook.Include(x => x.IdEbookNavigation)
                                     .Include(x => x.IdEbookNavigation.IdAutorNavigation)
                                     .Include(x => x.IdGeneroNavigation)
                                     .Where(x => x.IdGenero == genero.IdGenero && x.BtGeneroPrincipal == true)
                                     .ToList();

                ebooksPorGenero.Add(ebooks);
            }

            return ebooksPorGenero;
        }

        public async Task<List<Models.TbEbook>> PesquisaEbookAutor (string nome)
        {
            
            List<Models.TbEbook> ebooks =
                    await ctx.TbEbook.Include(x => x.IdAutorNavigation)
                                     .Where(x => x.NmEbook == nome || x.IdAutorNavigation.NmAutor == nome)
                                     .ToListAsync();

            return ebooks;
        }

        public async Task<List<Models.TbEbook>> EbooksCliente (int id)
        {
            // incompletoooooooooooo
            List<Models.TbEbook> ebooks =
                    await ctx.TbEbook.Include(x => x.IdAutorNavigation)
                                     .ToListAsync();

            return ebooks;
        }
    }
}