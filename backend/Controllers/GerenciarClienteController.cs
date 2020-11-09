using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class GerenciarClienteController : ControllerBase
    {
        Business.GerenciadorImagem gerenciadorImagem = new Business.GerenciadorImagem();
        Utils.Conversor.ClienteConversor conversor = new Utils.Conversor.ClienteConversor();
        Business.GerenciarClienteBusiness business = new Business.GerenciarClienteBusiness();
        

        [HttpPost]
        public async Task<ActionResult<Models.Response.MensagemResponse>> Cadastrar([FromForm] Models.Request.CadastrarCliente req)
        {
            try 
            {
                Models.TbCliente cliente = conversor.ParaTabelaCadastro(req);
                cliente.IdUsuarioNavigation.DsImg = gerenciadorImagem.GerarNovoNome(req.img.FileName);

                await business.Cadastrar(cliente);
                gerenciadorImagem.SalvarFoto(cliente.IdUsuarioNavigation.DsImg, req.img);


                return new Models.Response.MensagemResponse() {
                    msg = "Cliente cadastrado com sucesso"
                };
            }
            catch(Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));
            }

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Response.ClienteResponse>> Consultar(int id)
        {
            try 
            {
                return conversor.ParaResponse(await business.Consultar(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));

            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Models.Response.MensagemResponse>> Alterar([FromForm] Models.Request.CadastrarCliente req, int id)
        {
            try 
            {
                await business.Alterar(conversor.ParaTabela(req));

                return new Models.Response.MensagemResponse() {
                    msg = "Alterações concluídas com sucesso"
                };

            }
            catch (Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));

            }
        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult<Models.Response.MensagemResponse>> Deletar(int id)
        {
            try 
            {
                await business.Excluir(id);

                return new Models.Response.MensagemResponse() {
                    msg = "Cliente deletado com sucesso"
                };

            }
            catch (Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(ex, 400));

            }
        }
    }
}