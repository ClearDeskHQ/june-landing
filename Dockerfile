FROM nginx:alpine

# the image fills these into the template at start; /signup is served by June's production web
ENV SIGNUP_UPSTREAM=https://app.junecare.ai SIGNUP_HOST=app.junecare.ai APP_URL=https://app.junecare.ai/
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY *.html favicon.svg /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

EXPOSE 8080
