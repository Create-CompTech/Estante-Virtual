namespace backend.Utils.Conversor
{
    public class ClienteConversor
    {
        public Models.TbCliente ParaTabela (Models.Request.CadastrarCliente req)
        {
            Models.TbCliente cliente = new Models.TbCliente();
            cliente.QtPontos = 0;
            cliente.IdUsuarioNavigation.NmUsuario = req.nome;
            cliente.IdUsuarioNavigation.DtNascimento = req.nascimento;
            cliente.IdUsuarioNavigation.DsImg = "";
            cliente.IdUsuarioNavigation.DsCpf = req.cpf;
            cliente.IdUsuarioNavigation.DsGenero = req.genero;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsEmail = req.email;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsSenha = req.senha;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsPerfil = "cliente";

            return new Models.TbCliente();
        }
    }
}