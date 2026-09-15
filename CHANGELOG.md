# Changelog

Résumé de tout ce qui a été ajouté depuis le dernier commit poussé (`b25fe19`).

## Cheveux

- Nouvelles coiffures : Épis, Chignon, Frange, Épis flamboyants (mèches en flamme asymétriques), Crinière (mèche unique balayée sur le côté), Toison sauvage (crinière hérissée tout autour de la tête).
- **Cheveux personnalisés** : éditeur à 10 points à glisser, sans limite de hauteur ni de largeur — contrairement aux autres coiffures, celle-ci est dessinée par-dessus le corps donc jamais coupée. Bibliothèque dédiée (enregistrer / renommer / supprimer une instance sans jamais modifier l'originale).
- Couleur des cheveux/oreilles (`headColor`) indépendante de la couleur du corps.
- Pastille de couleur rapide déplacée directement dans l'en-tête de la section « Cheveux » (elle était auparavant cachée dans une section à déplier séparément).

## Yeux — globe

- Nouveaux styles : Cils (3 cils dressés), Bulle (cercles qui se chevauchent), Envolé (cat-eye avec pointe relevée).

## Yeux — iris

- Le globe de l'œil et l'iris/pupille sont totalement dissociés (n'importe quel globe + n'importe quel iris).
- Nouveaux styles d'iris : Tourbillon, Anneaux, Vrille, Voile (motifs originaux, sans reprendre de design de personnage protégé).
- Éditeur de forme d'iris personnalisé (ratio de la taille du globe, ne peut donc jamais en dépasser) + bibliothèque.
- **Case à cocher rotation** juste à côté de la couleur et du dé dans l'en-tête « Iris » : active une rotation continue de l'iris, quel que soit le style.

## Nez

- Nouveaux styles : Bouton (avec narines), Crochet (nez en courbe fine), Narines (minimaliste), Pointu.

## Contours

- Couleur + épaisseur de contour ajoutables sur chaque élément : corps, yeux, nez, sourcils, bouche, tête, accessoires.

## Vue 3D

- Nouveau bouton (icône cube) dans l'aperçu principal : bascule vers une **mascotte extrudée en relief**, construite directement à partir du même SVG que la vue 2D (donc 100% fidèle en formes et en couleurs, y compris les contours comme les lunettes).
- Rotation à la souris + rotation automatique.
- Panneau « Relief » : un curseur de **volume global**, plus un curseur indépendant par partie (Corps, Yeux, Nez, Bouche, Sourcils, Cheveux, Accessoires) pour exagérer ou aplatir chaque élément séparément.
- Chargement à la demande (three.js n'est téléchargé que si on ouvre la vue 3D, pour ne pas alourdir l'application pour les autres utilisateurs).

## Corrections notables trouvées en cours de route

- La couleur des cheveux semblait ne pas fonctionner : en réalité la section pour la changer était cachée derrière une disclosure supplémentaire — corrigé en remontant l'accès rapide dans l'en-tête.
- La « Crinière » ne se voyait presque pas (dessinée en grande partie sous le corps) — reconstruite en une mèche qui reste au-dessus du corps.
- En vue 3D : mauvais centrage de la caméra (écran vide), scintillement (z-fighting) entre pupille et blanc de l'œil, lunettes/monocle invisibles (contours non gérés), et les yeux qui disparaissaient à fort volume (les détails du visage n'étaient pas assez décalés devant la surface du corps) — tous corrigés et vérifiés par capture d'écran réelle.
- En vue 3D toujours : les petits détails ronds (yeux, narines…) avaient la même profondeur que le corps et ressortaient comme des cylindres plats (des "boutons") au lieu de globes arrondis — corrigé en limitant leur profondeur à leur propre taille et en les arrondissant en dôme. Les coiffures dessinées pour être en partie cachées par le corps en 2D (Épis, Toison sauvage, etc.) flottaient devant la tête en 3D — corrigé pour qu'elles restent à moitié "ancrées" dans la tête, contrairement aux cheveux personnalisés qui, eux, sont bien conçus pour ressortir entièrement devant.

## État du dépôt

Branche `main`, remote = `https://github.com/luvumbu/wobbi`. Rien de ce qui précède n'est encore commité ni poussé sur GitHub.
