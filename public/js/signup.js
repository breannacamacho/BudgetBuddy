const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document
    .querySelector("#username-input-signup")
    .value.trim();
  const passwordEl = document
    .querySelector("#password-input-signup")
    .value.trim();
  const emailE1 = document
    .querySelector("#email-input-signup")
    .value.trim();

  if (passwordEl.length >= 8 && usernameEl) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl,
        email: emailE1,
        password: passwordEl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up. Please check your console log");
    }
  } else {
    alert(
      "Please include an username, email, and password, and make sure your password is at least 8 characters long Password must contain at least one uppercase letter Password must contain at least one lowercase letter Password must contain at least one number Password must contain at least one special character Password cannot contain username"
    );
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
