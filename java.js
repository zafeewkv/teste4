document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const yearSelect = document.getElementById('year');
    const periodSelect = document.getElementById('period');
    const classGroupSelect = document.getElementById('classGroup');
    const submitButton = document.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const year = yearSelect.value;
        const period = periodSelect.value;
        const classGroup = classGroupSelect.value;

        if (year === "2024" && period === "manha" && classGroup === "INF") {
            const url = `https://www.youtube.com/${year}/${period}/${classGroup}`;
            window.location.href = url;
        } else if (year === "2024" && period === "tarde" && classGroup === "INF") {
            const url = `pagina1.html`;
            window.location.href = url;
        } else {
            alert('Por favor, selecione todas as opções corretamente.');
        }
    });

    const checkSelections = () => {
        const year = yearSelect.value;
        const period = periodSelect.value;
        const classGroup = classGroupSelect.value;
        submitButton.disabled = !(year && period && classGroup);
    };

    yearSelect.addEventListener('change', checkSelections);
    periodSelect.addEventListener('change', checkSelections);
    classGroupSelect.addEventListener('change', checkSelections);
});
