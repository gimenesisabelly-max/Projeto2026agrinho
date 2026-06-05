function missaoVerde() {
        alert("Parabéns! Sua missão é economizar água durante toda a semana.");
        }

        const missoes = [
            "Recicle pelo menos 5 materiais hoje.",
                "Economize energia desligando aparelhos sem uso.",
                    "Plante mudas de arvores e flores e cuide do nosso planeta.",
                        "Compartilhe uma dica sustentável nas redes sociais e com amigos.",
                            "Evite usar plástico descartável durante o dia. ISSO É SERIO!.",
                                "Separe corretamente os resíduos recicláveis, é muito importante"
                                ];

                                function novaMissao() {

                                    let sorteio = Math.floor(
                                            Math.random() * missoes.length
                                                );

                                                    document.getElementById("mensagem").innerHTML =
                                                        missoes[sorteio];
                                                        }
