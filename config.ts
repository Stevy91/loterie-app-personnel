// Adresse du backoffice auquel CE build de l'application se connecte.
//
// Version personnelle (mono-proprietaire) : chaque client a son propre serveur,
// il faut donc changer cette ligne AVANT de generer l'APK que tu lui remets.
//   - developpement local : http://192.168.1.107:8010/api (l'APP_URL du .env)
//   - chez un client      : https://son-domaine.com/api
//
// Le nom de la compagnie et le logo affiches dans l'app ne sont PAS ici : ils
// viennent de /api/configuration, donc du backoffice du client (ecran
// « Parametres » du proprietaire).
export const API_URL = 'http://192.168.1.107:8010/api';
