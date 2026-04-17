const CHAVE_LOGIN = "auth";
const CHAVE_USUARIOS = "usuarios";

function obterUsuarios() {
    const usuarios = localStorage.getItem(CHAVE_USUARIOS);
    return usuarios ? JSON.parse(usuarios) : [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
}

function garantirAdmin() {
    const usuarios = obterUsuarios();

    const existe = usuarios.find(u => u.email === "admin");

    if (!existe) {
        usuarios.push({
            nome: "Administrador",
            email: "admin",
            senha: "admin"
        });

        salvarUsuarios(usuarios);
    }
}

function definirLogin(usuario) {
    localStorage.setItem(CHAVE_LOGIN, JSON.stringify(usuario));
}

function obterLogin() {
    const usuario = localStorage.getItem(CHAVE_LOGIN);
    return usuario ? JSON.parse(usuario) : null;
}

function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuarios = obterUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        definirLogin(usuario);
        window.location.href = "./index.html";
    } else {
        alert("E-mail ou senha inválidos");
    }
}

function verificarLogin() {
    const usuario = obterLogin();
    const paginaLogin = window.location.pathname.includes("login.html");

    if (!usuario && !paginaLogin) {
        window.location.href = "./login.html";
    }

    if (usuario && paginaLogin) {
        window.location.href = "./index.html";
    }
}

function sair() {
    localStorage.removeItem(CHAVE_LOGIN);
    window.location.href = "./login.html";
}

garantirAdmin();
verificarLogin();