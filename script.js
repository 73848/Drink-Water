const garrafinhas = document.querySelectorAll('.acrecimo')
const garrafa2 = document.getElementById('garrafa2')
const principal2 = document.getElementById('principal2')

 

garrafinhas.forEach((garrafa,indice)=>{
    garrafa.addEventListener('click',()=>{
        addRemovGarrafas(garrafa)

        let porcentagem = (indice + 1)*12.5 + '%';
        garrafa2.innerHTML = porcentagem;
        garrafa2.style.height = porcentagem;
        
        principal2.children[0].innerHTML = (2 - 2*parseFloat(porcentagem)/100) + 'L'

        if(parseFloat(porcentagem) > 87.5){
            principal2.style.display ='none' ;
        }
        else{
            principal2.style.display ='flex' ;
        }
       
        console.log(indice, garrafinhas.length, parseInt(garrafa.id),porcentagem)
    })
}) 

function addRemovGarrafas(garrafa){
    if(garrafa.classList.contains('garrafinha')){
    garrafinhas.forEach((item, indice) => {
        if(garrafa.id < indice){
            item.classList.remove('garrafinha')
        }
    })
}
else{
    garrafinhas.forEach((item, indice)=>{
        if(garrafa.id >= indice){
            item.classList.add('garrafinha')
        }
    })
}}
// falta animação do fluido da garrafa!!! URGENTE!