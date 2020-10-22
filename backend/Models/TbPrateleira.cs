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
        [Column("id_prateleira", TypeName = "int(10) unsigned")]
        public uint IdPrateleira { get; set; }
        [Column("id_estante", TypeName = "int(11)")]
        public int IdEstante { get; set; }

        [ForeignKey(nameof(IdEstante))]
        [InverseProperty(nameof(TbEstante.TbPrateleira))]
        public virtual TbEstante IdEstanteNavigation { get; set; }
        [InverseProperty("IdPrateleiraNavigation")]
        public virtual ICollection<TbPrateleiraItem> TbPrateleiraItem { get; set; }
    }
}
