# 📂 FNN Ego Platform - Project Structure
# 项目结构说明文档

This document explains the main structure and responsibilities of each directory in the FNN Ego Platform codebase.

本文档说明了 FNN Ego 平台代码的主要结构和各目录职责，便于理解和参与开发。

---

## Root Directory (根目录)

```
fnn_ego_platform/
├── public/              # Static files (images, manifest, favicon)
├── src/                 # Main application source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-based page views (if Next.js)
│   ├── modules/         # Business logic modules (stream, user, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions and helpers
│   ├── config/          # Configuration files (env, constants)
│   └── styles/          # Global and scoped CSS or Tailwind files
├── .env.example         # Example environment configuration
├── Dockerfile           # Docker container definition
├── docker-compose.yml   # Multi-service container config
├── package.json         # Dependency and script definitions
├── README.md            # Project introduction
└── CONTRIBUTING.md      # Contribution guidelines
```

---

## Module Responsibilities (模块说明)

### `components/`
Reusable building blocks: buttons, modals, video overlays, etc.  
**可复用组件**：如按钮、弹窗、视频叠加层。

### `pages/`
Page-level components for each route (if using Next.js).  
每个页面的路由和入口，包含 UI 逻辑。

### `modules/`
**核心业务逻辑层**，建议分成以下子模块：

- `stream/`: WebRTC stream initialization and control  
- `user/`: Authentication, user state, roles
- `ai/`: Placeholder for future AI-based analysis
- `glasses/`: Integration with smart glasses (AR SDKs, eye tracking)

### `hooks/`
Custom reusable logic like `useStream`, `useMedia`, etc.  
封装自定义 Hook，保持代码简洁。

### `utils/`
Common utilities, validators, formatters.  
工具函数，如网络诊断、UUID 生成、格式转换等。

### `config/`
App-wide constants, ENV keys, third-party keys.  
统一配置管理，包括密钥和常量。

---

## Environment Variables (.env)

```
PORT=3000
NODE_ENV=development
STREAM_API_KEY=your-key-here
ENABLE_AI_MODULE=false
```

---

## Planned Future Directories (未来规划模块)

- `docs/`: 项目文档与指南
- `tests/`: 自动化测试脚本
- `mobile/`: 移动端版本（React Native / Flutter）
- `api/`: 后端服务接口（REST / GraphQL）
- `plugins/`: 第三方扩展模块（例如 ChatGPT 接入）

---

This modular design ensures the platform is extensible and scalable.  
该模块化设计确保平台具备良好的可扩展性与维护性。
