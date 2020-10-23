using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_pgto_assinatura")]
    public partial class TbPgtoAssinatura
    {
        [Key]
        [Column("id_pgto_assinatura", TypeName = "int(11)")]
        public int IdPgtoAssinatura { get; set; }
        [Column("id_cartao", TypeName = "int(11)")]
        public int IdCartao { get; set; }
        [Column("dt_pgto_referente", TypeName = "datetime")]
        public DateTime? DtPgtoReferente { get; set; }
        [Column("dt_pgto_efetuado", TypeName = "datetime")]
        public DateTime? DtPgtoEfetuado { get; set; }

        [ForeignKey(nameof(IdCartao))]
        [InverseProperty(nameof(TbCartao.TbPgtoAssinatura))]
        public virtual TbCartao IdCartaoNavigation { get; set; }
    }
}
