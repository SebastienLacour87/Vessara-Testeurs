# Vessara — site des testeurs

Petit site statique, sans outil de build ni dépendance, pour présenter Vessara et recruter des testeurs. Hébergement prévu : GitHub Pages.

| Page | Rôle |
|---|---|
| `index.html` | Accueil : présentation du jeu |
| `jeu.html` | Comment jouer : les règles expliquées |
| `devlog.html` | Journal de développement, alimenté par `devlog-data.js` |
| `test.html` | Formulaire de demande d'accès (mail via Web3Forms) |

## Identité visuelle

Le site reprend la direction artistique du jeu (« Obsidienne & braise ») : couleurs de `Assets/_Vessara/UI/Match.uss`, polices Cinzel, emblème. `assets/embleme.png` et `assets/fonts/` sont des copies du dossier du jeu (les polices sont sous licence OFL, `OFL-Cinzel.txt` reste à côté). `assets/og-image.png` (1200×630) est le visuel affiché quand on partage un lien (balises `og:*` et `twitter:*` des pages publiques). Si la DA du jeu évolue, recopier ces fichiers et reporter les couleurs en haut de `style.css`.

## Alimenter le journal de dev (à chaque build)

Ouvrir `devlog-data.js`, copier le premier bloc `{ version, date, titre, points }` au **début** de la liste, le remplir (version du build, date `AAAA-MM-JJ`, un titre, 2 à 4 phrases courtes pour des joueurs, pas du jargon). Texte brut seulement. Commit, push : le site se met à jour tout seul.

## Voir le site en local

```powershell
python -m http.server 8130
```

puis ouvrir <http://localhost:8130> (à lancer dans ce dossier).

## Mise en service du formulaire (une fois)

1. Aller sur <https://web3forms.com>, saisir l'adresse mail qui doit **recevoir** les demandes, puis récupérer la clé d'accès envoyée par mail.
2. Dans `test.html`, remplacer `REMPLACER_PAR_LA_CLE_WEB3FORMS` par cette clé. Elle est publique par conception (elle ne permet que d'envoyer vers ta boîte) ; la restreindre au domaine du site dans le tableau de bord Web3Forms.
3. Créer un dépôt GitHub (public, requis pour Pages en gratuit), pousser ce dossier, puis *Settings → Pages → Deploy from branch → main / root*.
4. Envoyer une demande de test avec ta propre adresse pour vérifier que le mail arrive.

## Avant de publier : les trous à remplir

Chercher dans tout le dossier le texte `A_REMPLACER` :

```powershell
Select-String -Path *.html,*.js -Pattern "A_REMPLACER|REMPLACER_PAR"
```

Il doit rester **zéro** résultat : prénom et nom de l'éditeur et adresse mail de contact (`mentions-legales.html`, `confidentialite.html`), et la clé Web3Forms (`test.html`). La durée de conservation (3 mois après la fin du test) est un choix à confirmer dans `confidentialite.html`.

## Règles à garder en tête

- **Ne jamais mettre le build dans ce dépôt** : le site et le dépôt sont publics. Le lien du build s'envoie à la main, après chaque demande (Drive en accès restreint, ou page itch.io protégée).
- Les textes parlent des cartes, créatures et légendes, jamais d'un peuple, d'une nationalité ou d'une religion.
- Anti-spam : deux champs pièges cachés (`botcheck`, `website`). Si trop de spam, ajouter Cloudflare Turnstile.
- Données : seule l'adresse mail et le pseudo sont collectés, avec une case de consentement. Supprimer les mails des demandeurs qui le demandent.
- La page `jeu.html` est écrite à la main : la relire quand une règle change dans le jeu (le jeu Unity fait référence).
