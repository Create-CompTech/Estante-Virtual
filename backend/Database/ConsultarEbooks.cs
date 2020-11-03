using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class ConsultarEbooks
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();




        public List<List<Models.TbGeneroEbook>> EbooksPorGenero ()
        {
            List<Models.TbGenero> generos = ctx.TbGenero.ToList();         
            List<List<Models.TbGeneroEbook>> ebooksPorGenero = new List<List<Models.TbGeneroEbook>>();
            

            foreach(Models.TbGenero genero in generos)
            {
                List<Models.TbGeneroEbook> ebooks =
                    ctx.TbGeneroEbook.Include(x => x.IdEbookNavigation)
                                     .Include(x => x.IdEbookNavigation.IdAutorNavigation.NmAutor)
                                     .Include(x => x.IdGeneroNavigation)
                                     .Where(x => x.IdGenero == genero.IdGenero && x.BtGeneroPrincipal == true)
                                     .ToList();
            

                ebooksPorGenero.Add(ebooks);
            }

            return ebooksPorGenero;
        }
    }
}