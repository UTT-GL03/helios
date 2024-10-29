# HELIOS : Réduction de l'impact écologique du service numérique d'un établissement de météorologie et de climatologie

## Choix du sujet
Nous revenons tous deux d'un semestre à l'étranger dans deux pays avec une météo très distincte. En Norvège la météo était particulièrement changeante et extrême par moments. Consulter la météo chaque jour est devenu une habitude, de même que la programmation journalière d'une notification récapitulative.

Aussi, nous nous sommes rendus compte que les habitudes de consommation des services de météo sont très différentes selon les régions du monde et leur climat. Dans les pays aux climats extrêmes, les habitants consultent plus régulièrement ces services pour prévenir les averses ou évènements climatiques (orages, ouragans, canicules, etc). Avec le dérèglement climatique, le nombre de ces évènements ne va qu'augmenter, ce qui fait que le nombre de potentiels utilisateurs ne va cesser de croître ([source: Courrier International](https://www.courrierinternational.com/article/technologie-face-au-rechauffement-climatique-les-applications-de-meteo-ont-le-vent-en-poupe)).

Météo France est le principal service de météo en France avec plus de 11 millions utilisateurs mensuels. C'est une référence en la matière, mais en remarquant le poids et la complexité du site, nous nous sommes attachés à concevoir une alternative avec un plus faible impact environnemental.


## Utilité sociale

A une époque où la situation climatique est de plus en plus incertaine et changeante, se renseigner sur la météo est primordial. De plus, regarder la météo du jour est une action quotidienne pour des millions d'utilisateurs et touche un large public. 
En plus d'informer sur la météo nationale, un tel service se doit de sensibiliser sur le réchauffement climatique et les catastrophes météorologiques qu'il cause. 

