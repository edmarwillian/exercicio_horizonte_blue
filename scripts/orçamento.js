document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orcamento");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const data = document.getElementById("data").value;
        const detalhes = document.getElementById("detalhes").value;

        console.log({ nome, email, data, detalhes });

        alert(`
            Solicitação enviada!

            Nome: ${nome}
            Email: ${email}
            Data: ${data}
            Detalhes: ${detalhes}
        `);

        form.reset();
    });
});