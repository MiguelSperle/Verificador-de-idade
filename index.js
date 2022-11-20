let submit = document.querySelector('.input-submit') // conectei o input(submit)
submit.addEventListener('click', function(event){  // adicionei um evento com parâmetro(event)
let inputAno = document.querySelector('.input-ano-1') // conectei o input onde vai receber o valor
let transf = Number(inputAno.value) // tranformei o input num valor numerico, pos de padrão ele vem como string
let date = new Date() 
let ano = date.getFullYear() // to pegando a data do ano que estamos(2022)
let idade = ano - transf // criei uma variavel onde vai fazer ano que a gente está menos o ano que a pessoa colocar no input
let res = document.querySelector('#res') // conectei onde vai aparecer a resposta da conta

  if(inputAno.value == ''){ // to verificando se não tiver nada escrito..
    inputAno.setCustomValidity('Digite algo') // vai aparecer essa mensagem personalizada, que eu mudei do required
  } else if (inputAno.value > ano ){ // se o valor escrito no input for maio que o ano que a gente ta...
    inputAno.setCustomValidity('Aceitamos apenas abaixo de 2022') // vai retornar uma mensagem de erro personalizada, que eu mudei do required

  } else if (inputAno.value < 1920){ // se o valor escrito no input for menor que o ano de 1920 ...
    inputAno.setCustomValidity('Só aceitamos anos apartir de 1920') // vai retornar uma mensagem de erro personalizada, mudei do required
  } else { // se não tiver nenhum desses erros, retornarar  o padrao
    inputAno.setCustomValidity('') // Usei vazio para indicar que o elemento não tem um erro, pra ocorrer normalmente o fluxo do programa
    event.preventDefault() // to cancnelando o evento padrão que seria enviar o formulario;
  }
 
  let fsex = document.querySelectorAll('input[type="radio"]') // conectei o input radio
  let img = document.createElement('img') // criei um elemento img
  let genero = '' // criei uma variavel vazia... (ela terá uma funcionalidade maior mais pra frente)
  img.setAttribute('id', 'foto') // setei um atributo no elemento criado(img)
  if(fsex[0].checked){ // to verificando se eu clicar no primeiro checked[0] (HOMEM) , [fsex == radio]...
   genero = 'homem' // genero passa a ser homem

    if(idade >= 0 && idade <= 10){ // To verificando a idade, dependendo da idade vai aparecer tal foto do homem
      img.setAttribute('src', 'img/fotobebe.jpg')
      img.style.width = '200px'
      img.style.height = '180px'
      img.style.borderRadius = '50%'
      
      res.innerHTML = `Olá detectamos um ${genero} com ${idade}`
      res.style.display = 'flex'
      res.style.flexDirection = 'column'
     
      res.style.fontWeight = '600'
    } else if (idade > 10 && idade <= 17){ // To verificando a idade, dependendo da idade vai aparecer tal foto do homem
      img.setAttribute('src', 'img/fotojovem.jpg')
      img.style.width = '200px'
      img.style.height = '180px'
      img.style.borderRadius = '50%'
     
      res.innerHTML = `Olá detectamos um ${genero} com ${idade}`
      res.style.display = 'flex'
      res.style.flexDirection = 'column'
  
      res.style.fontWeight = '600'
    } else if(idade > 17 && idade <= 55){ // To verificando a idade, dependendo da idade vai aparecer tal foto do homem
      img.setAttribute('src', 'img/fotoadulto.jpg')
      img.style.width = '200px'
      img.style.height = '180px'
      img.style.borderRadius = '50%'
     
      res.innerHTML = `Olá detectamos um ${genero} com ${idade}`
      res.style.display = 'flex'
      res.style.flexDirection = 'column'

      res.style.fontWeight = '600'
    } else if(idade > 55 && idade <= 102){ // To verificando a idade, dependendo da idade vai aparecer tal foto do homem
      img.setAttribute('src', 'img/fotosenhor.jpg')
      img.style.width = '200px'
      img.style.height = '180px'
      img.style.borderRadius = '50%'
     
      res.innerHTML = `Olá detectamos um ${genero} com ${idade}`
      res.style.display = 'flex'
      res.style.flexDirection = 'column'
    
      res.style.fontWeight = '600'
    } 
     



  } else if (fsex[1]. checked){  // to verificando se eu clicar no segundo checked[1] = (MULHER) ,[fsex == radio]...
      genero = 'mulher'
        
      if(idade >= 0 && idade <= 10){   // To verificando a idade, dependendo da idade vai aparecer tal foto da mulher
        img.setAttribute('src', 'img/fotomulherbebe.jpg')
        img.style.width = '200px'
        img.style.height = '180px'
        img.style.borderRadius = '50%'
        res.innerHTML = `Olá detectamos uma ${genero} com ${idade}`
        res.style.display = 'flex'
        res.style.flexDirection = 'column'
        res.style.fontWeight = '600'
      } else if (idade > 10 && idade <= 17){  // To verificando a idade, dependendo da idade vai aparecer tal foto da mulher
        img.setAttribute('src', 'img/fotomulherjovem.jpg')
        img.style.width = '200px'
        img.style.height = '180px'
        img.style.borderRadius = '50%'
        res.innerHTML = `Olá detectamos uma ${genero} com ${idade}`
        res.style.display = 'flex'
        res.style.flexDirection = 'column'
        res.style.fontWeight = '600'
      } else if(idade > 17 && idade <= 55){ // To verificando a idade, dependendo da idade vai aparecer tal foto da mulher
        img.setAttribute('src', 'img/fotomulheradulta.jpg')
        img.style.width = '200px'
        img.style.height = '180px'
        img.style.borderRadius = '50%'
        res.innerHTML = `Olá detectamos uma ${genero} com ${idade}`
        res.style.display = 'flex'
        res.style.flexDirection = 'column'
        res.style.fontWeight = '600'
      } else if (idade > 55 && idade <= 102){ // To verificando a idade, dependendo da idade vai aparecer tal foto da mulher
        img.setAttribute('src', 'img/fotomulhersenhora.jpg')
        img.style.width = '200px'
        img.style.height = '180px'
        img.style.borderRadius = '50%'
        res.innerHTML = `Olá detectamos uma ${genero} com ${idade}`
        res.style.display = 'flex'
        res.style.flexDirection = 'column'
        res.style.fontWeight = '600' 
        
      }
  }
  res.appendChild(img) // necessito desse (appendChild) pra mostrar o elemento criado nesse caso (img)

})



