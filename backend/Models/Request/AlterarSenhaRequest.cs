namespace backend.Models.Request
{
    public class AlterarSenhaRequest
    {
        public int IdLogin { get; set; }
        public string novaSenha { get; set; }
    }
}