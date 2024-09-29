const bgchange = (id) => {
    const color = document.getElementById(id).innerHTML;
    document.body.style.background = color;

    localStorage.setItem('bgColor', color);
};

document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.background = savedColor;
    }
});
