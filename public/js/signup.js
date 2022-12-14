let newUser = [];

const signUp = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();

  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
    .then(({ email, password }) => {
      let user = new User(email, password);
      newUser.push(user);
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", signUp);
