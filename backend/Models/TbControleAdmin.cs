using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_controle_admin")]
    public partial class TbControleAdmin
    {
        [Key]
        [Column("id_controle_admin", TypeName = "int(11)")]
        public int IdControleAdmin { get; set; }
        [Column("id_login", TypeName = "int(11)")]
        public int IdLogin { get; set; }
        [Column("dt_login", TypeName = "datetime")]
        public DateTime? DtLogin { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbControleAdmin))]
        public virtual TbLogin IdLoginNavigation { get; set; }
    }
}
