-- MySQL Script generated by MySQL Workbench
-- Mon Nov  2 20:18:16 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_gobook
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_gobook` ;

-- -----------------------------------------------------
-- Schema db_gobook
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_gobook` DEFAULT CHARACTER SET utf8 ;
USE `db_gobook` ;

-- -----------------------------------------------------
-- Table `db_gobook`.`tb_autor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_autor` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_autor` (
  `id_autor` INT NOT NULL AUTO_INCREMENT,
  `nm_autor` VARCHAR(200) NULL,
  `ds_img` VARCHAR(100) NULL,
  `ds_genero` VARCHAR(45) NULL,
  `dt_nascimento` DATETIME NULL,
  `ds_autor` VARCHAR(400) NULL,
  `bt_filiado` BOOL NULL,
  PRIMARY KEY (`id_autor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_ebook`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_ebook` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_ebook` (
  `id_ebook` INT NOT NULL AUTO_INCREMENT,
  `id_autor` INT NOT NULL,
  `nm_ebook` VARCHAR(100) NULL,
  `ds_ebook` VARCHAR(500) NULL,
  `ds_img` VARCHAR(100) NULL,
  `vl_ebook` DECIMAL(15,2) NULL,
  `qt_paginas` INT NULL,
  `nm_editora` VARCHAR(100) NULL,
  `ds_edicao` VARCHAR(45) NULL,
  `ds_cod_barra` VARCHAR(45) NULL,
  `ds_isbn` VARCHAR(13) NULL,
  `nm_lingua` VARCHAR(45) NULL,
  `nm_lingua_original` VARCHAR(45) NULL,
  `dt_insercao` DATETIME NULL,
  PRIMARY KEY (`id_ebook`),
  INDEX `fk_tb_ebook_tb_autor1_idx` (`id_autor` ASC),
  CONSTRAINT `fk_tb_ebook_tb_autor1`
    FOREIGN KEY (`id_autor`)
    REFERENCES `db_gobook`.`tb_autor` (`id_autor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_login` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_login` (
  `id_login` INT NOT NULL AUTO_INCREMENT,
  `ds_email` VARCHAR(200) NULL,
  `ds_senha` VARCHAR(30) NULL,
  `ds_perfil` VARCHAR(100) NULL,
  `ds_cod_seguranca` VARCHAR(9) NULL,
  PRIMARY KEY (`id_login`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_usuario` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `id_login` INT NOT NULL,
  `nm_usuario` VARCHAR(200) NULL,
  `ds_img` VARCHAR(100) NULL,
  `dt_nascimento` DATETIME NULL,
  `ds_cpf` VARCHAR(20) NULL,
  `ds_genero` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_tb_usuario_tb_login_idx` (`id_login` ASC),
  CONSTRAINT `fk_tb_usuario_tb_login`
    FOREIGN KEY (`id_login`)
    REFERENCES `db_gobook`.`tb_login` (`id_login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_endereco`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_endereco` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_endereco` (
  `id_endereco` INT NOT NULL AUTO_INCREMENT,
  `ds_cep` VARCHAR(14) NULL,
  `ds_rua` VARCHAR(45) NULL,
  `nr_casa` INT NULL,
  `ds_complemento` VARCHAR(100) NULL,
  `ds_estado` VARCHAR(45) NULL,
  `ds_cidade` VARCHAR(45) NULL,
  PRIMARY KEY (`id_endereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_admin` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_admin` (
  `id_admin` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_endereco` INT NOT NULL,
  `ds_cargo` VARCHAR(100) NULL,
  PRIMARY KEY (`id_admin`),
  INDEX `fk_tb_administrador_tb_endereco1_idx` (`id_endereco` ASC),
  INDEX `fk_tb_usuario_administrador_tb_usuario1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_tb_administrador_tb_endereco1`
    FOREIGN KEY (`id_endereco`)
    REFERENCES `db_gobook`.`tb_endereco` (`id_endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_usuario_administrador_tb_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_gobook`.`tb_usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_cliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_cliente` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `qt_pontos` INT NULL,
  `bt_assinante` BOOL NULL,
  PRIMARY KEY (`id_cliente`),
  INDEX `fk_tb_cliente_tb_usuario1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_tb_cliente_tb_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_gobook`.`tb_usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_cartao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_cartao` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_cartao` (
  `id_cartao` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `tp_cartao` VARCHAR(1) NULL,
  `nm_bandeira` VARCHAR(45) NULL,
  `nm_titular` VARCHAR(200) NULL,
  `ds_cartao` VARCHAR(19) NULL,
  `dt_expira` DATETIME NULL,
  PRIMARY KEY (`id_cartao`),
  INDEX `fk_tb_cartao_tb_cliente1_idx` (`id_cliente` ASC),
  CONSTRAINT `fk_tb_cartao_tb_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `db_gobook`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_venda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_venda` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_venda` (
  `id_venda` INT NOT NULL AUTO_INCREMENT,
  `id_cartao` INT NOT NULL,
  `dt_venda` DATETIME NULL,
  `ds_nota_fiscal` VARCHAR(45) NULL,
  `tp_pgto` VARCHAR(45) NULL,
  `qt_parcelas` INT NULL,
  PRIMARY KEY (`id_venda`),
  INDEX `fk_tb_venda_tb_cartao1_idx` (`id_cartao` ASC) ,
  CONSTRAINT `fk_tb_venda_tb_cartao1`
    FOREIGN KEY (`id_cartao`)
    REFERENCES `db_gobook`.`tb_cartao` (`id_cartao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_venda_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_venda_item` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_venda_item` (
  `id_venda_item` INT NOT NULL AUTO_INCREMENT,
  `id_ebook` INT NOT NULL,
  `id_venda` INT NOT NULL,
  `qt_itens` INT NULL,
  PRIMARY KEY (`id_venda_item`),
  INDEX `fk_tb_compra_item_tb_ebook1_idx` (`id_ebook` ASC) ,
  INDEX `fk_tb_compra_item_tb_compra1_idx` (`id_venda` ASC),
  CONSTRAINT `fk_tb_compra_item_tb_ebook1`
    FOREIGN KEY (`id_ebook`)
    REFERENCES `db_gobook`.`tb_ebook` (`id_ebook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_compra_item_tb_compra1`
    FOREIGN KEY (`id_venda`)
    REFERENCES `db_gobook`.`tb_venda` (`id_venda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_pgto_autor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_pgto_autor` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_pgto_autor` (
  `id_pgto_autor` INT NOT NULL AUTO_INCREMENT,
  `id_autor` INT NOT NULL,
  `id_ebook` INT NOT NULL,
  `vl_pgto` DECIMAL(15,2) NULL,
  `dt_pgto_referente` DATETIME NULL,
  `dt_pgto_efetuado` DATETIME NULL,
  PRIMARY KEY (`id_pgto_autor`),
  INDEX `fk_tb_pagamento_autor_tb_autor1_idx` (`id_autor` ASC) ,
  INDEX `fk_tb_pgto_autor_tb_ebook1_idx` (`id_ebook` ASC) ,
  CONSTRAINT `fk_tb_pagamento_autor_tb_autor1`
    FOREIGN KEY (`id_autor`)
    REFERENCES `db_gobook`.`tb_autor` (`id_autor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_pgto_autor_tb_ebook1`
    FOREIGN KEY (`id_ebook`)
    REFERENCES `db_gobook`.`tb_ebook` (`id_ebook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_controle_admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_controle_admin` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_controle_admin` (
  `id_controle_admin` INT NOT NULL AUTO_INCREMENT,
  `id_login` INT NOT NULL,
  `dt_login` DATETIME NULL,
  PRIMARY KEY (`id_controle_admin`),
  INDEX `fk_tb_controle_administrador_tb_login1_idx` (`id_login` ASC),
  CONSTRAINT `fk_tb_controle_administrador_tb_login1`
    FOREIGN KEY (`id_login`)
    REFERENCES `db_gobook`.`tb_login` (`id_login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_pgto_assinatura`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_pgto_assinatura` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_pgto_assinatura` (
  `id_pgto_assinatura` INT NOT NULL AUTO_INCREMENT,
  `id_cartao` INT NOT NULL,
  `dt_pgto_referente` DATETIME NULL,
  `dt_pgto_efetuado` DATETIME NULL,
  PRIMARY KEY (`id_pgto_assinatura`),
  INDEX `fk_tb_pgto_cliente_tb_cartao1_idx` (`id_cartao` ASC),
  CONSTRAINT `fk_tb_pgto_cliente_tb_cartao1`
    FOREIGN KEY (`id_cartao`)
    REFERENCES `db_gobook`.`tb_cartao` (`id_cartao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_estante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_estante` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_estante` (
  `id_estante` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_estante`),
  INDEX `fk_tb_estante_tb_cliente1_idx` (`id_cliente` ASC),
  CONSTRAINT `fk_tb_estante_tb_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `db_gobook`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_genero`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_genero` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_genero` (
  `id_genero` INT NOT NULL AUTO_INCREMENT,
  `nm_genero` VARCHAR(100) NULL,
  PRIMARY KEY (`id_genero`),
  UNIQUE INDEX `nm_genero_UNIQUE` (`nm_genero` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_feedback`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_feedback` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_feedback` (
  `id_feedback` INT NOT NULL AUTO_INCREMENT,
  `id_ebook` INT NOT NULL,
  `id_cliente` INT NOT NULL,
  `id_admin_aprovacao` INT NULL,
  `ds_feedback` VARCHAR(400) NULL,
  `qt_estrelas` INT NULL,
  `bt_aprovado` BOOL NULL,
  `dt_feedback` DATETIME NULL,
  PRIMARY KEY (`id_feedback`),
  INDEX `fk_tb_feedback_tb_ebook1_idx` (`id_ebook` ASC) ,
  INDEX `fk_tb_feedback_tb_usuario_administrador1_idx` (`id_admin_aprovacao` ASC),
  INDEX `fk_tb_feedback_tb_cliente1_idx` (`id_cliente` ASC) ,
  CONSTRAINT `fk_tb_feedback_tb_ebook1`
    FOREIGN KEY (`id_ebook`)
    REFERENCES `db_gobook`.`tb_ebook` (`id_ebook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_feedback_tb_usuario_administrador1`
    FOREIGN KEY (`id_admin_aprovacao`)
    REFERENCES `db_gobook`.`tb_admin` (`id_admin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_feedback_tb_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `db_gobook`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_genero_ebook`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_genero_ebook` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_genero_ebook` (
  `id_genero_ebook` INT NOT NULL AUTO_INCREMENT,
  `id_genero` INT NOT NULL,
  `id_ebook` INT NOT NULL,
  `bt_genero_principal` BOOL NULL,
  PRIMARY KEY (`id_genero_ebook`),
  INDEX `fk_tb_genero_ebook_item_tb_genero1_idx` (`id_genero` ASC) ,
  INDEX `fk_tb_genero_ebook_item_tb_ebook1_idx` (`id_ebook` ASC) ,
  CONSTRAINT `fk_tb_genero_ebook_item_tb_genero1`
    FOREIGN KEY (`id_genero`)
    REFERENCES `db_gobook`.`tb_genero` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_genero_ebook_item_tb_ebook1`
    FOREIGN KEY (`id_ebook`)
    REFERENCES `db_gobook`.`tb_ebook` (`id_ebook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_genero_fav_cliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_genero_fav_cliente` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_genero_fav_cliente` (
  `id_genero_fav_cliente` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `id_genero` INT NOT NULL,
  PRIMARY KEY (`id_genero_fav_cliente`),
  INDEX `fk_tb_genero_fav_cliente_tb_genero1_idx` (`id_genero` ASC) ,
  INDEX `fk_tb_genero_fav_cliente_tb_cliente1_idx` (`id_cliente` ASC) ,
  CONSTRAINT `fk_tb_genero_fav_cliente_tb_genero1`
    FOREIGN KEY (`id_genero`)
    REFERENCES `db_gobook`.`tb_genero` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_genero_fav_cliente_tb_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `db_gobook`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_prateleira`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_prateleira` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_prateleira` (
  `id_prateleira` INT NOT NULL AUTO_INCREMENT,
  `id_estante` INT NOT NULL,
  `ds_nome` VARCHAR(70),
  `nr_posicao` INT NULL,
  PRIMARY KEY (`id_prateleira`),
  INDEX `fk_tb_prateleira_tb_estante1_idx` (`id_estante` ASC) ,
  CONSTRAINT `fk_tb_prateleira_tb_estante1`
    FOREIGN KEY (`id_estante`)
    REFERENCES `db_gobook`.`tb_estante` (`id_estante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_prateleira_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_prateleira_item` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_prateleira_item` (
  `id_prateleira_item` INT NOT NULL AUTO_INCREMENT,
  `id_prateleira` INT NOT NULL,
  `id_ebook` INT NOT NULL,
  `bt_favorito` BOOL NULL,
  PRIMARY KEY (`id_prateleira_item`),
  INDEX `fk_tb_prateleira_item_tb_ebook1_idx` (`id_ebook` ASC) ,
  INDEX `fk_tb_prateleira_item_tb_prateleira1_idx` (`id_prateleira` ASC),
  CONSTRAINT `fk_tb_prateleira_item_tb_ebook1`
    FOREIGN KEY (`id_ebook`)
    REFERENCES `db_gobook`.`tb_ebook` (`id_ebook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_prateleira_item_tb_prateleira1`
    FOREIGN KEY (`id_prateleira`)
    REFERENCES `db_gobook`.`tb_prateleira` (`id_prateleira`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_gobook`.`tb_presente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_gobook`.`tb_presente` ;

CREATE TABLE IF NOT EXISTS `db_gobook`.`tb_presente` (
  `id_presente` INT NOT NULL AUTO_INCREMENT,
  `id_venda_item` INT NOT NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_presente`),
  INDEX `fk_tb_presente_tb_venda_item1_idx` (`id_venda_item` ASC) ,
  INDEX `fk_tb_presente_tb_cliente1_idx` (`id_cliente` ASC) ,
  CONSTRAINT `fk_tb_presente_tb_venda_item1`
    FOREIGN KEY (`id_venda_item`)
    REFERENCES `db_gobook`.`tb_venda_item` (`id_venda_item`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_presente_tb_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `db_gobook`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

show tables from db_gobook;