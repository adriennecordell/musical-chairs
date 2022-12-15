const signupForm = document.querySelector(".signup-form")
console.log(signupForm)
const signUp = (event) => {
  event.preventDefault();
  
  const name = document.querySelector("#name-login").value.trim()
  const email = document.querySelector("#email-login").value.trim();
  
  const password = document.querySelector("#password-login").value.trim();
  
  if (email && password) {
    let newUser = { name, email, password };
    console.log(newUser)
    fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up");
      }

    }).catch(err => alert(err))
  }
};


signupForm.addEventListener("submit", signUp);
