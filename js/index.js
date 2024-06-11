document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.querySelector('.filterBtn');
    const filterDropdown = document.querySelector('.filterDropdown');
    const filterSelect = document.getElementById('filterSelect');
    const cards = document.querySelectorAll('.card');

    // Filter cards based on selected value
    filterSelect.addEventListener('change', function() {
        const selectedValue = filterSelect.value;
        cards.forEach(card => {
            const range = card.querySelector('.range') ? card.querySelector('.range').textContent.trim() : '';
            if (selectedValue === '' || range === selectedValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
