using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_cartao")]
    public partial class TbCartao
    {
        public TbCartao()
        {
            TbPgtoAssinatura = new HashSet<TbPgtoAssinatura>();
            TbVenda = new HashSet<TbVenda>();
        }

        [Key]
        [Column("id_cartao", TypeName = "int(11)")]
        public int IdCartao { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("tp_cartao", TypeName = "varchar(1)")]
        public string TpCartao { get; set; }
        [Column("nm_bandeira", TypeName = "varchar(45)")]
        public string NmBandeira { get; set; }
        [Column("nm_titular", TypeName = "varchar(200)")]
        public string NmTitular { get; set; }
        [Column("ds_cartao", TypeName = "varchar(19)")]
        public string DsCartao { get; set; }
        [Column("dt_expira", TypeName = "datetime")]
        public DateTime? DtExpira { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbCartao))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [InverseProperty("IdCartaoNavigation")]
        public virtual ICollection<TbPgtoAssinatura> TbPgtoAssinatura { get; set; }
        [InverseProperty("IdCartaoNavigation")]
        public virtual ICollection<TbVenda> TbVenda { get; set; }
    }
}
