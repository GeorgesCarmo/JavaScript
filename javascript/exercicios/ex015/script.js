function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }else if(idade <50){
                img.setAttribute('src', 'imagens/adulto.png')
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }else if(idade <50){
                img.setAttribute('src', 'imagens/adulta.png')
            }else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}