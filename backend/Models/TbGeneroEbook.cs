using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_genero_ebook")]
    public partial class TbGeneroEbook
    {
        [Key]
        [Column("id_genero_ebook", TypeName = "int(11)")]
        public int IdGeneroEbook { get; set; }
        [Column("id_genero", TypeName = "int(11)")]
        public int IdGenero { get; set; }
        [Column("id_ebook", TypeName = "int(11)")]
        public int IdEbook { get; set; }
        [Column("bt_genero_principal")]
        public bool? BtGeneroPrincipal { get; set; }

        [ForeignKey(nameof(IdEbook))]
        [InverseProperty(nameof(TbEbook.TbGeneroEbook))]
        public virtual TbEbook IdEbookNavigation { get; set; }
        [ForeignKey(nameof(IdGenero))]
        [InverseProperty(nameof(TbGenero.TbGeneroEbook))]
        public virtual TbGenero IdGeneroNavigation { get; set; }
    }
}
