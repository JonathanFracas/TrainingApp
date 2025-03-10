# Dockerfile
FROM php:8.2-cli

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    && docker-php-ext-install pdo_mysql zip mbstring exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY composer.json composer.lock ./

# Installer les dépendances PHP (sans scripts pour éviter les erreurs)
RUN composer install --optimize-autoloader --no-dev --no-scripts --ignore-platform-reqs

# Copier le reste de l'application
COPY . .

# Corriger les permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Exposer le port 8000 (pour php artisan serve)
EXPOSE 8000

# Lancer le serveur Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0"]
