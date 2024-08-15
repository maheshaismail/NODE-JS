function calculateLoan() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    const interest = (principal * rate * time) / 100;
    const totalAmount = parseFloat(principal) + parseFloat(interest);

    document.getElementById('result').innerHTML = `
        <p>Interest: Tsh${interest.toFixed(2)}</p>
        <p>Total Amount: Tsh${totalAmount.toFixed(2)}</p>
    `;
}

const containers = document.querySelectorAll('.form-container, .result-container, .calculator-container h2');
containers.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.add('active');
    });
    container.addEventListener('blur', () => {
        container.classList.remove('active');
    });
});