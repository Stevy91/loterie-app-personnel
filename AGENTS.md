# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# Quel backoffice ?

Cette app est le POS de la version **personnelle (mono-proprietaire)** du projet
loterie : backoffice `../loterie-personnel sans saas` (base MySQL
`loterie_personnel`), sans abonnement ni notion de client SaaS. L'app SaaS
multi-clients, elle, vit dans `../app` — ne pas melanger les deux.

L'adresse du serveur se change dans `config.ts` avant chaque build client
(voir README.md).
