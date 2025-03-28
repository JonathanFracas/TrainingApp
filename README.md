cd# TrainingProject

# Installation

## PHP

Installer : https://windows.php.net/download/
Ajouter le dossier PHP au PATH

## Laragon

Installer : https://laragon.org/download/

C:\laragon\etc\apache2\sites-enabled\00-default

<VirtualHost *:80>
	DocumentRoot "PathToProject\public"
	ServerName training.local
	ServerAlias *.training.local
	<Directory "PathToProject\public">
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>

C:\Windows\System32\drivers\etc\hosts

127.0.0.1 training.local

## Composer

Installer composer : https://getcomposer.org/download/

## PhpMyAdmin

Installer PhpMyAdmin : https://www.phpmyadmin.net/downloads/
Copier le dossier phpMyAdmin vers laragon/etc/apps

## Mise en place du projet

- Une fois le dépôt cloné, executer les commandes suivantes :
- composer update --ignore-platform-reqs
- npm update --force

- Renommer le fichier .env.example -> .env

# Lancer le projet

Lancer Laragon

A la racine du projet executer les commandes suivantes :
- npm run dev



# Commandes

- Créer un model php : php artisan make:model ClassName -m
- Migrations (permet de créer/modifier les tables) : php artisan migrate
- Créer un controlleur : php artisan make:controller TableNameController
- ./vendor/bin/pint


# TODO

- Commentaires
- Statistiques
- Planning
- Gestion des erreurs


