var map = L.map('map').setView([4.458, -75.199], 13); // Reemplaza con las coordenadas reales
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([4.458, -75.199]).addTo(map); // Reemplaza con las coordenadas reales
marker.bindPopup("<b>¡Hola El Salado, Ibagué!</b><br>Este es un mensaje para la dirección indicada.").openPopup();
