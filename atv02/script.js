const login = document.getElementById('username')
const senha = document.getElementById('password')
const form = document.getElementById('formulario')
const enviar = document.getElementById('login')

enviar.addEventListener('click', (event) => {
    
    event.preventDefault();
    
    if(login.value == ''){
        alert('Prencha o campo de login')
        login.classList = 'erro'
    }
    if(senha.value == ''){
        alert('Informe a senha')
        senha.classList = 'erro'
    }

    console.log(login.value)
    console.log(senha.value)

})
