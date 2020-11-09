using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class GerenciarClienteDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public async Task<Models.TbCliente> Cadastrar (Models.TbCliente cliente)
        {
            await ctx.AddAsync(cliente);
            await ctx.SaveChangesAsync();

            return cliente;
        }

        public async Task<Models.TbCliente> Consultar (int id) 
        {
            return await ctx.TbCliente.Include(x => x.IdUsuarioNavigation)
                                      .Include(x => x.IdUsuarioNavigation.IdLoginNavigation)
                                      .FirstOrDefaultAsync( x => x.IdCliente == id);
        }

        public async Task<Models.TbCliente> Alterar (Models.TbCliente tb)
        {
            Models.TbCliente cliente = await Consultar(tb.IdCliente);

            if (cliente == null)
                return null;
            
            cliente.BtAssinante = tb.BtAssinante;
            cliente.IdUsuarioNavigation.NmUsuario = tb.IdUsuarioNavigation.NmUsuario;
            cliente.IdUsuarioNavigation.DtNascimento = tb.IdUsuarioNavigation.DtNascimento;
            cliente.IdUsuarioNavigation.DsCpf = tb.IdUsuarioNavigation.DsCpf;
            cliente.IdUsuarioNavigation.DsGenero = tb.IdUsuarioNavigation.DsGenero;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsEmail = tb.IdUsuarioNavigation.IdLoginNavigation.DsEmail;
            await ctx.SaveChangesAsync();

            return cliente;
        }

        public async Task<Models.TbCliente> Excluir (int id)
        {
            Models.TbCliente cliente = await Consultar(id);
            
            if (cliente == null)
                return null;

            ctx.TbCliente.Remove(cliente);
            await ctx.SaveChangesAsync();

            return cliente;
        }
    }
}