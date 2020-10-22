using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_usuario")]
    public partial class TbUsuario
    {
        public TbUsuario()
        {
            TbAdmin = new HashSet<TbAdmin>();
            TbCliente = new HashSet<TbCliente>();
        }

        [Key]
        [Column("id_usuario", TypeName = "int(11)")]
        public int IdUsuario { get; set; }
        [Column("id_login", TypeName = "int(11)")]
        public int IdLogin { get; set; }
        [Column("nm_usuario", TypeName = "varchar(200)")]
        public string NmUsuario { get; set; }
        [Column("ds_img", TypeName = "varchar(100)")]
        public string DsImg { get; set; }
        [Column("dt_nascimento", TypeName = "datetime")]
        public DateTime? DtNascimento { get; set; }
        [Column("ds_cpf", TypeName = "varchar(20)")]
        public string DsCpf { get; set; }
        [Column("ds_genero", TypeName = "varchar(45)")]
        public string DsGenero { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbUsuario))]
        public virtual TbLogin IdLoginNavigation { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<TbAdmin> TbAdmin { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<TbCliente> TbCliente { get; set; }
    }
}
