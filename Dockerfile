FROM httpd:2.4-alpine

COPY ./*.js /usr/local/apache2/htdocs/
COPY ./*.html /usr/local/apache2/htdocs/
COPY ./*.css /usr/local/apache2/htdocs/

