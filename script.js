const options = document.querySelectorAll('.option');
const colorOptions = document.querySelectorAll('.color-option');
const sizeOptions = document.querySelectorAll('.size-option');

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('img:last-child').classList.add('hidden');
        });
        option.classList.add('selected');
        option.querySelector('img:last-child').classList.remove('hidden');
    });
});

colorOptions.forEach(color => {
    color.addEventListener('click', () => {
        colorOptions.forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('img:last-child').classList.add('hidden');
        });
        color.classList.add('selected');
        color.querySelector('img:last-child').classList.remove('hidden');
    });
});

sizeOptions.forEach(size => {
    size.addEventListener('click', () => {
        sizeOptions.forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('img:last-child').classList.add('hidden');
        });
        size.classList.add('selected');
        size.querySelector('img:last-child').classList.remove('hidden');
    });
});

document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Objednávka byla odeslána!');
});
