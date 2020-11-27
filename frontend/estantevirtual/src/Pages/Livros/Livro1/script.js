function leiaMais(){
    var pontos=document.getElementById("ponto");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btn");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Ler Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}