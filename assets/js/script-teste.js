const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')

for(let d = 0; d < 31; d++){
    dia.innerHTML +=
    `
        <option value="${d+1}">${d+1}</option>
        
    `
}

function converterMes(mes) {
    const date = new Date();
    date.setMonth(mes);
  
    return date.toLocaleString('pt-br', {month: 'long'});
  }

for(let m=0; m < 12; m++) {
    mes.innerHTML += 
    `
    <option value="${m+1}">${converterMes(m)}</option>
    `
}

let hoje = new Date()

for(let a= hoje.getFullYear(); a >= 1900; a--) {
    ano.innerHTML += 
    `
    <option value="${a}">${a}</option>
    `
}