using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_cliente")]
    public partial class TbCliente
    {
        public TbCliente()
        {
            TbCartao = new HashSet<TbCartao>();
            TbEstante = new HashSet<TbEstante>();
            TbFeedback = new HashSet<TbFeedback>();
            TbGeneroFavCliente = new HashSet<TbGeneroFavCliente>();
            TbPresente = new HashSet<TbPresente>();
        }

        [Key]
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("id_usuario", TypeName = "int(11)")]
        public int IdUsuario { get; set; }
        [Column("qt_pontos", TypeName = "int(11)")]
        public int? QtPontos { get; set; }
        [Column("bt_assinante", TypeName = "tinyint(4)")]
        public sbyte? BtAssinante { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        [InverseProperty(nameof(TbUsuario.TbCliente))]
        public virtual TbUsuario IdUsuarioNavigation { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbCartao> TbCartao { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbEstante> TbEstante { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbFeedback> TbFeedback { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbGeneroFavCliente> TbGeneroFavCliente { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbPresente> TbPresente { get; set; }

        public static implicit operator TbCliente(TbCliente v)
        {
            throw new NotImplementedException();
        }
    }
}
