FROM nginx:alpine

COPY dist/crackIt/browser/ /usr/share/nginx/html/

EXPOSE 80