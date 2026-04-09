<template>
  <div class="app">
    <header class="header">
      <div class="user-section">
        <div class="current-user">
          <select v-model="usersData.currentUser" @change="switchUser" class="user-select" v-if="!isAuthenticated">
            <option v-for="(user, id) in users" :key="id" :value="id">
              {{ user.name }}
            </option>
          </select>
          <div v-else class="auth-user">
            <span>{{ currentAuthUser?.username }}</span>
            <button @click="handleLogout" class="btn btn-sm">登出</button>
          </div>
          <button @click="showUserModal = true" class="btn btn-sm" v-if="!isAuthenticated">管理用户</button>
        </div>
      </div>
      <h1>26版660习题集记录</h1>
      <div class="header-actions">
        <div class="sync-status" v-if="isAuthenticated">
          <span class="sync-label">同步状态:</span>
          <span class="sync-indicator" :class="syncStatus.value">{{ syncStatusText }}</span>
          <button @click="syncData" class="btn btn-sm" :disabled="syncStatus.value === 'syncing'">
            手动同步
          </button>
        </div>
        <button @click="showAuthModal = true" class="btn" v-if="!isAuthenticated">登录</button>
        <button @click="showRegisterModal = true" class="btn" v-if="!isAuthenticated">注册</button>
        <button @click="exportData('csv')" class="btn">导出CSV</button>
        <button @click="exportData('json')" class="btn">导出JSON</button>
        <button @click="showClearDataModal = true" class="btn btn-danger">清除数据</button>
      </div>
    </header>
    
    <div class="analysis-section">
      <div class="analysis-grid">
        <div class="analysis-card">
          <h3>完成进度</h3>
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
          <p>{{ completedCount }} / 660 题 ({{ progressPercentage.toFixed(1) }}%)</p>
        </div>
        
        <div class="analysis-card">
          <h3>状态分布</h3>
          <div class="status-stats">
            <div class="stat-item">
              <span class="stat-label">掌握:</span>
              <span class="stat-value" style="color: #4CAF50">{{ statusStats.掌握 }} 题</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">粗心:</span>
              <span class="stat-value" style="color: #FF9800">{{ statusStats.粗心 }} 题</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">概念模糊:</span>
              <span class="stat-value" style="color: #FF5722">{{ statusStats.概念模糊 }} 题</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">没思路:</span>
              <span class="stat-value" style="color: #F44336">{{ statusStats.没思路 }} 题</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">其他:</span>
              <span class="stat-value" style="color: #9C27B0">{{ statusStats.其他 }} 题</span>
            </div>
          </div>
        </div>
        
        <div class="analysis-card">
          <h3>难度分布</h3>
          <div class="difficulty-stats">
            <div v-for="n in 5" :key="n" class="difficulty-item">
              <span class="difficulty-label">{{ n }}级:</span>
              <div class="difficulty-bar">
                <div 
                  class="difficulty-fill" 
                  :style="{ width: `${getDifficultyPercentage(n)}%` }"
                ></div>
              </div>
              <span class="difficulty-count">{{ difficultyStats[n] }} 题</span>
            </div>
          </div>
        </div>
        
        <div class="analysis-card">
          <h3>照片统计</h3>
          <div class="photo-stats">
            <div class="stat-item">
              <span class="stat-label">已上传照片:</span>
              <span class="stat-value">{{ photoCount }} 题</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">照片覆盖率:</span>
              <span class="stat-value">{{ photoPercentage.toFixed(1) }}%</span>
            </div>
          </div>
        </div>
        
        <div class="analysis-card">
          <h3>云端同步</h3>
          <div class="sync-info" v-if="!isAuthenticated">
            <p style="margin-bottom: 10px; color: #666;">登录后可同步数据到云端，在不同设备间访问</p>
            <button @click="showAuthModal = true" class="btn" style="margin-right: 10px;">登录</button>
            <button @click="showRegisterModal = true" class="btn">注册</button>
          </div>
          <div class="sync-info" v-else>
            <div class="stat-item">
              <span class="stat-label">同步状态:</span>
              <span class="stat-value" :class="'sync-' + syncStatus.value">{{ syncStatusText }}</span>
            </div>
            <div class="stat-item" v-if="lastSyncTime.value">
              <span class="stat-label">上次同步:</span>
              <span class="stat-value">{{ formatSyncTime(lastSyncTime.value) }}</span>
            </div>
            <button @click="syncData" class="btn btn-sm" :disabled="syncStatus.value === 'syncing'" style="margin-top: 10px;">
              立即同步
            </button>
          </div>
        </div>
        
        <div class="analysis-card analysis-suggestions">
          <h3>学习建议</h3>
          <div class="suggestions">
            <div v-if="statusStats.没思路 > 0" class="suggestion-item warning">
              ⚠️ 有 {{ statusStats.没思路 }} 道题"没思路"，建议重点复习相关知识点
            </div>
            <div v-if="statusStats.概念模糊 > 0" class="suggestion-item warning">
              ⚠️ 有 {{ statusStats.概念模糊 }} 道题"概念模糊"，需要加强基础概念理解
            </div>
            <div v-if="statusStats.粗心 > 0" class="suggestion-item info">
              💡 有 {{ statusStats.粗心 }} 道题"粗心"，做题时请更加仔细
            </div>
            <div v-if="statusStats.掌握 > 50" class="suggestion-item success">
              🎉 已掌握 {{ statusStats.掌握 }} 道题，继续保持！
            </div>
            <div v-if="completedCount === 0" class="suggestion-item info">
              📚 还没有开始做题，建议从简单题目开始
            </div>
            <div v-if="progressPercentage >= 80" class="suggestion-item success">
              🏆 完成度超过80%，非常棒！
            </div>
            <div v-if="averageDifficulty >= 4 && completedCount > 0" class="suggestion-item success">
              💪 平均难度达到{{ averageDifficulty.toFixed(1) }}级，挑战能力很强！
            </div>
            <div v-if="photoCount < completedCount * 0.5 && completedCount > 10" class="suggestion-item info">
              📷 建议多上传错题照片，便于复习
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="filter-section">
      <div class="search-box">
        <input 
          type="number" 
          v-model="searchNumber" 
          placeholder="输入题号搜索" 
          class="search-input"
          min="1"
          max="660"
        >
        <button @click="clearSearch" class="btn btn-secondary">清除</button>
      </div>
      <div class="filter-options">
        <select v-model="filterStatus" class="filter-select">
          <option value="">所有状态</option>
          <option value="掌握">掌握</option>
          <option value="粗心">粗心</option>
          <option value="概念模糊">概念模糊</option>
          <option value="没思路">没思路</option>
          <option value="其他">其他</option>
        </select>
        <select v-model="filterDifficulty" class="filter-select">
          <option value="">所有难度</option>
          <option value="1">1级</option>
          <option value="2">2级</option>
          <option value="3">3级</option>
          <option value="4">4级</option>
          <option value="5">5级</option>
        </select>
      </div>
    </div>
    
    <div class="questions-grid">
      <div 
        v-for="question in filteredQuestions" 
        :key="question.number" 
        class="question-card"
        :class="{ 'completed': question.status }"
      >
        <div class="question-header">
          <span class="question-number">{{ question.number }}</span>
          <div class="question-actions">
            <button 
              @click="openNoteModal(question.number)" 
              class="btn btn-sm"
              title="编辑笔记"
            >
              📝
            </button>
            <button 
              @click="openImageUpload(question.number)" 
              class="btn btn-sm"
              title="上传照片"
            >
              📷
            </button>
            <button 
              v-if="question.image" 
              @click="previewImage(question.image)" 
              class="btn btn-sm"
              title="预览照片"
            >
              👁️
            </button>
          </div>
        </div>
        
        <div class="question-status">
          <select 
            v-model="question.status" 
            @change="saveData" 
            class="status-select"
          >
            <option value="">未标记</option>
            <option value="掌握">掌握</option>
            <option value="粗心">粗心</option>
            <option value="概念模糊">概念模糊</option>
            <option value="没思路">没思路</option>
            <option value="其他">其他</option>
          </select>
        </div>
        
        <div class="question-difficulty">
          <span>难度:</span>
          <div class="difficulty-stars">
            <button 
              v-for="n in 5" 
              :key="n" 
              @click="setDifficulty(question.number, n)" 
              class="star-btn"
              :class="{ 'active': question.difficulty >= n }"
            >
              ★
            </button>
          </div>
        </div>
        
        <div v-if="question.note" class="question-note-preview">
          <div class="note-preview-text" v-html="renderMarkdown(question.note.substring(0, 100))"></div>
        </div>
      </div>
    </div>
    
    <!-- 图片上传模态框 -->
    <div v-if="showUploadModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>上传第 {{ currentQuestionNumber }} 题照片</h3>
          <button @click="showUploadModal = false" class="close-btn">×</button>
        </div>
        <div class="upload-area" 
             @dragover.prevent 
             @drop.prevent="handleDrop"
             @click="triggerFileInput"
        >
          <input 
            ref="fileInput" 
            type="file" 
            accept="image/jpeg,image/png" 
            @change="handleFileSelect"
            style="display: none"
          >
          <p>点击或拖拽图片到此处上传</p>
          <p>支持 JPG、PNG 格式</p>
        </div>
        <div v-if="previewImageData" class="image-preview">
          <img :src="previewImageData" alt="预览">
          <button @click="confirmUpload" class="btn">确认上传</button>
          <button @click="previewImageData = null" class="btn btn-secondary">取消</button>
        </div>
      </div>
    </div>
    
    <!-- 图片预览模态框 -->
    <div v-if="showPreviewModal" class="modal">
      <div class="modal-content preview-modal">
        <div class="modal-header">
          <h3>第 {{ currentQuestionNumber }} 题照片</h3>
          <button @click="showPreviewModal = false" class="close-btn">×</button>
        </div>
        <div class="preview-area">
          <img :src="previewImageData" alt="预览">
        </div>
      </div>
    </div>
    
    <!-- 笔记编辑模态框 -->
    <div v-if="showNoteModal" class="modal">
      <div class="modal-content note-modal">
        <div class="modal-header">
          <h3>第 {{ currentQuestionNumber }} 题笔记</h3>
          <button @click="showNoteModal = false" class="close-btn">×</button>
        </div>
        <div class="note-editor">
          <textarea 
            v-model="currentNote" 
            class="note-textarea"
            placeholder="在此输入笔记内容，支持Markdown格式：\n# 标题\n- 列表\n**粗体**\n*斜体*\n[链接](url)\n```代码```"
            rows="10"
          ></textarea>
        </div>
        <div class="note-actions">
          <button @click="saveNote" class="btn">保存笔记</button>
          <button @click="showNoteModal = false" class="btn btn-secondary">取消</button>
        </div>
      </div>
    </div>
    
    <!-- 清除数据模态框 -->
    <div v-if="showClearDataModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>清除数据</h3>
          <button @click="showClearDataModal = false" class="close-btn">×</button>
        </div>
        <div class="clear-data-content">
          <p class="warning-text">⚠️ 警告：此操作将清除当前用户的所有做题记录、照片和笔记，且无法恢复！</p>
          <p>确定要清除当前用户的所有数据吗？</p>
        </div>
        <div class="note-actions">
          <button @click="clearAllData" class="btn btn-danger">确定清除</button>
          <button @click="showClearDataModal = false" class="btn btn-secondary">取消</button>
        </div>
      </div>
    </div>
    
    <!-- 用户管理模态框 -->
    <div v-if="showUserModal" class="modal">
      <div class="modal-content user-modal">
        <div class="modal-header">
          <h3>用户管理</h3>
          <button @click="showUserModal = false" class="close-btn">×</button>
        </div>
        <div class="user-management">
          <div class="add-user">
            <input v-model="newUserName" placeholder="输入用户名" class="user-input">
            <button @click="createUser" class="btn">添加用户</button>
          </div>
          <div class="user-list">
            <div v-for="(user, id) in users" :key="id" class="user-item">
              <div class="user-info">
                <span class="user-name">{{ user.name }}</span>
                <span class="user-status" v-if="id === currentUserId">当前用户</span>
              </div>
              <div class="user-actions">
                <button @click="editUser(id)" class="btn btn-sm">编辑</button>
                <button @click="deleteUser(id)" class="btn btn-sm btn-danger" :disabled="id === currentUserId || Object.keys(users).length <= 1">删除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 编辑用户模态框 -->
    <div v-if="showEditUserModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>编辑用户</h3>
          <button @click="showEditUserModal = false" class="close-btn">×</button>
        </div>
        <div class="edit-user-content">
          <input v-model="editingUserName" placeholder="输入用户名" class="user-input">
        </div>
        <div class="note-actions">
          <button @click="saveEditUser" class="btn">保存</button>
          <button @click="showEditUserModal = false" class="btn btn-secondary">取消</button>
        </div>
      </div>
    </div>
    
    <!-- 登录模态框 -->
    <div v-if="showAuthModal" class="modal">
      <div class="modal-content auth-modal">
        <div class="modal-header">
          <h3>登录</h3>
          <button @click="showAuthModal = false" class="close-btn">×</button>
        </div>
        <div class="auth-content">
          <div v-if="authError" class="error-message">{{ authError }}</div>
          <div class="form-group">
            <label>邮箱</label>
            <input type="email" v-model="authForm.email" required class="auth-input">
          </div>
          <div class="form-group">
            <label>密码</label>
            <input type="password" v-model="authForm.password" required class="auth-input">
          </div>
          <button @click="handleLogin" class="btn" :disabled="authLoading">
            {{ authLoading ? '登录中...' : '登录' }}
          </button>
          <div class="auth-switch">
            还没有账户？
            <button @click="showAuthModal = false; showRegisterModal = true" class="link-btn">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 注册模态框 -->
    <div v-if="showRegisterModal" class="modal">
      <div class="modal-content auth-modal">
        <div class="modal-header">
          <h3>注册</h3>
          <button @click="showRegisterModal = false" class="close-btn">×</button>
        </div>
        <div class="auth-content">
          <div v-if="authError" class="error-message">{{ authError }}</div>
          <div class="form-group">
            <label>用户名</label>
            <input type="text" v-model="authForm.username" required class="auth-input">
          </div>
          <div class="form-group">
            <label>邮箱</label>
            <input type="email" v-model="authForm.email" required class="auth-input">
          </div>
          <div class="form-group">
            <label>密码</label>
            <input type="password" v-model="authForm.password" required class="auth-input">
          </div>
          <button @click="handleRegister" class="btn" :disabled="authLoading">
            {{ authLoading ? '注册中...' : '注册' }}
          </button>
          <div class="auth-switch">
            已有账户？
            <button @click="showRegisterModal = false; showAuthModal = true" class="link-btn">
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { currentUser, isAuthenticated, login, logout, loadUser } from './store/auth'
import { register, login as apiLogin } from './services/firebaseAuth'
import { uploadData, downloadData } from './services/firebaseSync'
import { syncStatus, lastSyncTime, autoSync, manualSync } from './utils/firebaseSyncManager'
import { auth, onAuthStateChanged } from './firebase'

