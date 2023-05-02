//Me tomo el drop down

let dropDown = document.getElementById('dropDownCL')

//Contenedor de Consumidor final
const consumFinalCont = document.getElementById('consumidorFinal')

//Contenedor de cliente Comun
const clienteComunCont = document.getElementById('clienteComun')

//Contenedor de cliente Franquiciado

const clienteFranqCont = document.getElementById('clienteFranquiciado')



//Empty

const emptyCont = document.getElementById('empty')





dropDown.addEventListener('change',(e)=>{
    
    let selector = dropDown.value

    if (selector==='Seleccione tipo de cliente') {
        emptyCont.classList.remove('display-none')
    } else if(selector!=='Seleccione tipo de cliente'){
            emptyCont.classList.add('display-none')
        }
    

    //COndicion por si es consumidor final
    if (selector==='ConsumidorFinal') {
        consumFinalCont.classList.remove('display-none')
    } else if(selector !== 'ConsumidorFinal'){
        consumFinalCont.classList.add('display-none')
    } 
    
    //Condicion por si es cliente comun
    if(selector==='Clientecomun'){
        clienteComunCont.classList.remove('display-none')
    } else if(selector!=='Clientecomun'){
        clienteComunCont.classList.add('display-none')
    }

    //Condicion por si es cliente franquiciado
    if (selector==='ClienteFranquiciado') {
        clienteFranqCont.classList.remove('display-none')
    } else if(selector!=='ClienteFranquiciado'){
        clienteFranqCont.classList.add('display-none')
    }

})



//Datos de los clientes 

let numCliente = ''

const dataCLiente = (e)=>{

    //Me traigo el numero del cliente
    
    //Indico el numero del cliente
    let numClientito = document.getElementById('numCliente')

    console.log(numClientito)
    //Divivdo la cadena en partes con split() dentro de los () le digo donde dividir en 2

    let numClientitoParts = numClientito.innerHTML.split(':');

    //Si hago esto puedo obtener la segunda parte que es el uno y guardarlo en otra var y enviarlo a la api
    console.log(numClientitoParts[1])

    let _id = numClientitoParts[1]
    if (_id===undefined) {
        console.log(`Numero que mando a la api ` + _id[1])
        
    }
    

    //Me traigo el nombre del cliente


        //P con el nombre del cliente
    let nombreCliente = document.getElementById('nameCliente');

        //Divido en 2 al cliente desp del ":"
    let nameCliente = nombreCliente.innerHTML.split(':');



}


dataCLiente()