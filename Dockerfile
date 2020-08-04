#node镜像版本
FROM node:14-alpine

#在image中创建文件夹
RUN mkdir -p /home/app

#将该文件夹作为工作目录
WORKDIR /home/app

# 将node工程下所有文件拷贝到Image下的文件夹中
COPY . /home/app

ENV NODE_ENV=production

#使用RUN命令执行npm install安装工程依赖库
RUN npm install

# 前端打包并把build后的目录移动到后端public目录下面
RUN cd web && npm install && npm run build

RUN cp -r web/build app/public

#执行npm start命令，启动Node工程
CMD npm start