const md = new MarkdownIt({
  breaks: true,
  linkify: true
})

export default {
  data() {
    return {
      questions: [],
      filterStatus: '',
      filterDifficulty: '',
      searchNumber: '',
      showUploadModal: false,
      showPreviewModal: false,
      showNoteModal: false,
      showClearDataModal: false,
      showUserModal: false,
      showEditUserModal: false,
      showAuthModal: false,
      showRegisterModal: false,
      currentQuestionNumber: null,
      previewImageData: null,
      currentNote: '',
      saveTimeout: null,
      storageKey: '660QuestionsUsers',
      backupKey: '660QuestionsUsersBackup',
      dataVersion: '1.2',
      // 用户系统相关
      usersData: {
        currentUser: null,
        users: {}
      },
      newUserName: '',
      editingUserId: null,
      editingUserName: '',
      // 认证相关
      authForm: {
        email: '',
        password: '',
        username: ''
      },
      authError: '',
      authLoading: false,
      // 同步相关
      syncStatus: syncStatus,
      lastSyncTime: lastSyncTime
    }
  },
  computed: {
    filteredQuestions() {
      let result = this.questions
      
      // 按状态筛选
      if (this.filterStatus) {
        result = result.filter(q => q.status === this.filterStatus)
      }
      
      // 按难度筛选
      if (this.filterDifficulty) {
        result = result.filter(q => q.difficulty === parseInt(this.filterDifficulty))
      }
      
      // 按题号搜索
      if (this.searchNumber) {
        const number = parseInt(this.searchNumber)
        result = result.filter(q => q.number === number)
      }
      
      return result
    },
    completedCount() {
      return this.questions.filter(q => q.status).length
    },
    progressPercentage() {
      return (this.completedCount / 660) * 100
    },
    statusStats() {
      const stats = {
        '掌握': 0,
        '粗心': 0,
        '概念模糊': 0,
        '没思路': 0,
        '其他': 0
      }
      
      this.questions.forEach(q => {
        if (q.status && stats[q.status] !== undefined) {
          stats[q.status]++
        }
      })
      
      return stats
    },
    difficultyStats() {
      const stats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      
      this.questions.forEach(q => {
        if (q.difficulty > 0 && stats[q.difficulty] !== undefined) {
          stats[q.difficulty]++
        }
      })
      
      return stats
    },
    photoCount() {
      return this.questions.filter(q => q.image).length
    },
    photoPercentage() {
      return this.completedCount > 0 ? (this.photoCount / this.completedCount) * 100 : 0
    },
    averageDifficulty() {
      const questionsWithDifficulty = this.questions.filter(q => q.difficulty > 0)
      if (questionsWithDifficulty.length === 0) return 0
      
      const totalDifficulty = questionsWithDifficulty.reduce((sum, q) => sum + q.difficulty, 0)
      return totalDifficulty / questionsWithDifficulty.length
    },
    // 用户系统相关计算属性
    currentUserName() {
      if (this.usersData.currentUser && this.usersData.users[this.usersData.currentUser]) {
        return this.usersData.users[this.usersData.currentUser].name
      }
      return '未登录'
    },
    users() {
      return this.usersData.users
    },
    currentUserId() {
      return this.usersData.currentUser
    },
    // 认证相关计算属性
    isAuthenticated() {
      return isAuthenticated
    },
    currentAuthUser() {
      return currentUser.value
    },
    // 同步相关计算属性
    syncStatusText() {
      switch (this.syncStatus.value) {
        case 'syncing': return '同步中...';
        case 'success': return '同步成功';
        case 'error': return '同步失败';
        default: return '空闲';
      }
    },
    formatSyncTime(date) {
      if (!date) return '从未同步';
      return new Date(date).toLocaleString('zh-CN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    
  },
  mounted() {
    // 初始化数据
    this.initializeData()
    // 监听Firebase认证状态
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 用户已登录
        const userData = {
          id: user.uid,
          email: user.email
        }
        login(userData, null) // Firebase不需要token存储
        this.syncData() // 自动同步数据
      } else {
        // 用户未登录
        logout()
      }
    })
  },
  methods: {
    initializeData() {
      try {
        // 从本地存储加载用户数据
        const savedData = localStorage.getItem(this.storageKey)
        if (savedData) {
          try {
            const parsedData = JSON.parse(savedData)
            // 数据版本迁移
            if (parsedData.version === this.dataVersion) {
              this.usersData = {
                currentUser: parsedData.currentUser,
                users: parsedData.users
              }
            } else {
              this.usersData = this.migrateUserData(parsedData)
            }
            // 加载当前用户数据
            this.loadUserData()
          } catch (parseError) {
            console.error('解析用户数据失败，尝试从备份恢复:', parseError)
            this.loadUsersFromBackup()
          }
        } else {
          // 尝试从备份加载
          this.loadUsersFromBackup()
        }
      } catch (error) {
        console.error('加载用户数据失败:', error)
        // 检查是否存在旧数据
        this.checkForOldData()
      }
    },
    loadUsersFromBackup() {
      try {
        const backupData = localStorage.getItem(this.backupKey)
        if (backupData) {
          const parsedData = JSON.parse(backupData)
          this.usersData = {
            currentUser: parsedData.currentUser,
            users: parsedData.users
          }
          this.loadUserData()
          console.log('从备份恢复用户数据成功')
        } else {
          this.createDefaultUser()
        }
      } catch (error) {
        console.error('从备份恢复用户数据失败:', error)
        this.createDefaultUser()
      }
    },
    createDefaultUser() {
      // 创建默认用户
      const defaultUserId = 'user_' + Date.now()
      this.usersData = {
        currentUser: defaultUserId,
        users: {
          [defaultUserId]: {
            name: '默认用户',
            createdAt: Date.now(),
            data: {
              version: this.dataVersion,
              timestamp: Date.now(),
              questions: this.initializeDefaultQuestions()
            }
          }
        }
      }
      this.loadUserData()
      this.saveUsersData()
    },
    initializeDefaultQuestions() {
      return Array.from({ length: 660 }, (_, index) => ({
        number: index + 1,
        status: '',
        difficulty: 0,
        image: null,
        note: ''
      }))
    },
    ensureQuestionFields(questions) {
      questions.forEach(q => {
        if (q.note === undefined) q.note = ''
        if (q.image === undefined) q.image = null
        if (q.status === undefined) q.status = ''
        if (q.difficulty === undefined) q.difficulty = 0
      })
      return questions
    },
    migrateUserData(oldData) {
      // 用户数据版本迁移逻辑
      const newUsersData = {
        currentUser: oldData.currentUser,
        users: {}
      }
      
      // 迁移用户数据
      if (oldData.users) {
        Object.keys(oldData.users).forEach(userId => {
          const user = oldData.users[userId]
          newUsersData.users[userId] = {
            name: user.name,
            createdAt: user.createdAt || Date.now(),
            data: {
              version: this.dataVersion,
              timestamp: Date.now(),
              questions: this.ensureQuestionFields(user.data?.questions || this.initializeDefaultQuestions())
            }
          }
        })
      }
      
      // 如果没有用户，创建默认用户
      if (Object.keys(newUsersData.users).length === 0) {
        this.createDefaultUser()
        return this.usersData
      }
      
      return newUsersData
    },
    checkForOldData() {
      // 检查是否存在旧数据（非用户系统）
      const oldData = localStorage.getItem('660Questions')
      if (oldData) {
        try {
          const parsedData = JSON.parse(oldData)
          // 创建默认用户并迁移数据
          const defaultUserId = 'user_' + Date.now()
          this.usersData = {
            currentUser: defaultUserId,
            users: {
              [defaultUserId]: {
                name: '默认用户',
                createdAt: Date.now(),
                data: {
                  version: this.dataVersion,
                  timestamp: Date.now(),
                  questions: this.ensureQuestionFields(parsedData.questions || this.initializeDefaultQuestions())
                }
              }
            }
          }
          this.loadUserData()
          this.saveUsersData()
          // 删除旧数据
          localStorage.removeItem('660Questions')
          localStorage.removeItem('660QuestionsBackup')
          console.log('旧数据迁移成功')
        } catch (error) {
          console.error('旧数据迁移失败:', error)
          this.createDefaultUser()
        }
      } else {
        this.createDefaultUser()
      }
    },
    loadUserData() {
      if (this.usersData.currentUser && this.usersData.users[this.usersData.currentUser]) {
        const userData = this.usersData.users[this.usersData.currentUser]
        if (userData && userData.data) {
          this.questions = this.ensureQuestionFields(userData.data.questions || this.initializeDefaultQuestions())
        }
      }
      // 确保questions始终被初始化
      if (!this.questions || this.questions.length === 0) {
        this.questions = this.initializeDefaultQuestions()
      }
    },
    saveData() {
      // 防抖处理，避免频繁写入
      clearTimeout(this.saveTimeout)
      this.saveTimeout = setTimeout(() => {
        this.saveUserData()
        // 如果已认证，自动同步到云端
        if (isAuthenticated.value) {
          autoSync(this.questions)
        }
      }, 300) // 300ms防抖
    },
    saveUserData() {
      if (this.usersData.currentUser && this.usersData.users[this.usersData.currentUser]) {
        // 更新当前用户的题目数据
        const userData = this.usersData.users[this.usersData.currentUser]
        userData.data.questions = this.questions
        userData.data.timestamp = Date.now()
        this.saveUsersData()
      }
    },
    saveUsersData() {
      try {
        const data = {
          version: this.dataVersion,
          timestamp: Date.now(),
          currentUser: this.usersData.currentUser,
          users: this.usersData.users
        }
        // 先保存备份
        localStorage.setItem(this.backupKey, JSON.stringify(data))
        // 再保存主数据
        localStorage.setItem(this.storageKey, JSON.stringify(data))
        console.log('用户数据保存成功')
      } catch (error) {
        console.error('保存用户数据失败:', error)
        // 尝试使用sessionStorage作为备选
        try {
          sessionStorage.setItem(this.storageKey, JSON.stringify(this.usersData))
          console.log('使用sessionStorage保存用户数据')
        } catch (sessionError) {
          console.error('sessionStorage也保存失败:', sessionError)
          // 显示用户友好的错误提示
          alert('数据保存失败，部分功能可能受限')
        }
      }
    },
    setDifficulty(number, difficulty) {
      const question = this.questions.find(q => q.number === number)
      if (question) {
        question.difficulty = difficulty
        this.saveData()
      }
    },
    openImageUpload(number) {
      this.currentQuestionNumber = number
      this.previewImageData = null
      this.showUploadModal = true
    },
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileSelect(e) {
      const file = e.target.files[0]
      if (file) {
        this.previewFile(file)
      }
    },
    handleDrop(e) {
      const file = e.dataTransfer.files[0]
      if (file) {
        this.previewFile(file)
      }
    },
    previewFile(file) {
      if (!file.type.match('image.*')) {
        alert('请上传图片文件')
        return
      }
      
      const reader = new FileReader()
      reader.onload = (e) => {
        this.previewImageData = e.target.result
      }
      reader.readAsDataURL(file)
    },
    confirmUpload() {
      if (this.previewImageData && this.currentQuestionNumber) {
        const question = this.questions.find(q => q.number === this.currentQuestionNumber)
        if (question) {
          question.image = this.previewImageData
          this.saveData()
          this.showUploadModal = false
          this.previewImageData = null
        }
      }
    },
    previewImage(imageData) {
      this.previewImageData = imageData
      this.showPreviewModal = true
    },
    clearSearch() {
      this.searchNumber = ''
    },
    exportData(format) {
      if (format === 'json') {
        this.exportJSON()
      } else if (format === 'csv') {
        this.exportCSV()
      }
    },
    exportJSON() {
      const dataStr = JSON.stringify(this.questions, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      this.downloadFile(dataBlob, '660_questions.json')
    },
    exportCSV() {
      const headers = ['题号', '状态', '难度', '是否有照片', '笔记']
      const rows = this.questions.map(q => [
        q.number,
        q.status || '未标记',
        q.difficulty,
        q.image ? '是' : '否',
        q.note || ''
      ])
      
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      ].join('\n')
      
      const dataBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      this.downloadFile(dataBlob, '660_questions.csv')
    },
    downloadFile(blob, filename) {
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    },
    getDifficultyPercentage(level) {
      const maxCount = Math.max(...Object.values(this.difficultyStats))
      return maxCount > 0 ? (this.difficultyStats[level] / maxCount) * 100 : 0
    },
    openNoteModal(number) {
      this.currentQuestionNumber = number
      const question = this.questions.find(q => q.number === number)
      this.currentNote = question ? question.note || '' : ''
      this.showNoteModal = true
    },
    saveNote() {
      if (this.currentQuestionNumber) {
        const question = this.questions.find(q => q.number === this.currentQuestionNumber)
        if (question) {
          question.note = this.currentNote
          this.saveData()
          this.showNoteModal = false
        }
      }
    },
    renderMarkdown(text) {
      if (!text) return ''
      return md.render(text)
    },
    clearAllData() {
      if (confirm('确定要清除当前用户的所有数据吗？此操作无法恢复！')) {
        try {
          // 清除当前用户的数据
          if (this.usersData.currentUser && this.usersData.users[this.usersData.currentUser]) {
            this.usersData.users[this.usersData.currentUser].data.questions = this.initializeDefaultQuestions()
            this.questions = this.initializeDefaultQuestions()
            this.saveUsersData()
          }
          this.showClearDataModal = false
          
          console.log('数据清除成功')
          alert('数据已成功清除')
        } catch (error) {
          console.error('清除数据失败:', error)
          alert('清除数据失败，请重试')
        }
      }
    },
    // 用户管理功能
    createUser() {
      if (this.newUserName.trim()) {
        const userId = 'user_' + Date.now()
        this.usersData.users[userId] = {
          name: this.newUserName.trim(),
          createdAt: Date.now(),
          data: {
            version: this.dataVersion,
            timestamp: Date.now(),
            questions: this.initializeDefaultQuestions()
          }
        }
        this.usersData.currentUser = userId
        this.loadUserData()
        this.saveUsersData()
        this.newUserName = ''
        this.showUserModal = false
        console.log('用户创建成功')
      } else {
        alert('请输入用户名')
      }
    },
    switchUser(event) {
      const userId = event.target.value
      if (this.usersData.users[userId]) {
        this.usersData.currentUser = userId
        this.loadUserData()
        this.saveUsersData()
        console.log('用户切换成功')
      }
    },
    deleteUser(userId) {
      if (confirm('确定要删除此用户吗？此操作无法恢复！')) {
        if (Object.keys(this.usersData.users).length > 1) {
          delete this.usersData.users[userId]
          // 如果删除的是当前用户，切换到第一个用户
          if (this.usersData.currentUser === userId) {
            const userIds = Object.keys(this.usersData.users)
            if (userIds.length > 0) {
              this.usersData.currentUser = userIds[0]
              this.loadUserData()
            }
          }
          this.saveUsersData()
          console.log('用户删除成功')
        } else {
          alert('至少需要保留一个用户')
        }
      }
    },
    editUser(userId) {
      this.editingUserId = userId
      this.editingUserName = this.usersData.users[userId].name
      this.showEditUserModal = true
    },
    saveEditUser() {
      if (this.editingUserName.trim() && this.editingUserId) {
        this.usersData.users[this.editingUserId].name = this.editingUserName.trim()
        this.saveUsersData()
        this.showEditUserModal = false
        this.editingUserId = null
        this.editingUserName = ''
        console.log('用户编辑成功')
      } else {
        alert('请输入用户名')
      }
    },
    // 认证相关方法
    async handleLogin() {
      this.authLoading = true
      this.authError = ''
      try {
        const response = await apiLogin(this.authForm.email, this.authForm.password)
        login(response.user, response.token)
        this.showAuthModal = false
        this.authForm = { email: '', password: '', username: '' }
        // 同步数据
        this.syncData()
        console.log('登录成功')
      } catch (error) {
        this.authError = error
        console.error('登录失败:', error)
      } finally {
        this.authLoading = false
      }
    },
    async handleRegister() {
      this.authLoading = true
      this.authError = ''
      try {
        const response = await register(this.authForm.username, this.authForm.email, this.authForm.password)
        login(response.user, response.token)
        this.showRegisterModal = false
        this.authForm = { email: '', password: '', username: '' }
        // 同步数据
        this.syncData()
        console.log('注册成功')
      } catch (error) {
        this.authError = error
        console.error('注册失败:', error)
      } finally {
        this.authLoading = false
      }
    },
    async handleLogout() {
      try {
        await logout()
        console.log('登出成功')
      } catch (error) {
        console.error('登出失败:', error)
      }
    },
    // 同步相关方法
    async syncData() {
      try {
        const data = await manualSync()
        if (data && data.questions) {
          this.questions = data.questions
          this.saveData()
          console.log('同步成功')
        }
      } catch (error) {
        console.error('同步失败:', error)
        alert('同步失败，请检查网络连接')
      }
    }
    
  }
}
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 10px;
}

