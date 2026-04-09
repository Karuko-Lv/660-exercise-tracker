import { uploadData, downloadData } from '../services/firebaseSync';
import { currentUser } from '../store/auth';
import { ref } from 'vue';

const syncStatus = ref('idle');
const lastSyncTime = ref(null);

// 自动同步
async function autoSync(questions) {
  if (syncStatus.value === 'syncing' || !currentUser.value) return;
  
  syncStatus.value = 'syncing';
  try {
    await uploadData(currentUser.value.id, questions);
    lastSyncTime.value = new Date();
    syncStatus.value = 'success';
    setTimeout(() => {
      syncStatus.value = 'idle';
    }, 2000);
  } catch (error) {
    console.error('同步失败:', error);
    syncStatus.value = 'error';
    setTimeout(() => {
      syncStatus.value = 'idle';
    }, 2000);
  }
}

// 手动同步（下载云端数据）
async function manualSync() {
  if (!currentUser.value) {
    throw new Error('请先登录');
  }
  
  syncStatus.value = 'syncing';
  try {
    const data = await downloadData(currentUser.value.id);
    lastSyncTime.value = new Date();
    syncStatus.value = 'success';
    setTimeout(() => {
      syncStatus.value = 'idle';
    }, 2000);
    return data;
  } catch (error) {
    console.error('同步失败:', error);
    syncStatus.value = 'error';
    setTimeout(() => {
      syncStatus.value = 'idle';
    }, 2000);
    throw error;
  }
}

export { syncStatus, lastSyncTime, autoSync, manualSync };
