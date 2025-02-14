function calculateCreatine() {
    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(weight) || weight <= 0) {
        alert("Por favor, insira um valor válido para o peso.");
        return;
    }

    let creatineDose = weight * 0.03; // Cálculo básico: 0.03g por kg de peso corporal

    // Ajuste da dosagem com base no nível de atividade
    creatineDose *= 1.2; // Aumenta 20% para pessoas muito ativas
    let loadingDose = creatineDose * 4; // Correção do nome da variável

    let resultText = `Você deve tomar aproximadamente <span>${creatineDose.toFixed(2)}</span> gramas de creatina por dia.`;
    let resultText2 = `Caso opte pela fase de saturação, tome aproximadamente <span>${loadingDose.toFixed(2)}</span> gramas de creatina por dia nos primeiros dias.`;

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result2").innerHTML = resultText2;
}
