function adicionar() {
    let input = document.getElementById("tarefa");
    let lista = document.getElementById("lista");

    let texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    // botão concluir
    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    // botão excluir
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = function() {
        lista.removeChild(li);
    };

    li.appendChild(btn);
    lista.appendChild(li);

    input.value = "";
}