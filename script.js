function changeButtonStyle() {
    const button = document.getElementById('interactiveButton');
    button.style.backgroundColor = '#45a049'; // Nová barva po najetí
    button.style.transform = 'scale(1.1)'; // Zvýraznění efektu
}

function resetButtonStyle() {
    const button = document.getElementById('interactiveButton');
    button.style.backgroundColor = '#4CAF50'; // Původní barva
    button.style.transform = 'scale(1)'; // Návrat do původní velikosti
}
