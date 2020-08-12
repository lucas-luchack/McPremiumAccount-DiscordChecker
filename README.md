[![License](https://flat.badgen.net/github/license/lucas-luchack/McPremiumAccout-DiscordChecker)](LICENSE) [![Release](https://flat.badgen.net/github/release/lucas-luchack/McPremiumAccout-DiscordChecker)](https://github.com/lucas-luchack/McPremiumAccout-DiscordChecker/releases) [![Last commit](https://flat.badgen.net/github/last-commit/lucas-luchack/McPremiumAccout-DiscordChecker)](https://github.com/lucas-luchack/McPremiumAccout-DiscordChecker/commits/master) [![Maintainability](https://api.codeclimate.com/v1/badges/904d55a1e7c4df5bbd31/maintainability)](https://codeclimate.com/github/lucas-luchack/McPremiumAccout-DiscordChecker/maintainability)
 
[![Discord](https://img.shields.io/discord/738842123905925193?color=%237289DA&label=Nous%20rejoindre&logo=Discord&logoColor=white&style=for-the-badge)](https://discord.gg/enQrW7T)
____
 
## I — Introduction
 
**Version NodeJS > 12**
 
> ⚠ Toutes les configurations sont spécialement pour le serveur où se trouve ce robot (vous pouvez le rejoindre avec le bouton ci-dessus). Si vous le testez, vous aurez sûrement des erreurs si vous n'avez pas modifié les ID des channels.
 
Ce bot sert à vérifier si un utilisateur peut posséder un rôle destiné uniquement au personne qui possède un compte Minecraft **Premium**. Il modifie aussi le pseudo en fontion de celui du compte Minecraft.
 
## II — Les intégrations
 
Pour utiliser correctement ce bot vous devez le paramétrer avec le fichier `config.exemple.json`.
```
{
    "token": "", // Le token de votre bot Discord
    "prefix": "", // Le prefix de la commande à effectuer (!, /, ?, etc...)
    "PrimaryColor": "#E74C3C", // La couleur primaire des messages [unused]
    "DangerColor": "#B20000", // La couleur pour les erreurs
    "InfoColor": "#6897BB", // La couleur pour les informations [unused]
    "SuccessColor": "#47b60f", // La couleur pour les succès
    "BlackColor": "#36393F", // La couleur noir [unused]
    "IDRoleCracked": "", // L'identifiant du rôle pour les gens qui n'ont pas vérifier leur compte
    "IDRolePremium": "", // L'identifiant du rôle pour les gens qui ont vérifier leur compte
    "IDBotChannel": "", // L'identifiant du channel où les gens enverront les messages
    "debug": false, // False = debug désactivé | True = debug activé [Ne pas utiliser sauf si vous savez quoi faire]
    "ErrorIcon": "https://freeiconshop.com/wp-content/uploads/edd/error-flat.png", // L'icone pour les erreurs
    "Webhook": { // Webhook pour les logs | Si vous ne voulez pas l'utiliser ne mettez rien dans les valeurs
      "id": "", // Identifiant du Webhook
      "token": "" // Token du Webhook
    }
}
```
> ⚠ Veillez à ce que le fichier JSON soit correctement formaté ! Vous pouvez copiez-coller le contenu du fichier JSON [ici](https://jsonlint.com/) pour voir si il est bien formaté.
 
> Vous ne savez pas comment obtenir les informations requise ? Alors suivez le tuto disponible [ici](https://luchack.valbion.com/tutoriel/discordbot)
 
Une fois correctement édité vous devrez changer le nom du fichier de `config.exemple.json` à `config.json`, vous pourrez ensuite lancer le bot.
 
## III — Contributions
 
Les contributions sont toujours les bienvenues ! Lisez les règles pour les contributions avant de pouvoir y participer.
 
Veuillez vous assurer que votre demande de pull request respecte les lignes directrices suivantes :
 
- Rechercher des suggestions précédentes avant d'en faire une nouvelle, afin d'éviter les doublons.
- Les fichiers README suggérés devraient être beau ou se démarquer d'une manière ou d'une autre.
- Faire une demande de pull request individuelle pour chaque suggestion.
- Gardez les descriptions courtes et simples, mais descriptives.
- Commencez la description avec une capitale et terminez par un arrêt/période complet.
- Vérifiez votre orthographe et votre grammaire.
- Assurez-vous que votre éditeur de texte est configuré pour supprimer les espaces de fin.
 
Merci pour vos suggestions !
 
## IV — Les codes couleurs
 
| **Principaux**  | PrimaryColor | DangerColor | InfoColor | SuccessColor |  BlackColor | 
|---------|------------|----------|----------|----------|----------|
| **Code Hexadécimal** | `#E74C3C`   | `#B20000`  | `#6897BB`  | `#47b60f` | `#36393F` |
 
Pour les utiliser : `bot.config.PrimaryColor`, récupère la couleur primaire.
