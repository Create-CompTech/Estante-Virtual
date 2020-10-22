using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_venda")]
    public partial class TbVenda
    {
        public TbVenda()
        {
            TbVendaItem = new HashSet<TbVendaItem>();
        }

        [Key]
        [Column("id_venda", TypeName = "int(11)")]
        public int IdVenda { get; set; }
        [Column("id_cartao", TypeName = "int(11)")]
        public int IdCartao { get; set; }
        [Column("dt_venda", TypeName = "datetime")]
        public DateTime? DtVenda { get; set; }
        [Column("ds_nota_fiscal", TypeName = "varchar(45)")]
        public string DsNotaFiscal { get; set; }
        [Column("tp_pgto", TypeName = "varchar(45)")]
        public string TpPgto { get; set; }
        [Column("qt_parcelas", TypeName = "int(11)")]
        public int? QtParcelas { get; set; }

        [ForeignKey(nameof(IdCartao))]
        [InverseProperty(nameof(TbCartao.TbVenda))]
        public virtual TbCartao IdCartaoNavigation { get; set; }
        [InverseProperty("IdVendaNavigation")]
        public virtual ICollection<TbVendaItem> TbVendaItem { get; set; }
    }
}
