function aplicarTema() {
    const tema = localStorage.getItem("theme");

    if (tema === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}

function trocarTema() {
    const temaAtual = localStorage.getItem("theme");

    if (temaAtual === "dark") {
        localStorage.setItem("theme", "white");
    } else {
        localStorage.setItem("theme", "dark");
    }

    aplicarTema();
}

aplicarTema();