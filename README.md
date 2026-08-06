# Loterie POS — application vendeur (version personnelle)

Application Expo/React Native des points de vente, pour la version
**mono-proprietaire** du projet loterie.

- Backoffice associe : `../loterie-personnel sans saas` (Laravel, MySQL `loterie_personnel`)
- Version SaaS multi-clients (a ne pas confondre) : `../app`

Se connectent ici uniquement les comptes **sous-agent** (points de vente) ; le
proprietaire et ses agents passent par le backoffice web.

## Mise en service chez un client

1. Renseigner l'adresse de SON serveur dans `config.ts` :

   ```ts
   export const API_URL = 'https://son-domaine.com/api';
   ```

2. Choisir le nom affiche sur le telephone et l'identifiant Android dans
   `app.json` (`expo.name` et `expo.android.package`). Un package different par
   client permet a plusieurs installations de coexister.

3. Generer l'APK :

   ```bash
   eas build -p android --profile preview
   ```

4. Deposer l'APK dans le backoffice du client (menu « Application mobile ») :
   ses agents pourront le telecharger eux-memes.

Le nom de la compagnie, le logo, le texte imprime en bas des fiches et les
regles de jeu ne se touchent PAS ici : ils viennent de `/api/configuration`,
c'est-a-dire de l'ecran « Parametres » du proprietaire dans son backoffice.

## Developpement

```bash
npm install
npx expo start
```

Pour tester contre le backoffice local, mettre dans `config.ts` l'adresse
`APP_URL` du `.env` du backoffice suivie de `/api` (ex.
`http://192.168.1.107:8010/api`) — une IP du reseau local, pas `localhost`,
sinon le telephone ne joint pas le PC.
