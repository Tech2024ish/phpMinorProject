function showForm(formId){
   const loginForm = document.getElementById("login-form");
   const registerForm  = document.getElementById("register-form");

   //checking selected id and then activate it
   if(formId === "login-form"){
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
   }
   else{
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
   }
}