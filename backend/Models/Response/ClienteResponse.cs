using System;

namespace backend.Models.Response
{
    public class ClienteResponse
    {
        public string nome { get; set; }
        public string img { get; set; }
        public DateTime? nascimento { get; set; }
        public string cpf { get; set; }
        public string genero { get; set; }
        public bool? assinante { get; set; }
        public int? pontos { get; set; }
        public string email { get; set; }
    }
}