#node镜像版本
FROM node:13-alpine
#声明作者
MAINTAINER xiadd
#在image中创建文件夹
RUN mkdir -p /home/Service
#将该文件夹作为工作目录
WORKDIR /home/Service

# 将node工程下所有文件拷贝到Image下的文件夹中
COPY . /home/Service

#使用RUN命令执行npm install安装工程依赖库
RUN npm install

RUN npm run build

#暴露给主机的端口号
EXPOSE 8080
#执行npm start命令，启动Node工程
CMD [ "npm", "start" ]
