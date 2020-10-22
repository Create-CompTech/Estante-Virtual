using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_pgto_autor")]
    public partial class TbPgtoAutor
    {
        [Key]
        [Column("id_pgto_autor", TypeName = "int(11)")]
        public int IdPgtoAutor { get; set; }
        [Column("id_autor", TypeName = "int(11)")]
        public int IdAutor { get; set; }
        [Column("id_ebook", TypeName = "int(11)")]
        public int IdEbook { get; set; }
        [Column("vl_pgto", TypeName = "decimal(15,2)")]
        public decimal? VlPgto { get; set; }
        [Column("dt_pgto_referente", TypeName = "datetime")]
        public DateTime? DtPgtoReferente { get; set; }
        [Column("dt_pgto_efetuado", TypeName = "datetime")]
        public DateTime? DtPgtoEfetuado { get; set; }

        [ForeignKey(nameof(IdAutor))]
        [InverseProperty(nameof(TbAutor.TbPgtoAutor))]
        public virtual TbAutor IdAutorNavigation { get; set; }
        [ForeignKey(nameof(IdEbook))]
        [InverseProperty(nameof(TbEbook.TbPgtoAutor))]
        public virtual TbEbook IdEbookNavigation { get; set; }
    }
}