.header h1 {
  color: #333;
  font-size: 24px;
}

.user-section {
  flex: 1;
  min-width: 200px;
}

.current-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  min-width: 120px;
}

.user-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  min-width: 200px;
}

.user-modal {
  max-width: 500px;
}

.user-management {
  margin-bottom: 20px;
}

.add-user {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  font-weight: 500;
  color: #333;
}

.user-status {
  padding: 2px 8px;
  background-color: #4CAF50;
  color: white;
  border-radius: 10px;
  font-size: 12px;
}

.user-actions {
  display: flex;
  gap: 5px;
}

.edit-user-content {
  margin-bottom: 20px;
}

/* 认证相关样式 */
.auth-modal {
  max-width: 400px;
}

.auth-content {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.auth-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
}

.auth-switch {
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}

.link-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-left: 5px;
}

.link-btn:hover {
  text-decoration: underline;
}

.auth-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 同步状态样式 */
.sync-status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
}

.sync-label {
  font-size: 14px;
  color: #666;
}

.sync-indicator {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
}

.sync-indicator.syncing {
  background-color: #ffc107;
  color: #212529;
}

.sync-indicator.success {
  background-color: #28a745;
  color: white;
}

.sync-indicator.error {
  background-color: #dc3545;
  color: white;
}

.sync-indicator.idle {
  background-color: #6c757d;
  color: white;
}

