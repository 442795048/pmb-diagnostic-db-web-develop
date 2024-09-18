# https://gallery.ecr.aws/docker/?page=1
# 使用官方Nginx镜像作为基础镜像
FROM public.ecr.aws/nginx/nginx:1.26.2-alpine3.20

# 维护者信息
MAINTAINER accenture<quan.b.li@accenture.cn>

# 覆盖镜像的Nginx配置
COPY nginx.conf /etc/nginx/nginx.conf

# 覆盖镜像的SSL配置
RUN mkdir -p /etc/nginx/conf/certs
RUN chmod 777 /etc/nginx/conf/certs
COPY dev-pmbdatabase-astrazeneca-net.pem /etc/nginx/conf/certs/dev-pmbdatabase-astrazeneca-net.pem
COPY dev-pmbdatabase-astrazeneca-net.key /etc/nginx/conf/certs/dev-pmbdatabase-astrazeneca-net.key

# 将dist目录下的文件复制到容器中的/etc/nginx/html目录下
COPY dist/ /etc/nginx/html/

# 将healthcheck.html文件复制到容器中的/etc/nginx/html目录下
COPY healthcheck.html /etc/nginx/html/healthcheck.html

# 暴露443端口
EXPOSE 443

# 使用Nginx运行Vue应用
CMD ["nginx", "-g", "daemon off;"]