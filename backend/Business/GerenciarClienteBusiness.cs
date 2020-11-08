using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class GerenciarClienteBusiness
    {
        Database.GerenciarClienteDatabase db = new Database.GerenciarClienteDatabase();

        

        public async Task<Models.TbCliente> Cadastrar(Models.TbCliente tb) {
            
            if(tb.BtAssinante == null)
                throw new ArgumentException("É necessário se declarar assinante ou não.");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.NmUsuario))
                throw new ArgumentException("O nome do usuário é necessário.");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.DsImg))
                throw new ArgumentException("É necessário uma imagem de usuário.");
            if(tb.IdUsuarioNavigation.DtNascimento == DateTime.Now.Date)
                throw new ArgumentException("Data inválida");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.DsCpf))
                throw new ArgumentException("CPF inválido");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.DsGenero))
                throw new ArgumentException("Gênero inválido");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.IdLoginNavigation.DsEmail))
                throw new ArgumentException("Email inválido");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.IdLoginNavigation.DsSenha))
                throw new ArgumentException("Senha inválida");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.IdLoginNavigation.DsPerfil))
                throw new ArgumentException("Perfil inválido");


            return await db.Cadastrar(tb);
        }

        public async Task<Models.TbCliente> Consultar(int id)
        {
            if (id <= 0)
                throw new ArgumentException("ID inválido.");

            return await db.Consultar(id);
        }

        public async Task<Models.TbCliente> Alterar (Models.TbCliente tb)
        {
            if (tb.IdCliente <= 0)
                throw new ArgumentException("ID inválido");
            if(tb.BtAssinante == null)
                throw new ArgumentException("É necessário se declarar assinante ou não.");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.NmUsuario))
                throw new ArgumentException("O nome do usuário é necessário.");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.DsImg))
                throw new ArgumentException("É necessário uma imagem de usuário.");
            if(tb.IdUsuarioNavigation.DtNascimento == DateTime.Now.Date)
                throw new ArgumentException("Data de nascimento inválida");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.DsCpf))
                throw new ArgumentException("CPF inválido");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.DsGenero))
                throw new ArgumentException("Gênero inválido");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.IdLoginNavigation.DsEmail))
                throw new ArgumentException("Email inválido");
            if(String.IsNullOrEmpty(tb.IdUsuarioNavigation.IdLoginNavigation.DsSenha))
                throw new ArgumentException("Senha inválida");

            return await db.Alterar(tb);
        }

        public async Task<Models.TbCliente> Excluir (int id)
        {
            if (id <= 0)
                throw new ArgumentException("ID inválido.");

            return await db.Excluir(id);
        }
        
    }
}