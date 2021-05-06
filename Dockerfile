FROM nginx
EXPOSE 3000
COPY dist /usr/share/nginx/html
