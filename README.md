
# Application React/Redux
Premier jet pour la nouvelle application novotip.

## Mise en place de l'environement de développement

Premièrement vous devez disposer de `NodeJS` et `npm` d'installé sur votre ordinateur.
Avant de commencer il vous faut aussi lancer la commande `npm install`
( veuillez la lancer à nouveau lorque vous mettez à jours votre branche depuis *origin* )

Il suffit ensuite d'utiliser la commande `npm start` pour lancer le serveur de développement.
Vous devriez avoir : 

```
You can now view react-example in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://X.X.X.X:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Pour générer la documentation vous aurez besoin de jsDoc : `npm install -g jsdoc` puis `npm run doc` pour la générer dans le dossier docs.

Les technos utilisées sont:
- React / Redux : [Doc React](https://reactjs.org/docs/hello-world.html) / [Doc Redux](https://redux.js.org/docs/introduction/Motivation.html)
- GraphQL : [Doc GraphQL](http://graphql.org/learn/)
- NodeJS: [Doc NodeJS W3Schools](https://www.w3schools.com/nodejs/default.asp)

Le langage utilisé est le ES6: [Features](http://es6-features.org)

## Technos utilisées

Les technologies utilisées vont être:
- React/Redux
- GraphQL
- NodeJS

## Participation au code
Nous utilisons `eslint` pour linter le code. Nous vous invitons donc à installer les plugins pour vos éditeurs.
- Pour les utilisateurs d'Atom: [linter-eslint](https://github.com/AtomLinter/linter-eslint)
- Pour les utilisateur de SublimeText: [ESLint for SublimeText](https://packagecontrol.io/packages/ESLint)
- Pour les utilisateur de vim: [ale](https://github.com/w0rp/ale)

Nous vous demandons de respecter les coding standard fournis par les fichiers de configuration.
Sans quoi vos Pull Request ne pourrons pas être acceptées.

Pour utiliser `eslint` dans un terminal veuillez utiliser la commande `npm run lint`

## Prochaines étapes
Les prochaines étapes vont etre d'intégrer le backend. Soit l'interface avec une base de donnée.
Le backend sera constitué d'un serveur GraphQL.

Pour l'implémentation elle meme nous allons devoir intégrer un router a notre application courante.
Nous allons donc nous tourner vers react-router, et express.

