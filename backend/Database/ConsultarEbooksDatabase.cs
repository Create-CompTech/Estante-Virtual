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
        Database.LoginDatabase loginDB = new LoginDatabase();




        public async Task<List<Models.TbEbook>> EbooksPorGenero ()
        {
            List<Models.TbEbook> ebooks = await ctx.TbEbook.ToListAsync();        

            return ebooks;
        }



        public async Task<List<Models.TbEbook>> PesquisaEbookAutor (string nome)
        {
            
            List<Models.TbEbook> ebooks =
                    await ctx.TbEbook.Include(x => x.IdAutorNavigation)
                                     .Where(x => x.NmEbook == nome || x.IdAutorNavigation.NmAutor == nome)
                                     .ToListAsync();

            return ebooks;
        }



        public async Task<List<List<Models.TbEbook>>> EbooksCliente (int idLogin)
        {
            int idCliente = loginDB.IdCliente(idLogin);
            List<List<Models.TbEbook>> ebooksFinal = new List<List<Models.TbEbook>>();

            Models.TbEstante estante = await ctx.TbEstante.FirstOrDefaultAsync(x => x.IdCliente == idCliente);
            List<Models.TbPrateleira> prateleiras = ctx.TbPrateleira.Where(x => x.IdEstante == estante.IdEstante).ToList();
            

            foreach(Models.TbPrateleira prateleira in prateleiras)
            {
                List<Models.TbEbook> ebooks = new List<Models.TbEbook>();
                
                List<Models.TbPrateleiraItem> prateleiraItems = ctx.TbPrateleiraItem.Where(x => x.IdPrateleira == prateleira.IdPrateleira)
                                                                                    .ToList();
                
                foreach(Models.TbPrateleiraItem prateleiraItem in prateleiraItems)
                {
                    ebooks.Add(
                        await ctx.TbEbook.Include(x => x.IdAutorNavigation)
                                         .FirstOrDefaultAsync(x => x.IdEbook == prateleiraItem.IdEbook)
                    );
                }

                ebooksFinal.Add(ebooks);
            }


            return ebooksFinal;
        }

        public List<Models.TbGeneroEbook> AtribuirGenero (int idEbook)
        {
            List<Models.TbGeneroEbook> genero =
                    ctx.TbGeneroEbook.Where(x => x.IdEbook == idEbook)
                                     .Include(x => x.IdGeneroNavigation)
                                     .ToList();
            
            return genero;
        }

        public List<Models.TbGeneroEbook> Generos ()
        {
            List<Models.TbGeneroEbook> genero =
                    ctx.TbGeneroEbook.Include(x => x.IdGeneroNavigation)
                                     .ToList();
            
            return genero;
        } 

        public List<Models.TbAutor> Autores ()
        {
            return ctx.TbAutor.ToList();
        } 
    }
}