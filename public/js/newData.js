// Function to handle form submissions
const handleNewDataForm = async function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve form values
  const title = document.querySelector('input[name="data-title"]').value.trim();
  const amount = document.querySelector('input[name="data-amount"]').value.trim();
  const description = document.querySelector('textarea[name="data-description"]').value.trim();
  const type = document.querySelector('select[name="data-type"]').value;

  // Basic validation
  if (!title || !amount || isNaN(amount) || !description || !type) {
    alert('Please fill out all fields correctly.');
    return;
  }

  try {
    const response = await fetch('/api/finance', {
      method: 'POST',
      body: JSON.stringify({
        title,
        amount: parseFloat(amount), 
        description,
        type
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Notify the user of success
    alert('Data submitted successfully!');

    const result = await response.json();
    updateTotals(result.totalExpenses, result.totalIncomes);

  } catch (error) {
    console.error('Error:', error);
    alert('There was a problem submitting your data. Please try again.');
  }
};

// Function to update totals
const updateTotals = (totalExpenses, totalIncomes) => {
  const totalBalance = totalIncomes - totalExpenses;
  document.getElementById('total-expenses').textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
  document.getElementById('total-incomes').textContent = `Total Incomes: $${totalIncomes.toFixed(2)}`;
  document.getElementById('total-balance').textContent = `Total Balance: $${totalBalance.toFixed(2)}`;
};

// Attach the event listener to the form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-data-form');
  if (form) {
    form.addEventListener('submit', handleNewDataForm);
  } else {
    console.error('Form with id "new-data-form" not found.');
  }
});