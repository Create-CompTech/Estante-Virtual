import React from 'react';
import './rodape.css';

export default function Rodape() {
    return (
        <div className="rodape">
                <div className="itens_links">
                    <a href="#">Sobre </a>
                    <a href="#">Termos </a>
                    <a href="#">Contate-nos</a>
                </div>
                <div className="itens_empresa">
                    <p>São Paulo - SP</p>
                    <p>Made by CreateCompTech &copy;</p>
                </div>
        </div>
    );
}