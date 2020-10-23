using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_endereco")]
    public partial class TbEndereco
    {
        public TbEndereco()
        {
            TbAdmin = new HashSet<TbAdmin>();
        }

        [Key]
        [Column("id_endereco", TypeName = "int(11)")]
        public int IdEndereco { get; set; }
        [Column("ds_cep", TypeName = "varchar(14)")]
        public string DsCep { get; set; }
        [Column("ds_rua", TypeName = "varchar(45)")]
        public string DsRua { get; set; }
        [Column("nr_casa", TypeName = "int(11)")]
        public int? NrCasa { get; set; }
        [Column("ds_complemento", TypeName = "varchar(100)")]
        public string DsComplemento { get; set; }
        [Column("ds_estado", TypeName = "varchar(45)")]
        public string DsEstado { get; set; }
        [Column("ds_cidade", TypeName = "varchar(45)")]
        public string DsCidade { get; set; }

        [InverseProperty("IdEnderecoNavigation")]
        public virtual ICollection<TbAdmin> TbAdmin { get; set; }
    }
}
