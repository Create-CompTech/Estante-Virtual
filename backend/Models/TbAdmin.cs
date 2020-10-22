using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_admin")]
    public partial class TbAdmin
    {
        public TbAdmin()
        {
            TbFeedback = new HashSet<TbFeedback>();
        }

        [Key]
        [Column("id_admin", TypeName = "int(11)")]
        public int IdAdmin { get; set; }
        [Column("id_usuario", TypeName = "int(11)")]
        public int IdUsuario { get; set; }
        [Column("id_endereco", TypeName = "int(11)")]
        public int IdEndereco { get; set; }
        [Column("ds_cargo", TypeName = "varchar(100)")]
        public string DsCargo { get; set; }

        [ForeignKey(nameof(IdEndereco))]
        [InverseProperty(nameof(TbEndereco.TbAdmin))]
        public virtual TbEndereco IdEnderecoNavigation { get; set; }
        [ForeignKey(nameof(IdUsuario))]
        [InverseProperty(nameof(TbUsuario.TbAdmin))]
        public virtual TbUsuario IdUsuarioNavigation { get; set; }
        [InverseProperty("IdAdminAprovacaoNavigation")]
        public virtual ICollection<TbFeedback> TbFeedback { get; set; }
    }
}
