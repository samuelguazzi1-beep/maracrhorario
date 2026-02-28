const services = document.querySelectorAll('.service');
const totalSpan = document.getElementById('total');
const form = document.getElementById('form');

let selectedService = "";
let selectedPrice = 0;

// Selecionar serviço
services.forEach(service => {

    service.addEventListener('click', () => {

        services.forEach(s => s.classList.remove('selected'));

        service.classList.add('selected');

        selectedService = service.dataset.name;
        selectedPrice = service.dataset.price;

        totalSpan.textContent = selectedPrice;

    });

});

// Enviar formulário
form.addEventListener('submit', function(e){

    e.preventDefault();

    if(!selectedService){
        alert("Escolha um serviço!");
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const payment = document.getElementById('payment').value;
    const obs = document.getElementById('obs').value;

    if(payment === ""){
        alert("Escolha a forma de pagamento!");
        return;
    }

    const message = `
Olá! Gostaria de agendar:

👤 Nome: ${name}
📞 Telefone: ${phone}
💅 Serviço: ${selectedService}
💰 Valor: R$ ${selectedPrice},00
💳 Pagamento: ${payment}
📅 Data: ${date}
⏰ Horário: ${time}
📝 Obs: ${obs || "Nenhuma"}

Studio Ana Gomes
`;

    const whatsappLink = `https://wa.me/5532998540652?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");

});