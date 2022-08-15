let Muzzarela = {
    id: 1,
    nombre: 'Muzzarela',
    precio:500,
    ingredientes:['masa de trigo','pure de tomate','queso muzzarela','y condimentos'],
}
let Fugazeta = {
    id: 2,
    nombre: 'Fugazeta',
    precio:900,
    ingredientes:['masa de trigo','43 kilos de cebolla','queso cremoso','y condimentos'],
}
let Especial = {
    id: 3,
    nombre: 'Especial',
    precio:1100,
    ingredientes:['masa de trigo','pure de tomate','queso muzzarela','condimentos','una feta de jamon','y un morron a medio pudrir'],
}
let Cochina = {
    id: 4,
    nombre: 'Cochina',
    precio:800,
    ingredientes:['masa de trigo','pure de tomate','queso muzzarela','queso chedar','papas fritas','huevos fritos','y condimentos'],
}
let Vegana = {
    id: 5,
    nombre: 'Vegana',
    precio:4600,
    ingredientes:['masa de trigo vegano','pure de tomate vegano','queso muzzarela vegano','y condimentos veganos'],
}
let Cuatroquesos = {
    id: 6,
    nombre: 'Cuatro quesos',
    precio:400,
    ingredientes:['masa de trigo','queso muzzarela','queso roquefort','queso fontina','queso parmesano','y condimentos'],
}
const pizzas = [Muzzarela,Fugazeta,Especial,Cochina,Vegana,Cuatroquesos]


console.log ('Pizzas disponibles esta noche!: ')
for (item=0; item <= pizzas.length - 1 ; item++ ){
   
    console.log ('La ' + pizzas[item].nombre)
    
    if (pizzas[item].precio <= 600){
        console.log ('Que esta en super oferta por la semana de la pizza a menos de 600 pesos! ya ')
    }

    console.log ('que tiene un precio de ' + pizzas[item].precio + '$ pesos')
    
    if (pizzas[item].id % 2 == 1){    
        console.log ('Su ID es impar')
    } 

    console.log ('y sus ingredientes son: ')
    
    for (item2 = 0; item2 <= pizzas[item].ingredientes.length - 1; item2++){
        console.log (pizzas[item].ingredientes[item2])
    }
    console.log ('███████████████████████████████████████████████████████████████████████████████████')
}
console.log ("para hacer su pedido llame al 0800 123456")


