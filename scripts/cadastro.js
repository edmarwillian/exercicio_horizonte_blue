const CHAVE_USUARIOS = "usuarios";

function obterUsuarios() {
    const usuarios = localStorage.getItem(CHAVE_USUARIOS);
    return usuarios ? JSON.parse(usuarios) : [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
}

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cep = document.getElementById("cep").value;

    fetch("https://viacep.com.br/ws/" + cep + "/json/").then(res => res.json()).then(data => {
        const usuarios = obterUsuarios();

        if (usuarios.find(u => u.email === email)) {
            alert("E-mail já cadastrado");
            return;
        }

        usuarios.push({
            nome,
            email,
            senha,
            cep,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.estado
        });

        salvarUsuarios(usuarios);

        window.location.href = "./login.html";
    }).catch(() => {
        alert("Erro ao buscar o CEP");
    });
}