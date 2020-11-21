using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_login")]
    public partial class TbLogin
    {
        public TbLogin()
        {
            TbControleAdmin = new HashSet<TbControleAdmin>();
            TbUsuario = new HashSet<TbUsuario>();
        }

        [Key]
        [Column("id_login", TypeName = "int(11)")]
        public int IdLogin { get; set; }
        [Column("ds_email", TypeName = "varchar(200)")]
        public string DsEmail { get; set; }
        [Column("ds_senha", TypeName = "varchar(30)")]
        public string DsSenha { get; set; }
        [Column("ds_perfil", TypeName = "varchar(100)")]
        public string DsPerfil { get; set; }
        [Column("ds_cod_seguranca", TypeName = "varchar(9)")]
        public string DsCodSeguranca { get; set; }

        [InverseProperty("IdLoginNavigation")]
        public virtual ICollection<TbControleAdmin> TbControleAdmin { get; set; }
        [InverseProperty("IdLoginNavigation")]
        public virtual ICollection<TbUsuario> TbUsuario { get; set; }
    }
}
