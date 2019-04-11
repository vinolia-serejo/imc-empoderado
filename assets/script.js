function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta")
    var lugarGif = document.getElementById("lugarGif")
    var gif;
    var resultado = peso / (altura * altura)
    var text;
    var  cssclass;
    
    if( resultado < 18) {
        text = "💐Uma deusa!🎵"
        gif = `<img src="https://media.giphy.com/media/hjXlQ1Cfbp4g8/giphy.gif" alt="gif Rihanna">`
        cssclass = "linha1"
    }
    else if(resultado > 18 && resultado < 25){
        text = "💐Uma louca!🎵"
        gif = `<img src="https://media.giphy.com/media/qACVtKN9INSo/giphy.gif" alt="gif Rihanna">`
        cssclass = "linha2"
    }
    else if(resultado >= 25 && resultado < 30){
       text = "💐Uma feiticeira!🎵"
       gif = `<img src="https://media.giphy.com/media/3o6fJdx5yjdYRASLbG/giphy.gif" alt="gif Rihanna">`
       cssclass = "linha3"
    }
    else if(resultado > 30 && resultado < 40){
        text = "💐Ela é demais!🎵"
        gif = `<img src="https://media.giphy.com/media/3o85xtRLdSQV3yUhPy/giphy.gif" alt="gif Rihanna">`
        cssclass = "linha4"
    }
    else{
        text = "💐Meu Deus, ela é demais!🎵"
        gif = `<img src="https://media.giphy.com/media/PuULufhcL3Eyc/giphy.gif" alt="gif Rihanna">`
        cssclass = "linha5"
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' +text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
} 

