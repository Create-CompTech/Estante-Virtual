using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace backend.Models.Request
{
    public class EbookRequest
    {
        public string nome { get; set; }
        public IFormFile img { get; set; }
        public int autor { get; set; }
        public string sinopse { get; set; }
        public decimal? valor { get; set; }
        public int? qtPaginas { get; set; }
        public string editora { get; set; }
        public string edicao { get; set; }
        public string lingua { get; set; }
        public string linguaOriginal { get; set; }
        public int generoPrincipal { get; set; }
        public List<int> outrosGeneros { get; set; }
    }
}