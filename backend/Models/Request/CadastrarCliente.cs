using System;
using Microsoft.AspNetCore.Http;

namespace backend.Models.Request
{
    public class CadastrarCliente
    {
        public string email { get; set; }
        public string senha { get; set; }
        public string nome { get; set; }
        public string cpf { get; set; }
        public string genero { get; set; }
        public bool? assinante { get; set; }
        public DateTime nascimento { get; set; }
        public IFormFile img { get; set; }
    }
}