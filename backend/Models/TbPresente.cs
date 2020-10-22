using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_presente")]
    public partial class TbPresente
    {
        [Key]
        [Column("id_presente", TypeName = "int(11)")]
        public int IdPresente { get; set; }
        [Column("id_venda_item", TypeName = "int(11)")]
        public int IdVendaItem { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbPresente))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdVendaItem))]
        [InverseProperty(nameof(TbVendaItem.TbPresente))]
        public virtual TbVendaItem IdVendaItemNavigation { get; set; }
    }
}
