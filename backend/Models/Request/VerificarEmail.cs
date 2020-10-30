namespace backend.Models.Request
{
    public class VerificarEmail
    {
        public string destinatario { get; set; }
        public string assunto { get; set; }
        public string conteudo { get; set; }
    }
}