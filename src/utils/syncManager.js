import { uploadData, downloadData } from '../services/sync';
import { ref } from 'vue';

const syncStatus = ref('idle'); // idle, syncing, success, error
const lastSyncTime = ref(null);

// 自动同步
async function autoSync(questions) {
  if (syncStatus.value === 'syncing') return;
  
  syncStatus.value = 'syncing';
  try {
    await uploadData(questions);
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

// 手动同步
async function manualSync() {
  syncStatus.value = 'syncing';
  try {
    const data = await downloadData();
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
