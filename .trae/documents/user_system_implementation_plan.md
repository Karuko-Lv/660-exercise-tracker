# 用户系统实现计划

## 项目分析

当前项目是一个基于Vue 3 + Vite的660习题集记录应用，包含以下核心功能：
- 660道题目的状态管理
- 难度评级系统
- 照片上传和预览
- 笔记功能（支持Markdown）
- 数据分析和统计
- 本地存储持久化
- 数据导出功能

**当前存储实现**：
- 使用localStorage存储数据
- 所有用户共享同一存储键（660Questions）
- 没有用户隔离机制

## 需求分析

需要实现用户功能，使不同用户之间可以存储不同数据，具体要求：
1. **用户管理**：创建、切换、删除用户
2. **数据隔离**：不同用户的数据完全隔离
3. **数据迁移**：兼容现有数据
4. **用户体验**：直观的用户切换界面
5. **数据安全**：确保用户数据不被其他用户访问

## 技术方案

### 1. 存储结构设计

**修改存储结构**：
```javascript
// 主用户数据结构
const usersData = {
  currentUser: 'user1', // 当前活跃用户
  users: {
    'user1': {
      name: '用户1',
      createdAt: Date.now(),
      data: {
        version: '1.2',
        timestamp: Date.now(),
        questions: [...] // 题目数据
      }
    },
    'user2': {
      name: '用户2',
      createdAt: Date.now(),
      data: {
        version: '1.2',
        timestamp: Date.now(),
        questions: [...] // 题目数据
      }
    }
  }
}
```

**存储键**：
- 主存储：`660QuestionsUsers`
- 备份存储：`660QuestionsUsersBackup`

### 2. 用户系统功能

#### 2.1 用户管理
- **创建用户**：输入用户名，生成唯一用户ID
- **切换用户**：从用户列表中选择
- **删除用户**：删除指定用户数据
- **重命名用户**：修改用户名

#### 2.2 数据管理
- **数据隔离**：每个用户有独立的题目数据
- **数据迁移**：将现有数据迁移到默认用户
- **数据导出**：按用户导出数据
- **数据清除**：按用户清除数据

### 3. 界面设计

#### 3.1 用户切换界面
- 顶部用户选择下拉菜单
- 用户管理按钮
- 当前用户显示

#### 3.2 用户管理模态框
- 用户列表展示
- 添加用户表单
- 用户操作按钮（编辑、删除）

### 4. 数据迁移策略

1. **首次加载**：
   - 检查是否存在旧数据（`660Questions`）
   - 如果存在，创建默认用户并迁移数据
   - 删除旧存储键

2. **向后兼容**：
   - 保留对旧数据结构的支持
   - 自动迁移到新用户系统

## 实现步骤

### 1. 数据结构修改

1. **修改存储键和数据结构**：
   - 更新存储键为`660QuestionsUsers`
   - 实现用户数据结构
   - 添加用户管理相关方法

2. **数据迁移实现**：
   - 检测旧数据并迁移
   - 确保平滑过渡

### 2. 界面实现

1. **用户切换组件**：
   - 顶部用户选择器
   - 用户管理入口

2. **用户管理模态框**：
   - 用户列表
   - 添加/编辑/删除用户功能

### 3. 功能实现

1. **用户管理方法**：
   - createUser()：创建新用户
   - switchUser()：切换用户
   - deleteUser()：删除用户
   - renameUser()：重命名用户

2. **数据管理方法**：
   - loadUserData()：加载用户数据
   - saveUserData()：保存用户数据
   - exportUserData()：导出用户数据
   - clearUserData()：清除用户数据

### 4. 错误处理

1. **存储错误处理**：
   - 处理localStorage容量限制
   - 提供备选存储方案

2. **用户操作错误**：
   - 防止删除最后一个用户
   - 处理用户名重复
   - 提供用户友好的错误提示

## 技术实现细节

### 1. 核心方法

