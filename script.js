async function submitEvaluation() {
    const { data, error } = await supabase
        .from("avaliacoes")
        .insert([{
            vendedora: evaluationData.vendedora,
            como_conheceu: evaluationData.comoConheceu,
            avaliacao_geral: evaluationData.avaliacaoGeral,
            qualidade_servico: evaluationData.qualidadeServico,
            simpatia_equipe: evaluationData.simpatiaEquipe,
            tempo_resposta: evaluationData.tempoResposta,
            avaliacao_loja: evaluationData.avaliacaoLoja,
            comentarios: evaluationData.comentarios,
            observacoes: evaluationData.observacoes,
            timestamp: new Date().toISOString()
        }]);

    if (error) {
        alert("Erro ao salvar avaliação: " + error.message);
        return;
    }

    document.getElementById('evaluation-screen').classList.add('hidden');
    document.getElementById('success-screen').classList.remove('hidden');
}


