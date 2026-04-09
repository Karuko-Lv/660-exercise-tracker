import { db, collection, doc, setDoc, getDoc, serverTimestamp } from '../firebase';

// 上传数据到Firebase
async function uploadData(userId, questions) {
  try {
    const userDoc = doc(collection(db, "users"), userId);
    await setDoc(userDoc, {
      questions,
      lastUpdated: serverTimestamp()
    }, { merge: true });
    return { success: true };
  } catch (error) {
    throw error.message;
  }
}

// 从Firebase下载数据
async function downloadData(userId) {
  try {
    const userDoc = doc(collection(db, "users"), userId);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return {
        questions: docSnap.data().questions || [],
        lastUpdated: docSnap.data().lastUpdated
      };
    } else {
      return { questions: [], lastUpdated: null };
    }
  } catch (error) {
    throw error.message;
  }
}

export { uploadData, downloadData };
