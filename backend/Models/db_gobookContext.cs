using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace backend.Models
{
    public partial class db_gobookContext : DbContext
    {
        public db_gobookContext()
        {
        }

        public db_gobookContext(DbContextOptions<db_gobookContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbAdmin> TbAdmin { get; set; }
        public virtual DbSet<TbAutor> TbAutor { get; set; }
        public virtual DbSet<TbCartao> TbCartao { get; set; }
        public virtual DbSet<TbCliente> TbCliente { get; set; }
        public virtual DbSet<TbControleAdmin> TbControleAdmin { get; set; }
        public virtual DbSet<TbEbook> TbEbook { get; set; }
        public virtual DbSet<TbEndereco> TbEndereco { get; set; }
        public virtual DbSet<TbEstante> TbEstante { get; set; }
        public virtual DbSet<TbFeedback> TbFeedback { get; set; }
        public virtual DbSet<TbGenero> TbGenero { get; set; }
        public virtual DbSet<TbGeneroEbook> TbGeneroEbook { get; set; }
        public virtual DbSet<TbGeneroFavCliente> TbGeneroFavCliente { get; set; }
        public virtual DbSet<TbLogin> TbLogin { get; set; }
        public virtual DbSet<TbPgtoAssinatura> TbPgtoAssinatura { get; set; }
        public virtual DbSet<TbPgtoAutor> TbPgtoAutor { get; set; }
        public virtual DbSet<TbPrateleira> TbPrateleira { get; set; }
        public virtual DbSet<TbPrateleiraItem> TbPrateleiraItem { get; set; }
        public virtual DbSet<TbPresente> TbPresente { get; set; }
        public virtual DbSet<TbUsuario> TbUsuario { get; set; }
        public virtual DbSet<TbVenda> TbVenda { get; set; }
        public virtual DbSet<TbVendaItem> TbVendaItem { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=localhost;user id=root;password=1234;database=db_gobook", x => x.ServerVersion("8.0.18-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TbAdmin>(entity =>
            {
                entity.HasKey(e => e.IdAdmin)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdEndereco)
                    .HasName("fk_tb_administrador_tb_endereco1_idx");

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("fk_tb_usuario_administrador_tb_usuario1_idx");

                entity.Property(e => e.DsCargo)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.IdEnderecoNavigation)
                    .WithMany(p => p.TbAdmin)
                    .HasForeignKey(d => d.IdEndereco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_administrador_tb_endereco1");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.TbAdmin)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_usuario_administrador_tb_usuario1");
            });

            modelBuilder.Entity<TbAutor>(entity =>
            {
                entity.HasKey(e => e.IdAutor)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsAutor)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsGenero)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsImg)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmAutor)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<TbCartao>(entity =>
            {
                entity.HasKey(e => e.IdCartao)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("fk_tb_cartao_tb_cliente1_idx");

                entity.Property(e => e.DsCartao)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmBandeira)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmTitular)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.TpCartao)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbCartao)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_cartao_tb_cliente1");
            });

            modelBuilder.Entity<TbCliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("fk_tb_cliente_tb_usuario1_idx");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.TbCliente)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_cliente_tb_usuario1");
            });

            modelBuilder.Entity<TbControleAdmin>(entity =>
            {
                entity.HasKey(e => e.IdControleAdmin)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdLogin)
                    .HasName("fk_tb_controle_administrador_tb_login1_idx");

                entity.HasOne(d => d.IdLoginNavigation)
                    .WithMany(p => p.TbControleAdmin)
                    .HasForeignKey(d => d.IdLogin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_controle_administrador_tb_login1");
            });

            modelBuilder.Entity<TbEbook>(entity =>
            {
                entity.HasKey(e => e.IdEbook)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdAutor)
                    .HasName("fk_tb_ebook_tb_autor1_idx");

                entity.Property(e => e.DsCodBarra)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsEbook)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsEdicao)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsImg)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsIsbn)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmEbook)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmEditora)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmLingua)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmLinguaOriginal)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.IdAutorNavigation)
                    .WithMany(p => p.TbEbook)
                    .HasForeignKey(d => d.IdAutor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_ebook_tb_autor1");
            });

            modelBuilder.Entity<TbEndereco>(entity =>
            {
                entity.HasKey(e => e.IdEndereco)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsCep)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsCidade)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsComplemento)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsEstado)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsRua)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<TbEstante>(entity =>
            {
                entity.HasKey(e => e.IdEstante)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("fk_tb_estante_tb_cliente1_idx");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbEstante)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_estante_tb_cliente1");
            });

            modelBuilder.Entity<TbFeedback>(entity =>
            {
                entity.HasKey(e => e.IdFeedback)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdAdminAprovacao)
                    .HasName("fk_tb_feedback_tb_usuario_administrador1_idx");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("fk_tb_feedback_tb_cliente1_idx");

                entity.HasIndex(e => e.IdEbook)
                    .HasName("fk_tb_feedback_tb_ebook1_idx");

                entity.Property(e => e.DsFeedback)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.IdAdminAprovacaoNavigation)
                    .WithMany(p => p.TbFeedback)
                    .HasForeignKey(d => d.IdAdminAprovacao)
                    .HasConstraintName("fk_tb_feedback_tb_usuario_administrador1");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbFeedback)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_feedback_tb_cliente1");

                entity.HasOne(d => d.IdEbookNavigation)
                    .WithMany(p => p.TbFeedback)
                    .HasForeignKey(d => d.IdEbook)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_feedback_tb_ebook1");
            });

            modelBuilder.Entity<TbGenero>(entity =>
            {
                entity.HasKey(e => e.IdGenero)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.NmGenero)
                    .HasName("nm_genero_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.NmGenero)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<TbGeneroEbook>(entity =>
            {
                entity.HasKey(e => e.IdGeneroEbook)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdEbook)
                    .HasName("fk_tb_genero_ebook_item_tb_ebook1_idx");

                entity.HasIndex(e => e.IdGenero)
                    .HasName("fk_tb_genero_ebook_item_tb_genero1_idx");

                entity.HasOne(d => d.IdEbookNavigation)
                    .WithMany(p => p.TbGeneroEbook)
                    .HasForeignKey(d => d.IdEbook)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_genero_ebook_item_tb_ebook1");

                entity.HasOne(d => d.IdGeneroNavigation)
                    .WithMany(p => p.TbGeneroEbook)
                    .HasForeignKey(d => d.IdGenero)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_genero_ebook_item_tb_genero1");
            });

            modelBuilder.Entity<TbGeneroFavCliente>(entity =>
            {
                entity.HasKey(e => e.IdGeneroFavCliente)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("fk_tb_genero_fav_cliente_tb_cliente1_idx");

                entity.HasIndex(e => e.IdGenero)
                    .HasName("fk_tb_genero_fav_cliente_tb_genero1_idx");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbGeneroFavCliente)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_genero_fav_cliente_tb_cliente1");

                entity.HasOne(d => d.IdGeneroNavigation)
                    .WithMany(p => p.TbGeneroFavCliente)
                    .HasForeignKey(d => d.IdGenero)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_genero_fav_cliente_tb_genero1");
            });

            modelBuilder.Entity<TbLogin>(entity =>
            {
                entity.HasKey(e => e.IdLogin)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsEmail)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsPerfil)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsSenha)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");
            });

            modelBuilder.Entity<TbPgtoAssinatura>(entity =>
            {
                entity.HasKey(e => e.IdPgtoAssinatura)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCartao)
                    .HasName("fk_tb_pgto_cliente_tb_cartao1_idx");

                entity.HasOne(d => d.IdCartaoNavigation)
                    .WithMany(p => p.TbPgtoAssinatura)
                    .HasForeignKey(d => d.IdCartao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_pgto_cliente_tb_cartao1");
            });

            modelBuilder.Entity<TbPgtoAutor>(entity =>
            {
                entity.HasKey(e => e.IdPgtoAutor)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdAutor)
                    .HasName("fk_tb_pagamento_autor_tb_autor1_idx");

                entity.HasIndex(e => e.IdEbook)
                    .HasName("fk_tb_pgto_autor_tb_ebook1_idx");

                entity.HasOne(d => d.IdAutorNavigation)
                    .WithMany(p => p.TbPgtoAutor)
                    .HasForeignKey(d => d.IdAutor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_pagamento_autor_tb_autor1");

                entity.HasOne(d => d.IdEbookNavigation)
                    .WithMany(p => p.TbPgtoAutor)
                    .HasForeignKey(d => d.IdEbook)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_pgto_autor_tb_ebook1");
            });

            modelBuilder.Entity<TbPrateleira>(entity =>
            {
                entity.HasKey(e => e.IdPrateleira)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdEstante)
                    .HasName("fk_tb_prateleira_tb_estante1_idx");

                entity.HasOne(d => d.IdEstanteNavigation)
                    .WithMany(p => p.TbPrateleira)
                    .HasForeignKey(d => d.IdEstante)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_prateleira_tb_estante1");
            });

            modelBuilder.Entity<TbPrateleiraItem>(entity =>
            {
                entity.HasKey(e => e.IdPrateleiraItem)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdEbook)
                    .HasName("fk_tb_prateleira_item_tb_ebook1_idx");

                entity.HasIndex(e => e.IdPrateleira)
                    .HasName("fk_tb_prateleira_item_tb_prateleira1_idx");

                entity.HasOne(d => d.IdEbookNavigation)
                    .WithMany(p => p.TbPrateleiraItem)
                    .HasForeignKey(d => d.IdEbook)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_prateleira_item_tb_ebook1");

                entity.HasOne(d => d.IdPrateleiraNavigation)
                    .WithMany(p => p.TbPrateleiraItem)
                    .HasForeignKey(d => d.IdPrateleira)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_prateleira_item_tb_prateleira1");
            });

            modelBuilder.Entity<TbPresente>(entity =>
            {
                entity.HasKey(e => e.IdPresente)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("fk_tb_presente_tb_cliente1_idx");

                entity.HasIndex(e => e.IdVendaItem)
                    .HasName("fk_tb_presente_tb_venda_item1_idx");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbPresente)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_presente_tb_cliente1");

                entity.HasOne(d => d.IdVendaItemNavigation)
                    .WithMany(p => p.TbPresente)
                    .HasForeignKey(d => d.IdVendaItem)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_presente_tb_venda_item1");
            });

            modelBuilder.Entity<TbUsuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdLogin)
                    .HasName("fk_tb_usuario_tb_login_idx");

                entity.Property(e => e.DsCpf)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsGenero)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.DsImg)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.NmUsuario)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.IdLoginNavigation)
                    .WithMany(p => p.TbUsuario)
                    .HasForeignKey(d => d.IdLogin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_usuario_tb_login");
            });

            modelBuilder.Entity<TbVenda>(entity =>
            {
                entity.HasKey(e => e.IdVenda)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCartao)
                    .HasName("fk_tb_venda_tb_cartao1_idx");

                entity.Property(e => e.DsNotaFiscal)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.Property(e => e.TpPgto)
                    .HasCharSet("utf8")
                    .HasCollation("utf8_general_ci");

                entity.HasOne(d => d.IdCartaoNavigation)
                    .WithMany(p => p.TbVenda)
                    .HasForeignKey(d => d.IdCartao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_venda_tb_cartao1");
            });

            modelBuilder.Entity<TbVendaItem>(entity =>
            {
                entity.HasKey(e => e.IdVendaItem)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdEbook)
                    .HasName("fk_tb_compra_item_tb_ebook1_idx");

                entity.HasIndex(e => e.IdVenda)
                    .HasName("fk_tb_compra_item_tb_compra1_idx");

                entity.HasOne(d => d.IdEbookNavigation)
                    .WithMany(p => p.TbVendaItem)
                    .HasForeignKey(d => d.IdEbook)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_compra_item_tb_ebook1");

                entity.HasOne(d => d.IdVendaNavigation)
                    .WithMany(p => p.TbVendaItem)
                    .HasForeignKey(d => d.IdVenda)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tb_compra_item_tb_compra1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
