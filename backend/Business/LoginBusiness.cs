using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class LoginBusiness
    {
        Database.LoginDatabase db = new Database.LoginDatabase();

        public async Task<Models.TbLogin> RealizarLogin (Models.TbLogin login)
        {
            if(string.IsNullOrEmpty(login.DsEmail))
                throw new Exception("Email inválido.");
            if(string.IsNullOrEmpty(login.DsSenha))
                throw new Exception("Senha inválida.");

            return await db.RealizarLogin(login); 
        }   
    }
}