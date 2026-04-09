<template>
  <div class="app">
    <header class="header">
      <h1>26版660习题集记录</h1>
      <div class="header-actions">
        <button @click="exportData('csv')" class="btn">导出CSV</button>
        <button @click="exportData('json')" class="btn">导出JSON</button>
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
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

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
      currentQuestionNumber: null,
      previewImageData: null,
      currentNote: ''
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
    }
  },
  mounted() {
    this.initializeData()
  },
  methods: {
    initializeData() {
      // 从本地存储加载数据
      const savedData = localStorage.getItem('660Questions')
      if (savedData) {
        this.questions = JSON.parse(savedData)
        // 确保所有题目都有note字段
        this.questions.forEach(q => {
          if (q.note === undefined) {
            q.note = ''
          }
        })
      } else {
        // 初始化660道题目
        this.questions = Array.from({ length: 660 }, (_, index) => ({
          number: index + 1,
          status: '',
          difficulty: 0,
          image: null,
          note: ''
        }))
        this.saveData()
      }
    },
    saveData() {
      localStorage.setItem('660Questions', JSON.stringify(this.questions))
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
}

.header h1 {
  color: #333;
  font-size: 24px;
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