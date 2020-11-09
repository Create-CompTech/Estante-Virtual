namespace backend.Utils.Conversor
{
    public class ClienteConversor
    {
        public Models.TbCliente ParaTabela (Models.Request.CadastrarCliente req)
        {
            Models.TbCliente cliente = new Models.TbCliente();

            cliente.BtAssinante = req.assinante;
            cliente.IdUsuarioNavigation.NmUsuario = req.nome;
            cliente.IdUsuarioNavigation.DtNascimento = req.nascimento;
            cliente.IdUsuarioNavigation.DsCpf = req.cpf;
            cliente.IdUsuarioNavigation.DsGenero = req.genero;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsEmail = req.email;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsSenha = req.senha;

            return cliente;
        }

        public Models.TbCliente ParaTabelaCadastro (Models.Request.CadastrarCliente req)
        {
            Models.TbCliente cliente = this.ParaTabela(req);

            cliente.QtPontos = 0;
            cliente.IdUsuarioNavigation.IdLoginNavigation.DsPerfil = "cliente";

            return cliente;
        }

        public Models.Response.ClienteResponse ParaResponse (Models.TbCliente tb)
        {
            Models.Response.ClienteResponse cliente = new Models.Response.ClienteResponse();

            cliente.nome = tb.IdUsuarioNavigation.NmUsuario;
            cliente.img = tb.IdUsuarioNavigation.DsImg;
            cliente.nascimento = tb.IdUsuarioNavigation.DtNascimento;
            cliente.cpf = tb.IdUsuarioNavigation.DsCpf;
            cliente.genero = tb.IdUsuarioNavigation.DsGenero;
            cliente.assinante = tb.BtAssinante;
            cliente.pontos = tb.QtPontos;
            cliente.email = tb.IdUsuarioNavigation.IdLoginNavigation.DsEmail;

            return cliente;
        }
    }
}