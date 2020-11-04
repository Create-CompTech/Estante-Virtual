using System;

namespace backend.Business
{
    public class RecuperarSenhaBusiness
    {
        Database.RecuperarSenhaDatabase db = new Database.RecuperarSenhaDatabase();

        public void AlterarSenha(Models.TbLogin tb)
        {
            if (tb.IdLogin <= 0)
                throw new Exception("ID inválido.");
            if (String.IsNullOrEmpty(tb.DsSenha))
                throw new Exception("Senha inválida.");

            db.AlterarSenha(tb);
        }
    }
}