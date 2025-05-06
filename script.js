function startCountdown() {
    // Definir a data do evento
    const eventDate = new Date("May 15, 2025 12:00:00").getTime();

    // Atualizar a contagem regressiva a cada segundo
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        // Cálculos para dias, horas, minutos e segundos
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Exibir o tempo restante
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Quando a contagem terminar
        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Evento começou!";
        }
    }, 1000);
}
