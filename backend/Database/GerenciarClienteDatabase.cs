namespace backend.Database
{
    public class GerenciarClienteDatabase
    {
        Models.db_gobookContext ctx = new Models.db_gobookContext();

        public void Cadastrar (Models.TbCliente cliente)
        {
            ctx.Add(cliente);
            ctx.SaveChanges();
        }
    }
}