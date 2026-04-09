import { ref, computed } from 'vue';

const currentUser = ref(null);
const token = ref(localStorage.getItem('token'));
const isAuthenticated = computed(() => !!token.value);

function login(user, tokenValue) {
  currentUser.value = user;
  token.value = tokenValue;
  localStorage.setItem('token', tokenValue);
  localStorage.setItem('user', JSON.stringify(user));
}

function logout() {
  currentUser.value = null;
  token.value = null;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

function loadUser() {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    currentUser.value = JSON.parse(savedUser);
  }
}

export { currentUser, token, isAuthenticated, login, logout, loadUser };
