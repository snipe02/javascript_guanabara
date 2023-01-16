function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = '' 
        var  img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto_criança_h.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto_jovem_h.jpeg')
            } else if (idade < 50) {
                //homem          
                img.setAttribute('src', 'foto_homem_hh.png')
            } else {
                // Idiso
                img.setAttribute('src', 'foto_idoso_h.jpg')
            }
        } else   if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
                //Criança     
                img.setAttribute('src', 'foto_criança_m.jpg')              
            } else if (idade < 21) {
                //jovem     
                img.setAttribute('src', 'foto_adulta_m.jpeg')              
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto_adulta.jpeg')
            } else {
                // Idiso
                img.setAttribute('src', 'foto_idosa_m.jpg')
            }                      
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }   
    
}    