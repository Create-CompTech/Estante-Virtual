using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_venda_item")]
    public partial class TbVendaItem
    {
        public TbVendaItem()
        {
            TbPresente = new HashSet<TbPresente>();
        }

        [Key]
        [Column("id_venda_item", TypeName = "int(11)")]
        public int IdVendaItem { get; set; }
        [Column("id_ebook", TypeName = "int(11)")]
        public int IdEbook { get; set; }
        [Column("id_venda", TypeName = "int(11)")]
        public int IdVenda { get; set; }
        [Column("qt_itens", TypeName = "int(11)")]
        public int? QtItens { get; set; }

        [ForeignKey(nameof(IdEbook))]
        [InverseProperty(nameof(TbEbook.TbVendaItem))]
        public virtual TbEbook IdEbookNavigation { get; set; }
        [ForeignKey(nameof(IdVenda))]
        [InverseProperty(nameof(TbVenda.TbVendaItem))]
        public virtual TbVenda IdVendaNavigation { get; set; }
        [InverseProperty("IdVendaItemNavigation")]
        public virtual ICollection<TbPresente> TbPresente { get; set; }
    }
}
