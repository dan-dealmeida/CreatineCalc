function calculateCreatine() {
    let weight = parseFloat(document.getElementById("weight").value);
    let age = parseInt(document.getElementById("age").value);
    let activityLevel = document.getElementById("activity-level").value;

    if (isNaN(weight) || isNaN(age) || weight <= 0 || age <= 0) {
        alert("Por favor, insira valores válidos para peso e idade.");
        return;
    }

    let creatineDose = weight * 0.03; // Cálculo básico: 0.03g por kg de peso corporal

    // Ajuste da dosagem com base no nível de atividade
    if (activityLevel === "active") {
        creatineDose *= 1.1; // Aumenta 10% para pessoas ativas
    } else if (activityLevel === "very-active") {
        creatineDose *= 1.2; // Aumenta 20% para pessoas muito ativas
    }

    let resultText = `Você deve tomar aproximadamente <span>${creatineDose.toFixed(2)}</span> gramas de creatina por dia.`;

    document.getElementById("result").innerHTML = resultText;
}