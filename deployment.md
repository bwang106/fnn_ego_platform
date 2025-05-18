# 🚀 CI/CD and Docker Deployment Guide
# 持续集成与 Docker 自动部署指南

This guide describes how to set up CI/CD pipelines and Docker for deploying the FNN Ego Platform.  
本文介绍如何为 FNN Ego 平台配置 CI/CD 流水线及使用 Docker 进行自动部署。

---

## 🐳 Docker Setup
## Docker 环境配置

### 1. `Dockerfile`

```Dockerfile
# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "run", "dev"]
```

### 2. `docker-compose.yml`

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
    volumes:
      - .:/app
    restart: unless-stopped
```

### 3. Build and Run

```bash
docker-compose up --build -d
```

---

## 🔁 CI/CD via GitHub Actions
## GitHub Actions 持续集成配置

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Deploy with SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd ~/fnn_ego_platform
            git pull origin main
            docker-compose down
            docker-compose up --build -d
```

---

## 🔐 Required Secrets (GitHub Secrets 配置)

Add the following secrets to your GitHub repo:

| Secret Name         | Description                        |
|---------------------|------------------------------------|
| `SERVER_HOST`       | Your server IP/domain              |
| `SERVER_USER`       | SSH username                       |
| `SERVER_SSH_KEY`    | Private key for SSH login          |

---

## ✅ Deployment Verification
## 部署验证

After pushing to `main`, GitHub Actions will:

1. Pull the latest code from GitHub
2. Restart the Docker container
3. Serve your updated app on `http://your-domain.com:3000`

---

本指南支持快速部署与扩展，同时便于团队协作与自动测试。  
This setup allows quick iteration and robust team collaboration.

Enjoy hacking! 🎯
