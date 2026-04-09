import axios from 'axios';
import { token } from '../store/auth';

// 这里暂时使用本地开发服务器地址，部署后需要修改为实际的API地址
const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 添加JWT认证
api.interceptors.request.use(config => {
  if (token.value) {
    config.headers.Authorization = `Bearer ${token.value}`;
  }
  return config;
});

// 上传数据
async function uploadData(questions) {
  try {
    const response = await api.post('/data/upload', {
      questions,
      lastUpdated: new Date().toISOString()
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || '上传失败';
  }
}

// 下载数据
async function downloadData() {
  try {
    const response = await api.get('/data/download');
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || '下载失败';
  }
}

// 注册
async function register(username, email, password) {
  try {
    const response = await api.post('/auth/register', {
      username, email, password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || '注册失败';
  }
}

// 登录
async function login(email, password) {
  try {
    const response = await api.post('/auth/login', {
      email, password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || '登录失败';
  }
}

// 获取用户信息
async function getUserInfo() {
  try {
    const response = await api.get('/user/me');
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || '获取用户信息失败';
  }
}

export { uploadData, downloadData, register, login, getUserInfo };
