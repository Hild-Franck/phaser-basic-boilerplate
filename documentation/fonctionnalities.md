# Phaser Basic Boilerplate - Fonctionnalités
🇨🇵  Version Française

*Ici sont présentés les fonctionnalités de base du boilerplate. Mais il est possible (et conseillé) de les modifier ou d'en rajouter.*

## Entités
La génération d'entités devrait être simplifiée, en proposant un modèle "global" puis des entités plus ou moins prédéfinies.
On pourra donc retrouver les entités suivantes:
- Ennemis
- Objet avec physique
- Mur / Obstacle

> **Note:** Le joueur sera techniquement une entité, mais un peu spéciale

### Fonctions
Les entités ayant un but et un rôle précis, elles seront munis d'un certain nombre de fonction pour les manipuler:
- `create()` : pour créer l'entité
- `destroy()` : pour détruire l'entité
- `moveTo()` : pour déplacer l'entité à un point précis
- `toggleCollision()` : permet d'activer ou désativer les collisions
- `addTriggerOn()` : permet d'ajouter un trigger sur un évènement
- `removeTrigger()` : permet d'enlever un trigger
- `addTimer()` : permet d'ajouter une fonction qui se déclenchera après un certain temps
- `removeTimer()` : permet d'enlever un timer préalablement créé
Les entités prédéfinies auront quant à elles des fonctions plus particulières, **en plus** de celles ci. On trouvera donc :

**Ennemis:**
- `addBehaviourOn()` : assez proche de `addTriggerOn`, permet de rajouter un comportement à effectuer lors d'un certain "stimulis"
- `addIdleBehaviour()` : permet de rajouter un comportement lorsque l'entité n'est pas/plus soumis à un stimulis
- `removeBehaviour()` : enlève un comportement
- `kill()` : réduit les points de vie de l'ennemi à 0
- `restore()` : rend à l'entité sa configuration d'origine


# Phaser Basic Boilerplate - Fonctionnalities
🇬🇧  English Version (maybe)