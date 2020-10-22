using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_autor")]
    public partial class TbAutor
    {
        public TbAutor()
        {
            TbEbook = new HashSet<TbEbook>();
            TbPgtoAutor = new HashSet<TbPgtoAutor>();
        }

        [Key]
        [Column("id_autor", TypeName = "int(11)")]
        public int IdAutor { get; set; }
        [Column("nm_autor", TypeName = "varchar(200)")]
        public string NmAutor { get; set; }
        [Column("ds_img", TypeName = "varchar(100)")]
        public string DsImg { get; set; }
        [Column("ds_genero", TypeName = "varchar(45)")]
        public string DsGenero { get; set; }
        [Column("dt_nascimento", TypeName = "datetime")]
        public DateTime? DtNascimento { get; set; }
        [Column("ds_autor", TypeName = "varchar(400)")]
        public string DsAutor { get; set; }
        [Column("bt_filiado", TypeName = "tinyint(4)")]
        public sbyte? BtFiliado { get; set; }

        [InverseProperty("IdAutorNavigation")]
        public virtual ICollection<TbEbook> TbEbook { get; set; }
        [InverseProperty("IdAutorNavigation")]
        public virtual ICollection<TbPgtoAutor> TbPgtoAutor { get; set; }
    }
}
