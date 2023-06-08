function criarBolas(){
    var tabela = document.createElement('table')
    var header = document.querySelector('header')
    header.appendChild(tabela)
    tabela.id = 'sorteados'

    for(i=1;i<76;i++){
        if((i-1)%15 == 0){
            var linha = document.createElement('tr')
            tabela.appendChild(linha)
        }
        var celula = document.createElement('td')
        linha.appendChild(celula)
        celula.id = 'bola '+i
        celula.className = 'bola'
        celula.innerText = i
    }
}
criarBolas()
var console = document.querySelector('textarea')
var vencedor = false
var sorteio = []

function sortear()
{
    if(sorteio.length == 75 || vencedor == true){
        console.value += 'Acabou o sorteio'+'\n'
        sorteioloop = false
    }
    else{
        sorteioloop = true
    }
    while(sorteioloop == true && sorteio.length < 75)
    {
        n = parseInt(Math.random()*76)
        var celula = document.getElementById('bola '+n)
        if(sorteio.indexOf(n) == -1 && n != 0)
        {
            var celulaanterior = document.getElementById('bola '+ sorteio[sorteio.length-1])
            marcar(n)
            sorteio.push(n)
            celula.style.backgroundColor = 'red'
            celula.style.color = 'white'
            celulaanterior.style.backgroundColor = 'black'
            verificar()
            sorteioloop = false
        }
    }
    sorteioloop = false
}
function verificar()
{
    for(ncartela=0;ncartela<todascartelas.length;ncartela++)
    {
        var v = 0
        for(num=0;num<24;num++)
        {
            if(sorteio.indexOf(todascartelas[ncartela][num]) != -1){
                v++
                if(v==24){
                    vencedor = true
                    console.value += 'Bingo na '+(ncartela+1)+'° cartela!'+'\n'
                }
            }
        }
    }
}

function marcar(n)
{
    celula = document.getElementsByClassName('numero')
    for(i=0;i<todascartelas.length;i++)
    {
        if(todascartelas[i].indexOf(n) == -1)
        {

        }
        else
        {
            for(c=0;c<celula.length;c++)
            {
                if(celula[c].innerText == n)
                {
                    celula[c].style.backgroundColor = 'red'
                }
                
            }
        }
    }
}


function reiniciarSorteio() 
{
    sorteio = []
    vencedor = false
    var tabela = document.querySelector('table')
    var header = document.querySelector('header')
    var area = document.getElementById('cartelas')
    header.removeChild(tabela)
    criarBolas()
    console.value += 'Sorteio reiniciado' + '\n'

    todascartelas= []
    while(area.hasChildNodes()){
        area.removeChild(area.firstChild)
    }
}

todascartelas = []

function numerosCartela()
{
    numeros = []
    while(numeros.length < 5)
    {
        b = parseInt(Math.random()*16)
        if(numeros.indexOf(b) == -1 && b != 0)
        {
            numeros.push(b)
        }

    }
    while(numeros.length < 10)
    {
        i = parseInt(Math.random()*16 +15)
        if(numeros.indexOf(i) == -1 && i != 115)
        {
            numeros.push(i)
        }

    }
    while(numeros.length < 14)
    {
        n = parseInt(Math.random()*16 + 30)
        if(numeros.indexOf(n) == -1 && n != 30)
        {
            numeros.push(n)
        }
    
    }
    while(numeros.length < 19)
    {
        g = parseInt(Math.random()*16 +45)
        if(numeros.indexOf(g) == -1 && g != 45)
        {
            numeros.push(g)
        }
    
    }
    while(numeros.length < 24)
    {
        o = parseInt(Math.random()*16 +60)
        if(numeros.indexOf(o) == -1 && o != 60)
        {
            numeros.push(o)
        }
    
    }
    todascartelas.push(numeros)
}
c=0
function gerarCartela()
{   
    if(sorteio ==0)
    {
        var cartela = document.createElement('table')
        var area = document.getElementById('cartelas')
        area.appendChild(cartela)
        cartela.className = 'cartela'
        var thead = document.createElement('thead')
        cartela.appendChild(thead)
    
        colb = document.createElement('th')
        coli = document.createElement('th')
        coln = document.createElement('th')
        colg = document.createElement('th')
        colo = document.createElement('th')
        colb.innerText = 'B'
        coli.innerText = 'I'
        coln.innerText = 'N'
        colg.innerText = 'G'
        colo.innerText = 'O'
        thead.appendChild(colb)
        thead.appendChild(coli)
        thead.appendChild(coln)
        thead.appendChild(colg)
        thead.appendChild(colo)
    
        numerosCartela()
        id=0
        for(l=0;l<5;l++)
        {
    
            
            var linha = document.createElement('tr')
            cartela.appendChild(linha)
                for(n=0;n<3;n++)
                {
                    if(l==2 && n==2){
                        var numero = document.createElement('td')
                        linha.appendChild(numero)
                        numero.style.background = 'black'
                    }
                    else if(l==4 && n==2)
                    {
                        var numero = document.createElement('td')
                        linha.appendChild(numero)
                        numero.className = 'numero'
                        numero.innerText = numeros[c,12]
                    }
                    else{
                        var numero = document.createElement('td')
                        linha.appendChild(numero)
                        numero.className = 'numero'
                        numero.id = 'numero ' + id
                        numero.innerText = numeros[c,n*5+l]
                        id++
                    }
                }
                for(n=3;n<5;n++)
                {
                    var numero = document.createElement('td')
                    linha.appendChild(numero)
                    numero.className = 'numero'
                    numero.id = 'numero ' + id
                    numero.innerText = numeros[c,(n*5)-1+l]
                    id++
                    
                }
                
        }
        console.value += 'Cartela criada'+'\n'
        c++
    }
    else{
        console.value += 'Impossível criar cartela durante o jogo'+'\n'
    }
}
function limparConsole(){
    console.value = ''
}