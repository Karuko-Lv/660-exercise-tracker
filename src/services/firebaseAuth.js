import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '../firebase';

// 注册
async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return {
      user: {
        id: userCredential.user.uid,
        email: userCredential.user.email
      },
      token: await userCredential.user.getIdToken()
    };
  } catch (error) {
    throw error.message;
  }
}

// 登录
async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      user: {
        id: userCredential.user.uid,
        email: userCredential.user.email
      },
      token: await userCredential.user.getIdToken()
    };
  } catch (error) {
    throw error.message;
  }
}

// 登出
async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    throw error.message;
  }
}

export { register, login, logout };
