using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class RecuperarSenhaBusiness
    {
        Database.RecuperarSenhaDatabase db = new Database.RecuperarSenhaDatabase();

        public async Task<Models.TbLogin> AlterarSenha(Models.TbLogin tb)
        {
            if (tb.IdLogin <= 0)
                throw new Exception("ID inválido.");
            if (String.IsNullOrEmpty(tb.DsSenha))
                throw new Exception("Senha inválida.");

            return await db.AlterarSenha(tb);
        }

        public bool EmailValido (string email)
        {
            if (String.IsNullOrEmpty(email))
                throw new ArgumentException("Email inválido.");

            return db.EmailValido(email);
        }
    }
}