

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
                 console.log(res.current.condition.text)//condicao
                 console.log(res.location.name)//cidade
                 console.log(res.current.temp_c)//temperatura
                 console.log(res.current.feelslike_c)//sensacao termica
                 console.log(res.current.wind_kph)//velocidade do vento


                 const condicao = document.createElement('p')
                 condicao.innerHTML=res.current.condition.text

                 document.querySelector('.dados').appendChild(condicao)
                 
          
          }
          getwheaher()
    })
    }
     getNavigator()

})




