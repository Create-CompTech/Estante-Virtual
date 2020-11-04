using System;

namespace backend.Utils.GeradorCodigo
{
    public class RecuperacaoSenha
    {
        public string GerarCodigo () {
            
            string codigo = "";
            string caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            Random rdn = new Random();

            for (int i = 0; i < 8; i++) 
            {
                codigo += caracteres[rdn.Next(caracteres.Length)].ToString();
            }   

            return codigo.Insert(4, "-");
        }
    }
}