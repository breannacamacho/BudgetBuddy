const signupFormHandler = async function (event) {
  event.preventDefault();

  const nameEl = document.querySelector("#name-input-signup").value.trim();
  const usernameEl = document.querySelector("#username-input-signup").value.trim();
  const emailEl = document.querySelector("#email-input-signup").value.trim();
  const passwordEl = document.querySelector("#password-input-signup").value.trim();

  if (passwordEl.length >= 8 && usernameEl && nameEl && emailEl) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: nameEl,
        username: usernameEl,
        email: emailEl,
        password: passwordEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/overview");
    } else {
      alert("Failed to sign up.");
    }
  } else {
    alert(
      "Please include a name, username, email, and password. Your password must be at least 8 characters long and meet the following criteria:\n" +
      "- At least one uppercase letter\n" +
      "- At least one lowercase letter\n" +
      "- At least one number\n" +
      "- At least one special character\n" +
      "- Password cannot contain the username"
    );
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
