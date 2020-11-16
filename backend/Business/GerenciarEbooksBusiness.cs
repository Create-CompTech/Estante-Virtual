using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class GerenciarEbooksBusiness
    {
        Database.GerenciarEbooksDatabase db = new Database.GerenciarEbooksDatabase();

        public async Task<Models.TbEbook> CadastrarEbook (Models.TbEbook tb, Models.TbGeneroEbook generoPrincipal, List<Models.TbGeneroEbook> generos)
        {
            if (tb.IdAutor <= 0)
                throw new ArgumentException("ID inválido");
            if (String.IsNullOrEmpty(tb.NmEbook))
                throw new ArgumentException("Nome do ebook inválido");
            if (String.IsNullOrEmpty(tb.DsEbook))
                throw new ArgumentException("Sinopse inválida");
            if (String.IsNullOrEmpty(tb.DsImg))
                throw new ArgumentException("Imagem inválida");
            if (tb.VlEbook <= 0)
                throw new ArgumentException("Valor inválido");
            if (tb.QtPaginas <= 0)
                throw new ArgumentException("Quantidade de páginas inválida");
            if (String.IsNullOrEmpty(tb.NmEditora))
                throw new ArgumentException("Nome da editora inválido");
            if (String.IsNullOrEmpty(tb.DsEdicao))
                throw new ArgumentException("Nome da edição inválido");
            if (String.IsNullOrEmpty(tb.DsCodBarra))
                throw new ArgumentException("Código de barra inválido");
            if (String.IsNullOrEmpty(tb.DsIsbn))
                throw new ArgumentException("Código ISBN inválido");
            if (String.IsNullOrEmpty(tb.NmLingua))
                throw new ArgumentException("Nome da língua inválido");
            if (String.IsNullOrEmpty(tb.NmLinguaOriginal))
                throw new ArgumentException("Nome da língua original inválido");
            if (tb.DtInsercao == DateTime.MinValue || tb.DtInsercao == DateTime.Now)
                throw new ArgumentException("Data inválida");
            if (generoPrincipal.IdGenero <= 0)
                throw new ArgumentException("É necessário ter um gênero principal");
            if (generos != null) 
            {
                foreach(Models.TbGeneroEbook genero in generos)
                {
                    if (genero.IdGenero <= 0)
                        throw new ArgumentException("Gênero inválido");
                }
            }

            return await db.CadastrarEbook(tb, generoPrincipal, generos);
        }
    }
}