using System;
using System.Linq;
using System.Collections.Generic;

namespace backend.Utils.Conversor
{
    public class ConsultarEbooksConversor
    {



        public List<List<Models.Response.EbookResponse>> ParaResponse (List<List<Models.TbGeneroEbook>> tabelas)
        {
            List<List<Models.Response.EbookResponse>> ebooksPorGenero = new List<List<Models.Response.EbookResponse>>();

            foreach(List<Models.TbGeneroEbook> generoEbook in tabelas)
            {
                ebooksPorGenero.Add(this.ParaResponse(generoEbook));
            }

            return ebooksPorGenero;
        }


        public List<Models.Response.EbookResponse> ParaResponse (List<Models.TbGeneroEbook> tb)
        {
            List<Models.Response.EbookResponse> ebooks = new List<Models.Response.EbookResponse>();
            List<string> generos = new List<string>();
            

            tb.ForEach( x =>
                ebooks.Add(
                        new Models.Response.EbookResponse() {
                            id = x.IdEbookNavigation.IdEbook,
                            nome = x.IdEbookNavigation.NmEbook,
                            autor = x.IdEbookNavigation.IdAutorNavigation.NmAutor,
                            ebook = x.IdEbookNavigation.DsImg,
                            sinopse = x.IdEbookNavigation.DsEbook,
                            valor = x.IdEbookNavigation.VlEbook,
                            qtPaginas = x.IdEbookNavigation.QtPaginas,
                            editora = x.IdEbookNavigation.NmEditora,
                            edicao = x.IdEbookNavigation.NmEditora,
                            isbn = x.IdEbookNavigation.DsIsbn,
                            lingua = x.IdEbookNavigation.NmLingua,
                            linguaOriginal = x.IdEbookNavigation.NmLinguaOriginal,
                            generoPrincipal = x.IdGeneroNavigation.NmGenero,
                            outrosGeneros = tb.Where( y => y.IdEbook == x.IdEbookNavigation.IdEbook)
                                              .Select(y => y.IdGeneroNavigation.NmGenero)
                                              .ToList()
                        }
                    )
            );

            return ebooks;
        }        
    }
}