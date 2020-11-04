using System.Collections.Generic;

namespace backend.Models.Response
{
    public class EbookResponse
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string autor { get; set; }
        public string ebook { get; set; }
        public string sinopse { get; set; }
        public decimal? valor { get; set; }
        public int? qtPaginas { get; set; }
        public string editora { get; set; }
        public string edicao { get; set;}
        public string isbn { get; set; }
        public string lingua { get; set; }
        public string linguaOriginal { get; set; }
        public string generoPrincipal { get; set; }
        public List<string> outrosGeneros { get; set; }
    }
}