import { ref, computed } from 'vue';

const currentUser = ref(null);
const isAuthenticated = computed(() => !!currentUser.value);

function login(user, tokenValue) {
  currentUser.value = user;
  localStorage.setItem('user', JSON.stringify(user));
}

function logout() {
  currentUser.value = null;
  localStorage.removeItem('user');
}

function loadUser() {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    currentUser.value = JSON.parse(savedUser);
  }
}

export { currentUser, isAuthenticated, login, logout, loadUser };