```javascript
// 用户数据结构管理
const usersData = {
  currentUser: null,
  users: {}
};

// 创建用户
function createUser(userName) {
  const userId = 'user_' + Date.now();
  usersData.users[userId] = {
    name: userName,
    createdAt: Date.now(),
    data: {
      version: '1.2',
      timestamp: Date.now(),
      questions: initializeDefaultQuestions()
    }
  };
  usersData.currentUser = userId;
  saveUsersData();
  return userId;
}

// 切换用户
function switchUser(userId) {
  if (usersData.users[userId]) {
    usersData.currentUser = userId;
    loadUserData();
    saveUsersData();
  }
}

// 加载用户数据
function loadUserData() {
  if (usersData.currentUser) {
    const userData = usersData.users[usersData.currentUser];
    if (userData) {
      this.questions = userData.data.questions;
    }
  }
}

// 保存用户数据
function saveUserData() {
  if (usersData.currentUser) {
    const userData = usersData.users[usersData.currentUser];
    if (userData) {
      userData.data.questions = this.questions;
      userData.data.timestamp = Date.now();
      saveUsersData();
    }
  }
}

// 保存所有用户数据
function saveUsersData() {
  try {
    const data = {
      version: '1.2',
      timestamp: Date.now(),
      currentUser: usersData.currentUser,
      users: usersData.users
    };
    localStorage.setItem('660QuestionsUsers', JSON.stringify(data));
  } catch (error) {
    console.error('保存用户数据失败:', error);
  }
}
```

### 2. 数据迁移

```javascript
// 数据迁移
function migrateOldData() {
  const oldData = localStorage.getItem('660Questions');
  if (oldData) {
    try {
      const parsedData = JSON.parse(oldData);
      // 创建默认用户并迁移数据
      const defaultUserId = createUser('默认用户');
      const userData = usersData.users[defaultUserId];
      if (userData) {
        userData.data.questions = parsedData.questions || initializeDefaultQuestions();
        saveUsersData();
      }
      // 删除旧数据
      localStorage.removeItem('660Questions');
      localStorage.removeItem('660QuestionsBackup');
      console.log('数据迁移成功');
    } catch (error) {
      console.error('数据迁移失败:', error);
    }
  }
}
```

## 潜在问题及解决方案

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| **存储容量限制** | localStorage容量有限 | 1. 压缩用户数据<br>2. 限制单个用户数据大小<br>3. 提供数据清理建议 |
| **用户数据丢失** | 浏览器清除缓存 | 1. 定期备份用户数据<br>2. 提供数据导出功能<br>3. 实现自动数据恢复 |
| **用户切换错误** | 用户操作失误 | 1. 确认机制<br>2. 操作日志<br>3. 撤销功能 |
| **数据迁移失败** | 旧数据格式错误 | 1. 错误处理<br>2. 部分迁移<br>3. 手动修复选项 |

## 界面设计

### 1. 顶部用户栏

```html
<header class="header">
  <div class="user-section">
    <div class="current-user">
      <span>当前用户: {{ currentUserName }}</span>
      <select v-model="selectedUser" @change="switchUser">
        <option v-for="(user, id) in users" :key="id" :value="id">
          {{ user.name }}
        </option>
      </select>
    </div>
    <button @click="showUserModal = true" class="btn">管理用户</button>
  </div>
  <h1>26版660习题集记录</h1>
  <div class="header-actions">
    <button @click="exportData('csv')" class="btn">导出CSV</button>
    <button @click="exportData('json')" class="btn">导出JSON</button>
    <button @click="showClearDataModal = true" class="btn btn-danger">清除数据</button>
  </div>
</header>
```

### 2. 用户管理模态框

```html
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
```

## 预期效果

1. **用户隔离**：不同用户之间的数据完全隔离，互不影响
2. **数据安全**：用户只能访问自己的数据
3. **用户体验**：直观的用户切换和管理界面
4. **向后兼容**：平滑迁移现有数据到新用户系统
5. **功能完整**：支持用户的创建、切换、编辑和删除

## 技术栈

- **前端框架**：Vue 3
- **构建工具**：Vite
- **存储方案**：localStorage
- **数据格式**：JSON
- **界面设计**：响应式CSS

---

**实现后，用户将能够：**
- 创建多个用户账户
- 在不同用户之间切换
- 每个用户拥有独立的做题记录
- 安全管理个人数据
- 导出和备份个人数据