using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_feedback")]
    public partial class TbFeedback
    {
        [Key]
        [Column("id_feedback", TypeName = "int(11)")]
        public int IdFeedback { get; set; }
        [Column("id_ebook", TypeName = "int(11)")]
        public int IdEbook { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("id_admin_aprovacao", TypeName = "int(11)")]
        public int? IdAdminAprovacao { get; set; }
        [Column("ds_feedback", TypeName = "varchar(400)")]
        public string DsFeedback { get; set; }
        [Column("qt_estrelas", TypeName = "int(11)")]
        public int? QtEstrelas { get; set; }
        [Column("bt_aprovado")]
        public bool? BtAprovado { get; set; }
        [Column("dt_feedback", TypeName = "datetime")]
        public DateTime? DtFeedback { get; set; }

        [ForeignKey(nameof(IdAdminAprovacao))]
        [InverseProperty(nameof(TbAdmin.TbFeedback))]
        public virtual TbAdmin IdAdminAprovacaoNavigation { get; set; }
        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbFeedback))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdEbook))]
        [InverseProperty(nameof(TbEbook.TbFeedback))]
        public virtual TbEbook IdEbookNavigation { get; set; }
    }
}
