using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_genero_fav_cliente")]
    public partial class TbGeneroFavCliente
    {
        [Key]
        [Column("id_genero_fav_cliente", TypeName = "int(11)")]
        public int IdGeneroFavCliente { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("id_genero", TypeName = "int(11)")]
        public int IdGenero { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbGeneroFavCliente))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdGenero))]
        [InverseProperty(nameof(TbGenero.TbGeneroFavCliente))]
        public virtual TbGenero IdGeneroNavigation { get; set; }
    }
}
