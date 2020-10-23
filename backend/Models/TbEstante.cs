using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_estante")]
    public partial class TbEstante
    {
        public TbEstante()
        {
            TbPrateleira = new HashSet<TbPrateleira>();
        }

        [Key]
        [Column("id_estante", TypeName = "int(11)")]
        public int IdEstante { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbEstante))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [InverseProperty("IdEstanteNavigation")]
        public virtual ICollection<TbPrateleira> TbPrateleira { get; set; }
    }
}
