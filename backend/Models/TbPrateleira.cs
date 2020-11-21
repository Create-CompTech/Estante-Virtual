using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_prateleira")]
    public partial class TbPrateleira
    {
        public TbPrateleira()
        {
            TbPrateleiraItem = new HashSet<TbPrateleiraItem>();
        }

        [Key]
        [Column("id_prateleira", TypeName = "int(11)")]
        public int IdPrateleira { get; set; }
        [Column("id_estante", TypeName = "int(11)")]
        public int IdEstante { get; set; }
        [Column("ds_nome", TypeName = "varchar(70)")]
        public string DsNome { get; set; }
        [Column("nr_posicao", TypeName = "int(11)")]
        public int? NrPosicao { get; set; }

        [ForeignKey(nameof(IdEstante))]
        [InverseProperty(nameof(TbEstante.TbPrateleira))]
        public virtual TbEstante IdEstanteNavigation { get; set; }
        [InverseProperty("IdPrateleiraNavigation")]
        public virtual ICollection<TbPrateleiraItem> TbPrateleiraItem { get; set; }
    }
}
