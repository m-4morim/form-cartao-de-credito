const formulario = document.querySelector("[data-formulario]");
const camposDoFormulario = document.querySelectorAll("[required]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaResposta = {
        "nome": e.target.elements["nome"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaResposta));
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort'
]

const mensagens = {
    nome: {
        valueMissing: "Campo nome não pode ficar vazio",
        typeMismatch: "Por favor, preencha um nome válido",
        tooShort: "Por favor, preencha um nome válido"
    },
    numero: {
        valueMissing: "Este campo não pode ficar vazio",
        typeMismatch: "Por favor, preencha um número de cartão válido",
        tooShort: "O número do cartão deve conter 16 dígitos"
    },
    data: {
        valueMissing: "Estes campos não podem ficar vazio",
        typeMismatch: "Por favor, preencha uma data válida",
        tooShort: "Por favor, preencha com 2 dígitos"
    },
    cvv: {
        valueMissing: "Este campo não pode ficar vazio",
        typeMismatch: "Por favor, preencha um código de segurança válido",
        tooShort: "O código de segurança deve conter 3 dígitos"
    }
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}