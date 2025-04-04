const button = document.getElementById("button_submit"); // Botão enviar do form
button.addEventListener("click", submitForm); // Adicionando o evento click com a funcão submitForm no botão
const error = document.getElementById("error"); // Mensagem de erro do form
const form = document.getElementById("form"); // Formulário para dar reset nos inputs

// Função do botão para pegar os dados inseridos e verificá-los
function submitForm(event)
{
    event.preventDefault() // Bloqueando o evento padrão para mostrar a mensagem de erro
    
    const name = document.getElementById("name").value; // -
    const email = document.getElementById("email").value; // -- Pegando os dados inseridos nos inputs
    const password = document.getElementById("password").value; // -

    /* Se os campos inputs estiverem vazios, irá apararecer a mensagem de 
    erro, se não, irá aparecer um alert mostrando as informações inseridas. */
    if (name === "" || email === "" || password === "")
    {
        error.innerText = "Erro no envio do formulário."; // Mensagem de erro
    }
    else
    {
        error.innerText = null;
        alert("Nome: " + name + "\nEmail: " + email + "\nSenha: " + password);
        form.reset();    
    }
}
