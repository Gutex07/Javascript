const div = document.getElementById('quadrado')
/*      
onmouseenter="azul()"
onmouseout="vermelho()"
onmousedown="clicou()"
onmouseup="solta()"
*/

    div.addEventListener('mouseenter', azul)
    div.addEventListener('mouseout', vermelho)
    div.addEventListener('mousedown', clicou)
    div.addEventListener('mouseup', solta)

    function azul(){
        div.style.backgroundColor = 'blue'
    }
    function vermelho(){

        div.style.backgroundColor = 'red'
    }
    function clicou(){

        div.innerHTML = `
            <ul>
                <li> Item 1 </li>
                <li> Item 2 </li>
                <li> Item 3 </li>
            </ul>
            `
    }
    function solta(){
        const div = document.getElementById('quadrado')

        div.innerText = ' '
    }
    // function clicou(){
    //     const div = document.getElementById('quadrado')

    //     div.innerText = 'Clicou'
    // }
    // function solta(){
    //     const div = document.getElementById('quadrado')

    //     div.innerText = ' '
    // }