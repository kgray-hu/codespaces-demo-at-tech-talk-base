document.addEventListener('DOMContentLoaded', () => {
    const colorChangeBtn = document.getElementById('colorChangeBtn');
    const colors = ['#f0f0f0', '#e6e6fa', '#ffe4e1', '#d8f8e1', '#f5f5dc'];
    let currentColorIndex = 0;

    if (colorChangeBtn) {
        colorChangeBtn.addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[currentColorIndex];
        });
    } else {
        console.warn("Button with ID 'colorChangeBtn' not found.");
    }
});
