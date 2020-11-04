using System;

namespace backend.Utils.Conversor
{
    public class RecuperarSenhaConversor
    {
        public Models.TbLogin ParaTabela(Models.Request.AlterarSenhaRequest req)
        {
            Models.TbLogin login = new Models.TbLogin();
            login.IdLogin = req.IdLogin;
            login.DsSenha = req.novaSenha;

            return login;
        }
    }
}