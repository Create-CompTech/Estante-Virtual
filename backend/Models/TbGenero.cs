using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_genero")]
    public partial class TbGenero
    {
        public TbGenero()
        {
            TbGeneroEbook = new HashSet<TbGeneroEbook>();
            TbGeneroFavCliente = new HashSet<TbGeneroFavCliente>();
        }

        [Key]
        [Column("id_genero", TypeName = "int(11)")]
        public int IdGenero { get; set; }
        [Column("nm_genero", TypeName = "varchar(100)")]
        public string NmGenero { get; set; }

        [InverseProperty("IdGeneroNavigation")]
        public virtual ICollection<TbGeneroEbook> TbGeneroEbook { get; set; }
        [InverseProperty("IdGeneroNavigation")]
        public virtual ICollection<TbGeneroFavCliente> TbGeneroFavCliente { get; set; }
    }
}
