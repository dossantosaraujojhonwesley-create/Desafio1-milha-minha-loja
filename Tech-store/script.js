function simularCompra() {
    const produtos = [
        { nome: "Samsung Galaxy S26 Ultra", preco: 10999 },
        { nome: "REDMAGIC Gaming", preco: 7499 },
        { nome: "iPhone 17 Pro Max", preco: 10499 }
    ];

    let total = 0;
    let resumo = "ELITE MOBILE - RESUMO DA COMPRA\n\n";

    for (const produto of produtos) {
        const resposta = prompt(
            `${produto.nome}\n` +
            `Preço: ${produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}\n\n` +
            "Quantas unidades deseja comprar?\n" +
            "Digite 0 para não selecionar."
        );

        if (resposta === null) {
            alert("Simulação cancelada.");
            return;
        }

        const quantidade = Number(resposta);

        if (
            resposta.trim() === "" ||
            !Number.isSafeInteger(quantidade) ||
            quantidade < 0
        ) {
            alert(
                "Quantidade inválida!\n" +
                "Digite um número inteiro igual ou maior que zero."
            );
            return;
        }

        const subtotal = produto.preco * quantidade;
        total += subtotal;

        resumo += `${produto.nome}\n`;
        resumo += `Quantidade: ${quantidade}\n`;
        resumo += `Subtotal: ${subtotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}\n\n`;
    }

    if (total === 0) {
        alert("Nenhum produto foi selecionado para a compra.");
        return;
    }

    const desconto = total >= 10000 ? total * 0.10 : 0;
    const totalFinal = total - desconto;

    resumo += "------------------------------\n";
    resumo += `Subtotal: ${total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}\n`;

    resumo += `Desconto: ${desconto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}\n`;

    resumo += `TOTAL FINAL: ${totalFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}`;

    alert(resumo);
}