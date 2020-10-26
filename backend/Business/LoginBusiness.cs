using System;

namespace backend.Business
{
    public class LoginBusiness
    {
        Database.LoginDatabase db = new Database.LoginDatabase();

        public Models.TbLogin RealizarLogin (Models.TbLogin login)
        {
            if(string.IsNullOrEmpty(login.DsEmail))
                throw new Exception("Email inválido.");
            if(string.IsNullOrEmpty(login.DsSenha))
                throw new Exception("Senha inválida.");

            return db.RealizarLogin(login); 
        }   
    }
}