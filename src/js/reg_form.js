const elements = {
  registrationForm: document.getElementById('registration_form'),
  loginForm: document.getElementById('login_form'),
  registrationName: document.getElementById('registration_name'),
  registrationEmail: document.getElementById('registration_email'),
  registrationPassword: document.getElementById('registration_password'),
  closeModalButton: document.getElementById('closeModalButton'),
  showRegistrationFormButton: document.getElementById(
    'showRegistrationFormButton'
  ),
  showLoginFormButton: document.getElementById('showLoginFormButton'),
  registerButton: document.getElementById('registerButton'),
  loginButton: document.getElementById('loginButton'),
  loginEmail: document.getElementById('login_email'),
  loginPassword: document.getElementById('login_password'),
  userDropdown: document.querySelector('.select-menu'),
  signUpButton: document.querySelector('.header-link-log-up'),
  mobileActiveAcc: document.querySelector('.mobile-active-acc'),
  userInfoContainer: document.getElementById('user_info'),
  userNameElement: document.querySelector('.user-name'),
  googleSignInButton: document.getElementById('googleSignInButton'),
  logoutButton: document.getElementById('logoutButton'),
  usernameDisplay: document.querySelector('.user-name'),
  toggleButtons: document.querySelectorAll('.toggle_buttons button'),
};
const firebaseConfig = {
  apiKey: 'AIzaSyAQpcHlYnmJgrkoX3KbdR3qCIHswCf3vaM',
  authDomain: 'bookshelf-smartfoxes-team.firebaseapp.com',
  projectId: 'bookshelf-smartfoxes-team',
  storageBucket: 'bookshelf-smartfoxes-team.appspot.com',
  messagingSenderId: '615845871184',
  appId: '1:615845871184:web:f8e6e3da332e48b2721b55',
  measurementId: 'G-J4EFJFQ0WD',
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
function redirectToIndex() {
  location.href = 'index.html';
}
function toggleFormVisibility(showForm, hideForm, clickedButton) {
  elements[showForm].style.display = 'flex';
  elements[hideForm].style.display = 'none';

  elements.toggleButtons.forEach(button => {
    button.classList.remove('clicked');
  });

  elements[clickedButton].classList.add('clicked');
}

function showRegistrationForm() {
  toggleFormVisibility(
    'registrationForm',
    'loginForm',
    'showRegistrationFormButton'
  );
}

function showLoginForm() {
  toggleFormVisibility('loginForm', 'registrationForm', 'showLoginFormButton');
}

function saveUserDataToLocalStorage(userData) {
  localStorage.setItem('user_data', JSON.stringify(userData));
}

function getUserDataFromLocalStorage() {
  const userDataString = localStorage.getItem('user_data');
  return userDataString ? JSON.parse(userDataString) : null;
}

function closeModal() {
  elements.registrationForm.style.display = 'none';
  redirectToIndex();
}

function register() {
  let name = elements.registrationName.value;
  let email = elements.registrationEmail.value;
  let password = elements.registrationPassword.value;

  if (
    !validate_field(name) ||
    !validate_email(email) ||
    !validate_password(password)
  ) {
    alert('Registration failed. Please check your inputs.');
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      let user = userCredential.user;
      let database_ref = database.ref();
      let user_data = {
        name: name,
        email: email,
        last_login: Date.now(),
      };
      database_ref.child('users/' + user.uid).set(user_data);
      saveUserDataToLocalStorage(user_data);
      alert('Registration successful!');
      console.log('Name:', name);
      console.log('Email:', email);
      clearRegistrationForm();
      redirectToIndex();
    })
    .catch(error => {
      alert(`Registration failed: ${error.message}`);
    });
}

function login() {
  let email = elements.loginEmail.value;
  let password = elements.loginPassword.value;

  if (!validate_email(email) || !validate_password(password)) {
    alert('Login failed. Please check your inputs.');
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      let user = userCredential.user;
      let database_ref = database.ref();
      let user_data = {
        last_login: Date.now(),
      };
      database_ref.child('users/' + user.uid).update(user_data);
      saveUserDataToLocalStorage(user_data);
      alert('Login successful!');
      console.log('Email:', email);
      displayUserInfo(user);
      clearLoginForm();
      redirectToIndex();
    })
    .catch(error => {
      alert(`Login failed: ${error.message}`);
    });
}

function validate_email(email) {
  let expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

function validate_field(field) {
  return field.trim() !== '';
}

function clearRegistrationForm() {
  elements.registrationName.value = '';
  elements.registrationEmail.value = '';
  elements.registrationPassword.value = '';
}

function clearLoginForm() {
  elements.loginEmail.value = '';
  elements.loginPassword.value = '';
}

function displayUserInfo(user) {
  if (elements.userInfoContainer && elements.userNameElement) {
    elements.userInfoContainer.textContent = `Welcome, ${
      user.displayName || user.email
    }!`;
    elements.userNameElement.textContent = user.displayName || user.email;
  } else {
    console.error(
      "Element with id 'user_info' or class 'user-name' not found."
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  elements.showRegistrationFormButton.addEventListener(
    'click',
    showRegistrationForm
  );
  elements.showLoginFormButton.addEventListener('click', showLoginForm);
  elements.registerButton.addEventListener('click', register);
  elements.loginButton.addEventListener('click', login);
  elements.closeModalButton.addEventListener('click', closeModal);
  elements.registrationForm.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      register();
    }
  });

  elements.loginForm.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      login();
    }
  });

  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
      })
      .catch(error => {
        console.error('Google login error:', error);
      });
  }
  elements.googleSignInButton.addEventListener('click', loginWithGoogle);

  function logout() {
    localStorage.removeItem('user_data');
    auth
      .signOut()
      .then(() => {
        redirectToIndex();
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  }
  elements.logoutButton.addEventListener('click', logout);
});

function updateUI(user) {
  if (user) {
    elements.usernameDisplay.textContent = user.displayName || user.email;

    elements.userDropdown.classList.remove('is-hidden');
    elements.signUpButton.style.display = 'none';
    elements.mobileActiveAcc.classList.remove('is-hidden');
  } else {
    // localStorage.clear();
    // window.location.href = "../index.html";
  }
}

firebase.auth().onAuthStateChanged(updateUI);
