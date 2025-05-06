const eventos = [
  { nome: "Formatura", data: new Date("2025-12-20T00:00:00") },
  { nome: "Festa Julina", data: new Date("2025-07-06T00:00:00") },
  { nome: "AniversArio", data: new Date("2025-08-04T00:00:00") }
];

function showEvent(eventoId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(eventoId).style.display = 'block';
}

function updateCountdown(eventoIndex) {
  const now = new Date();
  const distancia = eventos[eventoIndex].data - now;

  if (distancia < 0) {
    document.getElementById(`countdown-${eventos[eventoIndex].nome.toLowerCase().replace(" ", "-")}`).innerHTML = "O evento já ocorreu!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById(`countdown-${eventos[eventoIndex].nome.toLowerCase().replace(" ", "-")}`).innerHTML = `
    ${dias}d ${horas}h ${minutos}m ${segundos}s
  `;
}

function init() {
  eventos.forEach((evento, index) => {
    updateCountdown(index);
    setInterval(() => updateCountdown(index), 1000);
  });
  showEvent('formatura');
}

init();
