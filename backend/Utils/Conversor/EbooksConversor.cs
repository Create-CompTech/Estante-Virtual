using System;
using System.Linq;
using System.Collections.Generic;

namespace backend.Utils.Conversor
{
    public class EbooksConversor
    {
        public Models.TbEbook ParaTabela (Models.Request.EbookRequest req)
        {
            Models.TbEbook ebook = new Models.TbEbook();

            ebook.NmEbook = req.nome;
            ebook.IdAutor = req.autor;
            ebook.DsEbook = req.sinopse;
            ebook.VlEbook = req.valor;
            ebook.QtPaginas = req.qtPaginas;
            ebook.NmEditora = req.editora;
            ebook.DsEdicao = req.edicao;
            ebook.NmLingua = req.lingua;
            ebook.NmLinguaOriginal = req.linguaOriginal;

            return ebook;
        }


        public List<List<Models.Response.EbookResponse>> ParaResponse (List<List<Models.TbEbook>> tabelas)
        {
            List<List<Models.Response.EbookResponse>> ebooksPorGenero = new List<List<Models.Response.EbookResponse>>();

            foreach(List<Models.TbEbook> generoEbook in tabelas)
            {
                ebooksPorGenero.Add(this.ParaResponse(generoEbook));
            }

            return ebooksPorGenero;
        }


        public List<Models.Response.EbookResponse> ParaResponse (List<Models.TbEbook> tb)
        {
            List<Models.Response.EbookResponse> ebooks = new List<Models.Response.EbookResponse>();
            List<string> generos = new List<string>();
            

            tb.ForEach( x =>
                ebooks.Add(
                        this.ParaResponse(x)
                    )
            );

            return ebooks;
        }        

        public Models.Response.EbookResponse ParaResponse (Models.TbEbook tb)
        {
            return new Models.Response.EbookResponse() {
                            id = tb.IdEbook,
                            nome = tb.NmEbook,
                            autor = tb.IdAutorNavigation.NmAutor,
                            ebook = tb.DsImg,
                            sinopse = tb.DsEbook,
                            valor = tb.VlEbook,
                            qtPaginas = tb.QtPaginas,
                            editora = tb.NmEditora,
                            edicao = tb.NmEditora,
                            isbn = tb.DsIsbn,
                            lingua = tb.NmLingua,
                            linguaOriginal = tb.NmLinguaOriginal
                        };
        }

        public Models.Response.GenerosResponse ParaResponse (Models.TbGeneroEbook tb)
        {
            return new Models.Response.GenerosResponse() 
            {
                id = tb.IdGenero,
                genero = tb.IdGeneroNavigation.NmGenero

            };
        }
    
        public Models.Response.AutorResponse ParaResponse (Models.TbAutor tb)
        {
            return new Models.Response.AutorResponse() 
            {
                id = tb.IdAutor,
                autor = tb.NmAutor
            };
        }
    }
}