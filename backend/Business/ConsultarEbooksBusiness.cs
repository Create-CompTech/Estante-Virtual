using System;
using System.Collections.Generic;

namespace backend.Business
{
    public class ConsultarEbooksBusiness
    {
        Database.ConsultarEbooks db = new Database.ConsultarEbooks();

        public List<List<Models.TbGeneroEbook>> EbooksPorGenero()
        {
            return db.EbooksPorGenero();
        }
    }
}