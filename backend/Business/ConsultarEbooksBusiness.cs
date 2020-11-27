using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class ConsultarEbooksBusiness
    {
        Database.ConsultarEbooksDatabase db = new Database.ConsultarEbooksDatabase();

        public async Task<List<Models.TbEbook>> EbooksPorGenero()
        {
            return await db.EbooksPorGenero();
        }

        public async Task<List<Models.TbEbook>> PesquisaEbookAutor(string nome)
        {
            if (String.IsNullOrEmpty(nome))
                throw new ArgumentException("Nenhum critério de pesquisa foi encontrado.");

            return await db.PesquisaEbookAutor(nome);
        }

        public async Task<List<List<Models.TbEbook>>> EbooksCliente (int idLogin)
        {
            if (idLogin <= 0)
                throw new ArgumentException("Id inválido.");

            return await db.EbooksCliente(idLogin);
        }

        public List<Models.TbGeneroEbook> AtribuirGenero (int idEbook)
        {
            return db.AtribuirGenero(idEbook);
        }

        public List<Models.TbGeneroEbook> Generos ()
        {
            return db.Generos();
        }

        public List<Models.TbAutor> ConsultarAutores ()
        {
            return db.Autores();
        }
    }
}