# Vessara — site des testeurs

Site statique (hébergement prévu : GitHub Pages) qui présente Vessara et recrute des testeurs. Dépôt séparé du jeu Unity et du dépôt design. Ne jamais pousser sans demande explicite de Seb. Seb est développeur en formation : expliquer le pourquoi des choix, en français.

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil |
| `jeu.html` | Comment jouer : règles écrites à la main d'après le jeu Unity (qui fait référence) ; à relire quand une règle change |
| `devlog.html` | Journal de dev : coquille vide remplie par `devlog.js` |
| `devlog-data.js` | **Les entrées du journal**, une par build, la plus récente en premier : c'est le seul fichier à éditer à chaque build |
| `devlog.js` | Affiche `devlog-data.js` (texte brut via `textContent`, pas de HTML injecté) |
| `test.html`, `form.js` | Formulaire de demande d'accès ; `form.js` envoie en JSON à l'API Web3Forms, qui transfère par mail |
| `mentions-legales.html`, `confidentialite.html` | Pages légales (éditeur à titre non professionnel, hébergeur GitHub, RGPD du formulaire). Contiennent `A_REMPLACER_PRENOM_NOM` et `A_REMPLACER_MAIL` à remplir **avant toute publication** ; à reprendre quand une structure (société, association) existera ou si une boutique ouvre |
| `style.css` | Style commun, aligné sur la DA du jeu « Obsidienne & braise » : mêmes jetons que `Assets/_Vessara/UI/Match.uss` (`--ui-*`), titres en Cinzel. Si le jeu change de couleur, reporter ici |
| `assets/embleme.png` | **Copie** de `Assets/_Vessara/Resources/Menu/embleme.png` (emblème du jeu, aussi favicon) ; à recopier s'il change |
| `assets/fonts/` | `Cinzel-Bold.ttf`, `Cinzel-Black.ttf` (copiées du jeu) et leur licence `OFL-Cinzel.txt`, à garder avec elles |
| `README.md` | Alimenter le journal, voir le site en local, mise en service du formulaire |

Règles : jamais de build dans ce dépôt (public) ; la clé Web3Forms de `test.html` est publique par conception ; textes de joueur sans jargon technique, qui parlent des cartes, créatures et légendes, jamais d'un peuple, d'une nationalité ou d'une religion. Chaque page recopie la même barre de navigation : en ajouter une page demande de la mettre à jour dans toutes.

**Consigne :** à chaque modification dans ce dossier (fichier ajouté, retiré, renommé ou changé de rôle), mettre à jour ce `CLAUDE.md` dans le même geste. Dernière mise à jour : 20/11/2026.
