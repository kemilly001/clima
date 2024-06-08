

// //const getwheaher = () =>{
//      fetch(' http://api.weatherapi.com/v1/current.json?key=6f9411256db6429d9a1121203240106&q&q=Joao-Pessoa')
//    .then((response)=>{
//     return response.json()
//    })
//    .then((response)=>console.log(response))
// //-

window.addEventListener('load',()=>{
  const getNavigator = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
           const latitude = position.coords.latitude
           const longitude = position.coords.longitude


           console.log(latitude +'-'+ longitude)

           const getwheaher = async () =>{
            const getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=6f9411256db6429d9a1121203240106&q&q=${latitude},${longitude}&lang=pt`)

                 const res = await getData.json()

                 const condicaoContainer = document.querySelector('.condicao')
                 const localAtualContainer = document.querySelector('.local-atual')
                

                 console.log(res.current.condition.text)//condicao
                 console.log(res.location.name)//cidade
                 console.log(res.current.temp_c)//temperatura
                 console.log(res.current.feelslike_c)//sensacao termica
                 console.log(res.current.wind_kph)//velocidade do ven

                 const icone = document.createElement('img')
                 const condicao = document.createElement('p')
                 const cidade = document.createElement('span')
                 const temperatura = document.createElement('span')
                 const sensTerm = document.createElement('span')
                 const velVento = document.createElement('span')

                 condicao.innerHTML = res.current.condition.text
                 icone.setAttribute('src','https://'+res.current.condition.icon)
                 cidade.innerHTML = res.location.name
                 cidade.className.add = 'cidade'
                 temperatura.innerHTML =  res.current.temp_c + 'C°' 
                 sensTerm.innerHTML = 'Sensaçao térmica : ' + res.current.feelslike_c
                 velVento.innerHTML = 'Velocidade do Vento : ' + res.current.wind_kph + 'km/h'
                 
                 cidade.className = 'fontMedia'
                 velVento.className = 'fontMedia'
                 temperatura.className = 'fontLarga'
                 condicao.className = 'fontMedia'
                 
                 condicaoContainer.appendChild(icone)
                 condicaoContainer.appendChild(temperatura)
                 condicaoContainer.appendChild(condicao)

                 localAtualContainer.appendChild(cidade)
                 localAtualContainer.appendChild(sensTerm)
                 localAtualContainer.appendChild(velVento)

                 {
                  document.querySelector('.load').className = 'hiderLoad'



                getwheaher()
                 }
                 
          
          }
          getwheaher()
    })
    }
     getNavigator()

})




