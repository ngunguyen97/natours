/* eslint-disable */
import '@babel/polyfill';
import { login } from './login';

// DOM ELEMENTS
const formEl = document.querySelector('.form');

if (formEl) {
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}
