using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class ConsultarEbooksBusiness
    {
        Database.ConsultarEbooksDatabase db = new Database.ConsultarEbooksDatabase();

        public async Task<List<List<Models.TbGeneroEbook>>> EbooksPorGenero()
        {
            return await db.EbooksPorGenero();
        }

        public async Task<List<Models.TbEbook>> PesquisaEbookAutor(string nome)
        {
            if (String.IsNullOrEmpty(nome))
                throw new ArgumentException("Nenhum critério de pesquisa foi encontrado.");

            return await db.PesquisaEbookAutor(nome);
        }
    }
}