.last-sync {
  font-size: 12px;
  color: #666;
  margin-left: 10px;
}

.sync-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sync-idle {
  color: #6c757d;
}

.sync-syncing {
  color: #ffc107;
  font-weight: bold;
}

.sync-success {
  color: #28a745;
  font-weight: bold;
}

.sync-error {
  color: #dc3545;
  font-weight: bold;
}

.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-danger {
  background-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-sm {
  padding: 5px 10px;
  font-size: 12px;
}

.analysis-section {
  margin-bottom: 30px;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.analysis-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.analysis-card h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.3s ease;
}

.status-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.stat-label {
  font-weight: 500;
  color: #555;
}

.stat-value {
  font-weight: bold;
  font-size: 14px;
}

.difficulty-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.difficulty-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.difficulty-label {
  width: 40px;
  font-weight: 500;
  color: #555;
}

.difficulty-bar {
  flex: 1;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.difficulty-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  transition: width 0.3s ease;
}

.difficulty-count {
  width: 50px;
  text-align: right;
  font-weight: bold;
  font-size: 14px;
  color: #555;
}

.photo-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.analysis-suggestions {
  grid-column: 1 / -1;
}

.suggestions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.suggestion-item {
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid;
  font-size: 14px;
  line-height: 1.5;
}

.suggestion-item.warning {
  background-color: #fff3e0;
  border-color: #FF9800;
  color: #e65100;
}

.suggestion-item.success {
  background-color: #e8f5e9;
  border-color: #4CAF50;
  color: #1b5e20;
}

.suggestion-item.info {
  background-color: #e3f2fd;
  border-color: #2196F3;
  color: #0d47a1;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.search-box {
  display: flex;
  gap: 10px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.filter-options {
  display: flex;
  gap: 10px;
}

.filter-select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.question-card {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.question-card.completed {
  border-left: 4px solid #4CAF50;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.question-number {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.question-actions {
  display: flex;
  gap: 5px;
}

.question-status {
  margin-bottom: 10px;
}

.status-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.question-difficulty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.question-note-preview {
  margin-top: 10px;
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #2196F3;
}

.note-preview-text {
  font-size: 12px;
  color: #555;
  line-height: 1.4;
  word-wrap: break-word;
}

.note-preview-text h1,
.note-preview-text h2,
.note-preview-text h3 {
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0 4px 0;
  color: #333;
}

.note-preview-text ul,
.note-preview-text ol {
  margin: 4px 0;
  padding-left: 16px;
}

.note-preview-text li {
  margin: 2px 0;
}

.note-preview-text strong {
  font-weight: bold;
  color: #333;
}

.note-preview-text em {
  font-style: italic;
  color: #666;
}

.note-preview-text code {
  background-color: #f5f5f5;
  padding: 1px 4px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
}

.note-preview-text pre {
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  margin: 4px 0;
}

.note-preview-text a {
  color: #2196F3;
  text-decoration: none;
}

.note-preview-text a:hover {
  text-decoration: underline;
}

.difficulty-stars {
  display: flex;
  gap: 2px;
}

.star-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #ddd;
  transition: color 0.2s;
}

.star-btn.active {
  color: #ffc107;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
}

.preview-modal {
  max-width: 800px;
}

.note-modal {
  max-width: 600px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h3 {
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.upload-area:hover {
  border-color: #4CAF50;
}

.image-preview {
  margin-top: 20px;
  text-align: center;
}

.image-preview img {
  max-width: 100%;
  max-height: 400px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.preview-area {
  text-align: center;
}

.preview-area img {
  max-width: 100%;
  max-height: 60vh;
  border-radius: 4px;
}

.note-editor {
  margin-bottom: 20px;
}

.note-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  min-height: 200px;
}

.note-textarea:focus {
  outline: none;
  border-color: #2196F3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
}

.note-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.clear-data-content {
  margin-bottom: 20px;
}

.warning-text {
  color: #dc3545;
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .analysis-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-input {
    width: 100%;
  }
  
  .questions-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .question-card {
    padding: 10px;
  }
  
  .question-number {
    font-size: 16px;
  }
}
</style>