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
