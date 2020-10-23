using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_prateleira_item")]
    public partial class TbPrateleiraItem
    {
        [Key]
        [Column("id_prateleira_item", TypeName = "int(10) unsigned")]
        public uint IdPrateleiraItem { get; set; }
        [Column("id_prateleira", TypeName = "int(10) unsigned")]
        public uint IdPrateleira { get; set; }
        [Column("id_ebook", TypeName = "int(11)")]
        public int IdEbook { get; set; }
        [Column("bt_favorito", TypeName = "tinyint(4)")]
        public sbyte? BtFavorito { get; set; }

        [ForeignKey(nameof(IdEbook))]
        [InverseProperty(nameof(TbEbook.TbPrateleiraItem))]
        public virtual TbEbook IdEbookNavigation { get; set; }
        [ForeignKey(nameof(IdPrateleira))]
        [InverseProperty(nameof(TbPrateleira.TbPrateleiraItem))]
        public virtual TbPrateleira IdPrateleiraNavigation { get; set; }
    }
}
