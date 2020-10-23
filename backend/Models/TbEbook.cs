using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_ebook")]
    public partial class TbEbook
    {
        public TbEbook()
        {
            TbFeedback = new HashSet<TbFeedback>();
            TbGeneroEbook = new HashSet<TbGeneroEbook>();
            TbPgtoAutor = new HashSet<TbPgtoAutor>();
            TbPrateleiraItem = new HashSet<TbPrateleiraItem>();
            TbVendaItem = new HashSet<TbVendaItem>();
        }

        [Key]
        [Column("id_ebook", TypeName = "int(11)")]
        public int IdEbook { get; set; }
        [Column("id_autor", TypeName = "int(11)")]
        public int IdAutor { get; set; }
        [Column("nm_ebook", TypeName = "varchar(100)")]
        public string NmEbook { get; set; }
        [Column("ds_ebook", TypeName = "varchar(100)")]
        public string DsEbook { get; set; }
        [Column("ds_img", TypeName = "varchar(100)")]
        public string DsImg { get; set; }
        [Column("vl_ebook", TypeName = "decimal(15,2)")]
        public decimal? VlEbook { get; set; }
        [Column("qt_paginas", TypeName = "int(11)")]
        public int? QtPaginas { get; set; }
        [Column("nm_editora", TypeName = "varchar(100)")]
        public string NmEditora { get; set; }
        [Column("ds_edicao", TypeName = "varchar(45)")]
        public string DsEdicao { get; set; }
        [Column("ds_cod_barra", TypeName = "varchar(45)")]
        public string DsCodBarra { get; set; }
        [Column("ds_isbn", TypeName = "varchar(13)")]
        public string DsIsbn { get; set; }
        [Column("nm_lingua", TypeName = "varchar(45)")]
        public string NmLingua { get; set; }
        [Column("nm_lingua_original", TypeName = "varchar(45)")]
        public string NmLinguaOriginal { get; set; }
        [Column("dt_insercao", TypeName = "datetime")]
        public DateTime? DtInsercao { get; set; }

        [ForeignKey(nameof(IdAutor))]
        [InverseProperty(nameof(TbAutor.TbEbook))]
        public virtual TbAutor IdAutorNavigation { get; set; }
        [InverseProperty("IdEbookNavigation")]
        public virtual ICollection<TbFeedback> TbFeedback { get; set; }
        [InverseProperty("IdEbookNavigation")]
        public virtual ICollection<TbGeneroEbook> TbGeneroEbook { get; set; }
        [InverseProperty("IdEbookNavigation")]
        public virtual ICollection<TbPgtoAutor> TbPgtoAutor { get; set; }
        [InverseProperty("IdEbookNavigation")]
        public virtual ICollection<TbPrateleiraItem> TbPrateleiraItem { get; set; }
        [InverseProperty("IdEbookNavigation")]
        public virtual ICollection<TbVendaItem> TbVendaItem { get; set; }
    }
}
