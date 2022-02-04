FROM nginx:stable-perl
MAINTAINER Frank Mukete (muketefrank@gmail.com)

COPY /cloud-farm-application/dist/cloud-farm-application /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

