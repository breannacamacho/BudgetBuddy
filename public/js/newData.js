// Function to handle form submissions
const handleNewDataForm = async function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve form values
  const title = document.querySelector('input[name="data-title"]').value.trim();
  const amount = document.querySelector('input[name="data-amount"]').value.trim();
  const description = document.querySelector('textarea[name="data-description"]').value.trim();

  // Basic validation
  if (!title || !amount || isNaN(amount) || !description) {
    alert('Please fill out all fields correctly.');
    return;
  }

  try {
    // Make the POST request to the API
    const response = await fetch('/api/finance/new', {
      method: 'POST',
      body: JSON.stringify({
        title,
        amount: parseFloat(amount), // Ensure amount is a number
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // Check for errors in the response
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // parse the response JSON if needed
    const result = await response.json();

    // Notify the user of success and redirect or update the page
    alert('Data submitted successfully!');
    document.location.replace('/dashboard'); // Redirect to a different page
  } catch (error) {
    console.error('Error:', error);
    alert('There was a problem submitting your data. Please try again.');
  }
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