Météo France est un établissement public à caractère administratif ([source : Météo France](https://meteofrance.fr/etablissement)) chargé de missions en matière de sécurité météorologique des personnes et des biens. C'est un établissement qui remplit une mission d'intérêt général sous contrôle de l'Etat. Son service numérique est donc reconnu pour son utilité sociale.

## Effets de la numérisation

L'histoire des prévisions météoroligiques est relativement jeune et connait son avènement avec l'informatique et les satellites. Avant le Web c'est via la presse écrite et la radio que les prévisions étaient communiquées.
Désormais c'est via des applications mobiles principalement qu'elle est diffusée. On en comptait plus de 10 000 en 2023 et ce nombre ne va cesser d'augmenter. Cependant l'énorme majorité des services se basent uniquement sur l'un des cinq modèles ouverts suivants :

- Modèle européen ECMWF,
- Modèle américain GFS,
- Modèle français Arome (Méteo France),
- Modèle français Arpège (Méteo France),
- Modèle allemand Icon.

([source : Libération](https://www.liberation.fr/environnement/climat/face-a-meteo-france-des-concurrents-comme-sil-en-pleuvait-20240318_NKJTT4HMXJFERBRJYU2YHJVY3E/))

En 2022 le marché mondial des services de prévisions météorologiques pesait 2,20 milliards d'euros, et c'est un chiffre qui est attendu à la hausse pour les années à suivre ([source : Statista](https://www.statista.com/outlook/dmo/app/weather/worldwide)).

L'impact écologique de cette substitution du papier et de la radio par les applications mobiles est compliqué à établir. Néanmoins étant donné le changement des habitudes de consommation des utilisateurs et la multiplication des plateformes météo, il paraît pertinent de proposer une alternative plus sobre. Avec l'essor de l'IA, les GAFAM s'intéressent également à la prévision météorologique pour tenter de produire des modèles toujours plus précis. Ces petites améliorations de performance ne sont pas forcément nécessaires et ont un fort impact environnemental car elles nécessitent de nombreux serveurs et équipements numériques.

## Axes de travail

Notre premier axe de travail sera dirigé autour des publicités du site de météo france. En effet, le site contient de nombreuses images et vidéos provenant de publicité ainsi que des "pop-ups". Pour réduire l'impact écologique de la page, mais aussi réduire le temps de chargement, il nous paraît pertinent de les supprimer pour obtenir une page plus épurée. 
Dans un second temps, nous souhaitons également enlever la grande majorité des articles en fin de page. Sur la page d'accueil du site, la seconde partie est uniquement constituée d'articles avec une image ou vidéo pour le présenter. Toujours dans la même optique, nous souhaitons rendre la page plus pertinente et moins énergivore en ne laissant qu'un article. De ce fait, l'utilisateur aura plus de chances également de s'intéresser s'il n'est pas submergé par la quantité. 
Toujours pour les mêmes raisons, nous allons remplacer la carte de france qui est l'élément central de la page. Il sera possible par exemple de la remplacer par un tableau des températures et conditions météorologiques tout au long de la journée.
Enfin, l'application se doit également d'être accessible et pertinente pour le plus grand nombre. Ainsi, nous ajouterons une partie professionnelle, notamment avec la météo agricole pour les utilisateurs qui auront besoin d'informations complémentaires et plus précises pour centraliser les informations dans un même endroit.


## Scénario 1 : Consulter la météo
1. L'utilisateur de météo en ligne se rend sur la page d'accueil grâce à un favori (donc sans passer par un moteur de recherche). Il cherche l'onglet météo de sa région.
2. Il choisit de voir la météo de sa région.
3. Il consulte la météo du lendemain et des jours prochains.

Les résultats de performance sont assez différents entre Météo France, Yr et la Météo Agricole. Météo France et la Météo Agricole ont beaucoup de pubs et de cookies qui alourdissent la page et augmente le réseau nécessaire.

## Scénario 2 : Consulter des articles
1. L'utilisateur de météo en ligne se rend sur la page d'accueil grâce à un favori (donc sans passer par un moteur de recherche). Il consulte les titres.
2. Il choisit un des articles et le lit en entier.
3. Il choisit un autre article à consulter parmi ceux présents en bas.
4. Il le lit jusqu'au bout


## Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de quotidiens nationaux de diverses sensibilités politiques, économiques et environementales :

- Météo France,
- Yr,
- Météo Agricole.

Les résultats sont les suivants (attention, d'une journée à l'autre, on peut observer une certaine variabilité) :

- Scénario "[Consulter la météo de ma région](https://htmlpreview.github.io/?https://raw.githubusercontent.com/UTT-GL03/helios/main/benchmark/consulterMeteo/results.html)",
- Scénario "[Lire des articles parmi les articles de la page d'accueil](https://htmlpreview.github.io/?https://raw.githubusercontent.com/UTT-GL03/helios/main/benchmark/scenarioArticle/benchmark_.html)".

## Maquette de l'interface et échantillon de données

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

L'interface retenue est composée de deux types de "pages Web" :

- celle d'accueil, contenant la météo du jour des principales villes françaises,
- celle qui donne plus d'informations sur la météo d'une zone donnée ("interface pro").

![Maquette de la page d'accueil](./wireframe/FirstWireFrame.png)
__Fig.1__: Maquette de l'interface d'accueil du prototype

![Maquette de la page pro](./wireframe/ProPageWireFrame.png)
__Fig.2__: Maquette de l'interface pro du prototype


Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec [`dummy-json`](https://dummyjson.com)).
Bien que fictives, ces données correspondent à la structure des services concurrents : 3 villes comportant la météo pourchacun (température, vent, météo) sur 7 jours (voir [modèle de données](./frontend/sample_data.hbs)). 
Dans un objectif de sobriété environnementale, les articles sont limités à ceux du jour et de la veille.


## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour cette première version du prototype :

- l'échantillon de données est encore chargé dans le code de manière statique,
- les fonctionnalités implémentées ne sont que celles nécessaires pour suivre le scénario prioritaire ("Consulter la météo").

Ce scénario nécessite de pouvoir naviguer sur la page principale qui contient la météo du jour.

### Page principale
