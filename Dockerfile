# 使用 Node.js v22.20.0 LTS 官方镜像
FROM node:22.20.0

# 设置工作目录
WORKDIR /app

# 复制依赖清单
COPY package*.json ./

# 安装依赖（使用 npm）
RUN npm install --production

# 复制项目所有文件
COPY . .

# 暴露端口（Express 默认 3000）
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
