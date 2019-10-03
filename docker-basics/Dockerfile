FROM php:7.1.7-apache

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer && \
    apt-get update && apt-get install unzip git -y && \
    docker-php-ext-install pdo pdo_mysql && \
    sed -i 's/\/var\/www\/html/\/var\/www\/html\/public/g' /etc/apache2/sites-available/000-default.conf

USER www-data
WORKDIR /var/www/base

RUN composer create-project laravel/laravel . && \
    composer require predis/predis

USER root

CMD ["./entrypoint.sh"]
