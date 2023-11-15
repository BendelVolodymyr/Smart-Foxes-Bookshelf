import"./assets/toggle_theme-056aedf1.js";const e={registrationForm:document.getElementById("registration_form"),loginForm:document.getElementById("login_form"),registrationName:document.getElementById("registration_name"),registrationEmail:document.getElementById("registration_email"),registrationPassword:document.getElementById("registration_password"),closeModalButton:document.getElementById("closeModalButton"),showRegistrationFormButton:document.getElementById("showRegistrationFormButton"),showLoginFormButton:document.getElementById("showLoginFormButton"),registerButton:document.getElementById("registerButton"),loginButton:document.getElementById("loginButton"),loginEmail:document.getElementById("login_email"),loginPassword:document.getElementById("login_password"),userDropdown:document.querySelector(".select-menu"),signUpButton:document.querySelector(".header-link-log-up"),mobileActiveAcc:document.querySelector(".mobile-active-acc"),userInfoContainer:document.getElementById("user_info"),userNameElement:document.querySelector(".user-name"),googleSignInButton:document.getElementById("googleSignInButton"),logoutButton:document.getElementById("logoutButton"),usernameDisplay:document.querySelector(".user-name")},p={apiKey:"AIzaSyAQpcHlYnmJgrkoX3KbdR3qCIHswCf3vaM",authDomain:"bookshelf-smartfoxes-team.firebaseapp.com",projectId:"bookshelf-smartfoxes-team",storageBucket:"bookshelf-smartfoxes-team.appspot.com",messagingSenderId:"615845871184",appId:"1:615845871184:web:f8e6e3da332e48b2721b55",measurementId:"G-J4EFJFQ0WD"};firebase.initializeApp(p);const r=firebase.auth(),m=firebase.database();function c(t){localStorage.setItem("user_data",JSON.stringify(t))}function y(){e.registrationForm.style.display="none",location.href="shopping_list.html"}function g(t,n){e[t].style.display="flex",e[n].style.display="none"}function E(){g("registrationForm","loginForm")}function w(){g("loginForm","registrationForm")}function d(){let t=e.registrationName.value,n=e.registrationEmail.value,o=e.registrationPassword.value;if(!B(t)||!f(n)||!h(o)){alert("Registration failed. Please check your inputs.");return}r.createUserWithEmailAndPassword(n,o).then(i=>{let s=i.user,a=m.ref(),l={name:t,email:n,last_login:Date.now()};a.child("users/"+s.uid).set(l),c(l),alert("Registration successful!"),console.log("Name:",t),console.log("Email:",n),v(),window.location.href="/"}).catch(i=>{alert(`Registration failed: ${i.message}`)})}function u(){let t=e.loginEmail.value,n=e.loginPassword.value;if(!f(t)||!h(n)){alert("Login failed. Please check your inputs.");return}r.signInWithEmailAndPassword(t,n).then(o=>{let i=o.user,s=m.ref(),a={last_login:Date.now()};s.child("users/"+i.uid).update(a),c(a),alert("Login successful!"),console.log("Email:",t),L(i),I(),window.location.href="/"}).catch(o=>{alert(`Login failed: ${o.message}`)})}function f(t){return/^[^@]+@\w+(\.\w+)+\w$/.test(t)}function h(t){return t.length>=6}function B(t){return t.trim()!==""}function v(){e.registrationName.value="",e.registrationEmail.value="",e.registrationPassword.value=""}function I(){e.loginEmail.value="",e.loginPassword.value=""}function L(t){e.userInfoContainer&&e.userNameElement?(e.userInfoContainer.textContent=`Welcome, ${t.displayName||t.email}!`,e.userNameElement.textContent=t.displayName||t.email):console.error("Element with id 'user_info' or class 'user-name' not found.")}document.addEventListener("DOMContentLoaded",()=>{e.closeModalButton.addEventListener("click",y),e.showRegistrationFormButton.addEventListener("click",E),e.showLoginFormButton.addEventListener("click",w),e.registerButton.addEventListener("click",d),e.loginButton.addEventListener("click",u),e.registrationForm.addEventListener("keydown",o=>{o.key==="Enter"&&d()}),e.loginForm.addEventListener("keydown",o=>{o.key==="Enter"&&u()});function t(){const o=new firebase.auth.GoogleAuthProvider;r.signInWithPopup(o).then(i=>{i.user}).catch(i=>{console.error("Google login error:",i)})}e.googleSignInButton.addEventListener("click",t);function n(){localStorage.removeItem("user_data"),r.signOut().then(()=>{window.location.href="#"}).catch(o=>{console.error("Logout failed:",o)})}e.logoutButton.addEventListener("click",n)});function b(t){t&&(e.usernameDisplay.textContent=t.displayName||t.email,e.userDropdown.classList.remove("is-hidden"),e.signUpButton.style.display="none",e.mobileActiveAcc.classList.remove("is-hidden"))}firebase.auth().onAuthStateChanged(b);
//# sourceMappingURL=commonHelpers2.js.map
