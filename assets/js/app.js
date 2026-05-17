const programs = [
  {
    id: 'eco-num',
    title: 'Économie numérique',
    short: 'Marchés, plateformes et données',
    color: '#2f6f68',
    lessons: [
      lesson('1.01', 'Économie numérique', 'Comprendre comment Internet, les données et les plateformes transforment la production, la vente et le travail.', ['Définir économie numérique, digitalisation et transformation numérique.', 'Identifier les acteurs : plateformes, utilisateurs, annonceurs, entreprises.', 'Comprendre pourquoi la donnée devient une ressource économique.'], ['L’économie numérique désigne l’ensemble des activités économiques appuyées sur les technologies numériques : Internet, applications, cloud, données, plateformes, paiement mobile et intelligence logicielle.', 'La logique centrale est simple : une entreprise utilise le numérique pour réduire les coûts, toucher plus de clients, automatiser des tâches et analyser les comportements.', 'Exemple : une boutique classique vend dans une rue. Une boutique numérique vend 24h/24, mesure les clics, recommande des produits et accepte des paiements en ligne.'], ['Digitalisation : transformer une activité avec des outils numériques.', 'Donnée : matière première pour décider, personnaliser et prévoir.', 'Le numérique augmente la vitesse, la portée et l’automatisation.'], 'flow'),
      lesson('1.02', 'Plateformes numériques', 'Voir pourquoi les plateformes comme Uber, Amazon ou YouTube dominent certains marchés.', ['Définir une plateforme multiface.', 'Expliquer les effets de réseau.', 'Identifier le rôle des algorithmes.'], ['Une plateforme met en relation plusieurs groupes : vendeurs et acheteurs, chauffeurs et clients, créateurs et spectateurs.', 'Plus il y a d’utilisateurs d’un côté, plus le service devient intéressant pour l’autre côté. C’est l’effet de réseau.', 'La plateforme gagne souvent par commission, publicité, abonnement ou vente de données statistiques.'], ['Effet de réseau direct : plus mes amis utilisent l’application, plus elle est utile.', 'Effet de réseau indirect : plus il y a de vendeurs, plus les acheteurs viennent.', 'Risque : monopole, dépendance et pouvoir des algorithmes.'], 'network'),
      lesson('1.03', 'Modèles économiques', 'Retenir les modèles de revenus les plus fréquents du numérique.', ['Comparer freemium, abonnement, publicité et commission.', 'Relier chaque modèle à un exemple réel.', 'Comprendre la notion de coût marginal faible.'], ['Dans le numérique, copier un logiciel ou servir un utilisateur supplémentaire coûte souvent peu par rapport à l’industrie classique.', 'Les modèles fréquents sont : abonnement mensuel, publicité ciblée, commission sur transaction, freemium avec options payantes, vente de service cloud.', 'Le choix du modèle dépend de la valeur créée et de la capacité du client à payer.'], ['Freemium : gratuit pour attirer, payant pour fonctions avancées.', 'Publicité : l’attention de l’utilisateur finance le service.', 'Commission : la plateforme prend un pourcentage sur chaque transaction.'], 'layers'),
      lesson('1.04', 'Données et valeur', 'Comprendre comment une donnée devient utile économiquement.', ['Différencier donnée brute, information et connaissance.', 'Décrire le cycle de valeur des données.', 'Citer les risques liés aux données personnelles.'], ['Une donnée brute seule vaut peu. Elle devient utile quand elle est collectée proprement, nettoyée, analysée puis utilisée pour décider.', 'Exemple : “clic sur produit A” devient une recommandation, une prévision de vente ou une campagne marketing.', 'Mais les données personnelles exigent consentement, sécurité, minimisation et respect de la vie privée.'], ['Donnée brute : fait isolé.', 'Information : donnée interprétée.', 'Connaissance : information utile pour agir.'], 'pipeline'),
      lesson('1.05', 'Cybersécurité et confiance', 'Comprendre pourquoi la confiance est une condition de l’économie numérique.', ['Expliquer le rôle de la sécurité dans les services numériques.', 'Identifier les menaces courantes.', 'Relier sécurité, réputation et adoption.'], ['Un service numérique sans confiance perd ses utilisateurs. La sécurité protège les comptes, les paiements, les données et la continuité du service.', 'Les menaces courantes sont le phishing, le vol de mot de passe, les malwares, les fuites de données et les attaques DDoS.', 'La confiance repose sur la confidentialité, l’intégrité, la disponibilité et la transparence.'], ['CIA : Confidentialité, Intégrité, Disponibilité.', 'Authentification forte : réduire l’usurpation.', 'Sauvegardes et continuité : réduire l’impact des incidents.'], 'shield'),
      lesson('1.06', 'Innovation et transformation', 'Savoir expliquer la transformation numérique d’une organisation.', ['Distinguer outil numérique et transformation réelle.', 'Citer les étapes d’un projet de transformation.', 'Identifier les freins humains et techniques.'], ['Installer un logiciel ne suffit pas. La transformation numérique modifie les processus, les compétences, les décisions et parfois le modèle économique.', 'Une démarche simple : diagnostiquer, prioriser, former, automatiser, mesurer, améliorer.', 'Les freins fréquents sont la résistance au changement, le manque de compétences, les coûts, la mauvaise qualité des données et les risques sécurité.'], ['Transformation = technologie + organisation + compétences.', 'Mesurer avec des indicateurs simples : délai, coût, qualité, satisfaction.', 'Former les utilisateurs est aussi important que l’outil.'], 'loop'),
    ],
    exercises: [
      qa('Définir l’économie numérique avec un exemple.', 'L’économie numérique regroupe les activités qui utilisent les technologies numériques pour produire, vendre, communiquer ou analyser. Exemple : une application de livraison met en relation clients, restaurants et livreurs, puis utilise les données pour optimiser les commandes.'),
      qa('Pourquoi les effets de réseau favorisent-ils les grandes plateformes ?', 'Parce que plus une plateforme a d’utilisateurs, plus elle devient utile et attire encore plus d’utilisateurs. Cela crée un cercle d’attraction difficile à concurrencer.'),
      qa('Comparer freemium et abonnement.', 'Freemium : une partie du service est gratuite, les options avancées sont payantes. Abonnement : l’utilisateur paie régulièrement pour accéder au service complet ou à une offre définie.'),
      qa('Citer deux risques liés à l’exploitation des données.', 'Fuite de données personnelles, surveillance excessive, mauvaise décision à cause de données fausses, discrimination algorithmique ou non-respect du consentement.'),
    ],
  },
  {
    id: 'bd',
    title: 'Bases de données',
    short: 'Modèle relationnel et SQL',
    color: '#e98645',
    lessons: [
      lesson('2.01', 'Rôle d’une base de données', 'Comprendre pourquoi on utilise un SGBD au lieu de simples fichiers.', ['Définir base de données et SGBD.', 'Comprendre l’intérêt de structurer les données.', 'Citer les propriétés attendues.'], ['Une base de données stocke des informations organisées et liées. Un SGBD comme MySQL, PostgreSQL ou Oracle permet de créer, rechercher, modifier et sécuriser ces données.', 'Contrairement à un fichier simple, le SGBD gère plusieurs utilisateurs, les droits, les transactions, les sauvegardes et l’intégrité.', 'Exemple : dans une université, étudiants, notes, matières et enseignants sont reliés.'], ['BD : ensemble organisé de données.', 'SGBD : logiciel qui gère la BD.', 'Objectif : fiabilité, partage, sécurité, rapidité.'], 'database'),
      lesson('2.02', 'Modèle relationnel', 'Maîtriser tables, colonnes, lignes, clés primaires et clés étrangères.', ['Identifier relation, attribut et tuple.', 'Définir clé primaire et clé étrangère.', 'Comprendre les relations 1-1, 1-N et N-N.'], ['Le modèle relationnel représente les données sous forme de tables. Une ligne est un enregistrement, une colonne est un attribut.', 'La clé primaire identifie une ligne de manière unique. La clé étrangère relie une table à une autre.', 'Une relation N-N se transforme souvent en table d’association. Exemple : Étudiant, Matière, Inscription.'], ['Clé primaire : unique et non nulle.', 'Clé étrangère : référence une clé primaire.', 'Table d’association : résoudre le N-N.'], 'relations'),
      lesson('2.03', 'SQL essentiel', 'Savoir lire et écrire les requêtes SQL de base.', ['Utiliser SELECT, WHERE, ORDER BY.', 'Comprendre INSERT, UPDATE, DELETE.', 'Utiliser JOIN pour croiser deux tables.'], ['SQL est le langage standard pour interroger et manipuler une base relationnelle.', 'SELECT lit les données, INSERT ajoute, UPDATE modifie et DELETE supprime. WHERE filtre les lignes.', 'JOIN permet de récupérer des informations réparties dans plusieurs tables liées par des clés.'], ['SELECT colonnes FROM table WHERE condition.', 'JOIN utilise une condition de liaison.', 'Toujours filtrer avant de supprimer ou modifier.'], 'query'),
      lesson('2.04', 'Normalisation', 'Éviter les redondances et anomalies dans une base.', ['Comprendre pourquoi normaliser.', 'Expliquer 1FN, 2FN et 3FN simplement.', 'Repérer une donnée répétée inutilement.'], ['La normalisation organise les tables pour éviter les répétitions et incohérences.', '1FN : chaque cellule contient une valeur simple. 2FN : les colonnes dépendent de toute la clé. 3FN : les colonnes ne dépendent pas d’une autre colonne non clé.', 'Trop normaliser peut compliquer les requêtes, mais pas normaliser crée des erreurs.'], ['Redondance = même donnée répétée.', 'Anomalie de mise à jour = modifier un endroit mais oublier un autre.', 'La 3FN est souvent suffisante en examen.'], 'layers'),
      lesson('2.05', 'Transactions ACID', 'Comprendre comment une base reste correcte même en cas d’erreur.', ['Définir transaction.', 'Expliquer Atomicité, Cohérence, Isolation, Durabilité.', 'Donner un exemple bancaire.'], ['Une transaction est un groupe d’opérations qui doit réussir entièrement ou échouer entièrement.', 'Exemple : transférer 10 000 FCFA de A vers B exige de débiter A et créditer B. Si une étape échoue, tout doit être annulé.', 'ACID garantit que les données restent fiables malgré les pannes ou accès simultanés.'], ['Atomicité : tout ou rien.', 'Isolation : transactions simultanées sans mélange dangereux.', 'Durabilité : après validation, les données restent enregistrées.'], 'shield'),
      lesson('2.06', 'Index et performance', 'Comprendre pourquoi une requête peut être lente et comment l’accélérer.', ['Définir un index.', 'Identifier les colonnes utiles à indexer.', 'Comprendre le coût des index.'], ['Un index est une structure qui accélère la recherche, comme l’index d’un livre.', 'On indexe souvent les clés primaires, clés étrangères et colonnes utilisées dans WHERE ou JOIN.', 'Mais un index prend de l’espace et ralentit parfois les écritures, car il doit être mis à jour.'], ['Index utile sur colonnes filtrées souvent.', 'Trop d’index = écritures plus lentes.', 'Mesurer avant d’optimiser.'], 'speed'),
    ],
    exercises: [
      qa('Quelle est la différence entre une base de données et un SGBD ?', 'La base de données est l’ensemble des données organisées. Le SGBD est le logiciel qui permet de gérer ces données : requêtes, sécurité, transactions, sauvegardes.'),
      qa('À quoi sert une clé étrangère ?', 'Elle sert à relier une table à une autre en référençant la clé primaire de la table cible. Elle maintient l’intégrité référentielle.'),
      qa('Écrire une requête SQL qui affiche les étudiants de la filière “Réseaux”.', 'SELECT * FROM etudiants WHERE filiere = \"Réseaux\";'),
      qa('Expliquer ACID avec l’exemple d’un transfert d’argent.', 'Le débit et le crédit doivent former une seule transaction. Atomicité : les deux opérations réussissent ou aucune. Cohérence : les soldes restent valides. Isolation : deux transferts ne se perturbent pas. Durabilité : après validation, le transfert reste enregistré.'),
    ],
  },
  {
    id: 'teleinfo',
    title: 'Téléinformatique',
    short: 'Transmission et protocoles',
    color: '#5a6fd6',
    lessons: [
      lesson('3.01', 'Notion de téléinformatique', 'Comprendre la communication entre ordinateurs distants.', ['Définir téléinformatique.', 'Identifier source, canal, destination.', 'Comprendre le rôle des protocoles.'], ['La téléinformatique étudie l’échange d’informations entre systèmes informatiques à distance.', 'Un échange implique une source, un message, un support de transmission, une destination et des règles communes appelées protocoles.', 'Sans protocole, deux machines peuvent être connectées mais ne pas se comprendre.'], ['Source : émetteur du message.', 'Canal : support physique ou sans fil.', 'Protocole : règles de communication.'], 'flow'),
      lesson('3.02', 'Signal et codage', 'Comprendre comment les bits deviennent des signaux transmissibles.', ['Différencier signal analogique et numérique.', 'Comprendre codage et modulation.', 'Relier débit et bande passante.'], ['Un ordinateur manipule des bits. Pour traverser un câble, la fibre ou l’air, ces bits sont représentés par des signaux électriques, lumineux ou radio.', 'Le codage transforme les bits en forme de signal. La modulation adapte le signal au support.', 'La qualité dépend du bruit, de la distance, de la bande passante et du matériel.'], ['Signal numérique : niveaux discrets.', 'Signal analogique : variation continue.', 'Bande passante plus large = débit potentiel plus élevé.'], 'waves'),
      lesson('3.03', 'Modes de transmission', 'Retenir simplex, half-duplex, full-duplex et synchrone/asynchrone.', ['Comparer simplex, half-duplex et full-duplex.', 'Différencier synchrone et asynchrone.', 'Donner un exemple par mode.'], ['Simplex : communication dans un seul sens, comme une diffusion TV. Half-duplex : les deux sens existent mais pas en même temps, comme un talkie-walkie. Full-duplex : les deux sens fonctionnent simultanément, comme un appel téléphonique.', 'En transmission synchrone, l’émetteur et le récepteur partagent un rythme. En asynchrone, chaque caractère ou bloc indique son début et sa fin.'], ['Simplex : sens unique.', 'Half-duplex : alternance.', 'Full-duplex : simultané.'], 'duplex'),
      lesson('3.04', 'Multiplexage', 'Comprendre comment plusieurs communications partagent un même support.', ['Définir multiplexage.', 'Comparer FDM, TDM et WDM.', 'Expliquer l’intérêt économique.'], ['Le multiplexage permet de faire passer plusieurs flux sur un même support physique.', 'FDM sépare par fréquences, TDM sépare par créneaux de temps, WDM sépare par longueurs d’onde dans la fibre.', 'C’est essentiel pour rentabiliser les infrastructures et augmenter la capacité.'], ['FDM : fréquences différentes.', 'TDM : temps partagé.', 'WDM : couleurs de lumière différentes.'], 'multiplex'),
      lesson('3.05', 'Contrôle d’erreurs', 'Comprendre détection, correction et retransmission.', ['Expliquer bruit et erreur de transmission.', 'Définir parité, checksum et CRC.', 'Comprendre ARQ.'], ['Un signal peut être déformé par le bruit. Des bits reçus peuvent donc être faux.', 'La parité, le checksum et le CRC permettent de détecter des erreurs. Certains codes permettent aussi de corriger.', 'ARQ consiste à redemander l’envoi si une erreur est détectée.'], ['CRC : très utilisé pour détecter les erreurs.', 'ACK : accusé de réception.', 'NACK ou timeout : retransmission.'], 'shield'),
      lesson('3.06', 'Commutation', 'Comparer commutation de circuits, messages et paquets.', ['Définir commutation.', 'Comparer circuit et paquet.', 'Comprendre pourquoi Internet utilise les paquets.'], ['La commutation choisit comment acheminer les communications dans un réseau.', 'La commutation de circuits réserve un chemin complet, comme le téléphone classique. La commutation de paquets découpe les données en paquets pouvant suivre des routes différentes.', 'Internet utilise les paquets car c’est flexible, efficace et robuste.'], ['Circuit : chemin réservé.', 'Paquet : données découpées et routées.', 'Internet privilégie la commutation de paquets.'], 'packets'),
    ],
    exercises: [
      qa('Définir la téléinformatique.', 'C’est le domaine qui étudie l’échange d’informations entre systèmes informatiques distants à travers des supports de transmission et des protocoles.'),
      qa('Comparer half-duplex et full-duplex.', 'Half-duplex : les deux équipements peuvent communiquer dans les deux sens mais chacun son tour. Full-duplex : ils peuvent émettre et recevoir simultanément.'),
      qa('À quoi sert le multiplexage ?', 'Il permet à plusieurs communications de partager un même support, ce qui augmente la capacité et réduit le coût d’infrastructure.'),
      qa('Pourquoi Internet utilise-t-il la commutation de paquets ?', 'Parce qu’elle est souple, robuste et efficace : les données sont découpées, routées indépendamment et peuvent contourner certaines pannes.'),
    ],
  },
  {
    id: 'web',
    title: 'Développement web',
    short: 'HTML, CSS, JS et HTTP',
    color: '#b15f9f',
    lessons: [
      lesson('4.01', 'Architecture du web', 'Comprendre le dialogue navigateur, serveur et ressources.', ['Définir client, serveur, URL et ressource.', 'Expliquer le rôle de HTTP.', 'Comprendre page statique et dynamique.'], ['Le navigateur est le client. Il demande des ressources à un serveur : HTML, CSS, JavaScript, images, données.', 'HTTP est le protocole de requête-réponse du Web. Une URL indique où trouver la ressource.', 'Une page statique est déjà prête. Une page dynamique est générée ou alimentée par des données.'], ['Client : navigateur.', 'Serveur : répond aux requêtes.', 'HTTP : langage d’échange du Web.'], 'clientserver'),
      lesson('4.02', 'HTML sémantique', 'Structurer correctement une page web.', ['Comprendre balises et attributs.', 'Utiliser header, main, section, article, footer.', 'Savoir pourquoi la sémantique aide l’accessibilité.'], ['HTML décrit la structure du contenu. Il ne sert pas à décorer, mais à donner du sens.', 'Les balises sémantiques indiquent le rôle des zones : navigation, article, section, pied de page.', 'Un bon HTML aide les moteurs de recherche, lecteurs d’écran et développeurs.'], ['HTML = structure.', 'Sémantique = sens du contenu.', 'Un seul h1 principal par page est souvent préférable.'], 'layers'),
      lesson('4.03', 'CSS et responsive', 'Comprendre la mise en page moderne.', ['Différencier style, layout et responsive.', 'Comprendre flexbox, grid et media queries.', 'Identifier le rôle de Tailwind CSS.'], ['CSS contrôle l’apparence : couleurs, tailles, espacements, grille et adaptation mobile.', 'Flexbox aligne dans une direction. Grid organise en lignes et colonnes. Les media queries adaptent selon la largeur.', 'Tailwind propose des classes utilitaires pour construire rapidement une interface cohérente.'], ['Flexbox : alignement simple.', 'Grid : disposition 2D.', 'Responsive : lisible sur mobile, tablette et desktop.'], 'grid'),
      lesson('4.04', 'JavaScript côté client', 'Ajouter de l’interaction sans backend.', ['Comprendre DOM et événements.', 'Modifier le contenu d’une page.', 'Éviter le JS inutile.'], ['JavaScript permet de réagir aux clics, afficher/masquer des blocs, valider un formulaire ou charger des données.', 'Le DOM est la représentation manipulable de la page HTML.', 'Pour un site de révision léger, le JS doit rester minimal : navigation, filtres, accordéons.'], ['DOM : arbre de la page.', 'Événement : clic, saisie, chargement.', 'Progressive enhancement : le contenu reste compréhensible.'], 'flow'),
      lesson('4.05', 'HTTP et API', 'Retenir les méthodes, statuts et JSON.', ['Identifier GET, POST, PUT, DELETE.', 'Comprendre codes 200, 404, 500.', 'Savoir ce qu’est JSON.'], ['HTTP transporte les requêtes et réponses. GET lit une ressource, POST crée, PUT remplace, DELETE supprime.', 'Les statuts indiquent le résultat : 200 OK, 201 créé, 404 introuvable, 500 erreur serveur.', 'JSON est un format texte simple pour échanger des données structurées.'], ['GET ne doit pas modifier les données.', '404 = ressource absente.', 'JSON ressemble à des objets clé-valeur.'], 'api'),
      lesson('4.06', 'Accessibilité et performance', 'Faire un site lisible, rapide et utilisable.', ['Citer les bases d’accessibilité.', 'Comprendre performance perçue.', 'Identifier les optimisations simples.'], ['Un site accessible peut être utilisé au clavier, lu par un lecteur d’écran, compris avec un bon contraste et des textes alternatifs.', 'La performance dépend du poids des fichiers, images, polices, scripts et du temps de rendu.', 'Optimisations simples : images compressées, peu de JavaScript, HTML sémantique, CSS raisonnable.'], ['Contraste suffisant.', 'Boutons et liens explicites.', 'Limiter les dépendances inutiles.'], 'speed'),
    ],
    exercises: [
      qa('Quel est le rôle de HTML, CSS et JavaScript ?', 'HTML structure le contenu, CSS définit l’apparence et la mise en page, JavaScript ajoute les interactions.'),
      qa('Quelle différence entre GET et POST ?', 'GET sert à récupérer une ressource sans modifier les données. POST sert généralement à envoyer des données pour créer une ressource ou déclencher un traitement.'),
      qa('Pourquoi utiliser des balises sémantiques ?', 'Elles donnent du sens au contenu, améliorent l’accessibilité, le référencement et la maintenance du code.'),
      qa('Citer trois règles pour un site responsive.', 'Utiliser une grille flexible, adapter les tailles/espacements aux écrans, tester sur mobile, éviter les largeurs fixes, rendre les images fluides.'),
    ],
  },
  {
    id: 'reseaux',
    title: 'Systèmes réseaux informatiques',
    short: 'OSI, IP, routage et services',
    color: '#2f6f68',
    lessons: [
      lesson('5.01', 'Modèles OSI et TCP/IP', 'Situer les protocoles par couches.', ['Citer les couches OSI.', 'Relier TCP/IP au modèle OSI.', 'Comprendre l’encapsulation.'], ['Les modèles en couches découpent la communication en responsabilités simples.', 'OSI a 7 couches : physique, liaison, réseau, transport, session, présentation, application. TCP/IP est plus pratique : accès réseau, Internet, transport, application.', 'À l’envoi, chaque couche ajoute ses informations : c’est l’encapsulation.'], ['Chaque couche rend service à la couche supérieure.', 'IP travaille couche réseau.', 'TCP/UDP travaillent couche transport.'], 'osi'),
      lesson('5.02', 'Adressage IP', 'Comprendre IPv4, masque, réseau et hôte.', ['Lire une adresse IPv4.', 'Comprendre masque et CIDR.', 'Identifier réseau, broadcast et plage utilisable.'], ['Une adresse IPv4 identifie une interface réseau. Le masque sépare la partie réseau et la partie hôte.', 'Exemple : 192.168.1.10/24 signifie réseau 192.168.1.0, masque 255.255.255.0, hôtes de 192.168.1.1 à 192.168.1.254.', 'Le routeur permet de sortir du réseau local.'], ['/24 = 24 bits réseau.', 'Broadcast : adresse pour tous les hôtes du réseau.', 'Passerelle : route vers les autres réseaux.'], 'subnet'),
      lesson('5.03', 'Commutation Ethernet', 'Comprendre le rôle d’un switch.', ['Définir adresse MAC.', 'Expliquer table MAC.', 'Comprendre collision et domaine de broadcast.'], ['Ethernet fonctionne dans le réseau local. Chaque carte réseau possède une adresse MAC.', 'Le switch apprend quelles adresses MAC se trouvent sur quels ports, puis envoie les trames au bon endroit.', 'Un switch réduit les collisions mais le broadcast reste propagé dans le VLAN.'], ['MAC : adresse physique locale.', 'Switch : couche liaison.', 'VLAN : séparation logique d’un réseau local.'], 'switch'),
      lesson('5.04', 'Routage', 'Comprendre comment les paquets passent entre réseaux.', ['Définir routeur et table de routage.', 'Comprendre route par défaut.', 'Différencier routage statique et dynamique.'], ['Un routeur relie plusieurs réseaux IP. Il consulte sa table de routage pour choisir le prochain saut.', 'La route par défaut est utilisée quand aucune route plus précise n’existe.', 'Le routage peut être configuré manuellement ou appris par protocoles comme OSPF, RIP ou BGP.'], ['Routeur : couche réseau.', 'Next hop : prochain équipement.', 'Route par défaut : 0.0.0.0/0.'], 'routes'),
      lesson('5.05', 'Services réseau', 'Retenir DNS, DHCP, NAT et pare-feu.', ['Expliquer DNS et DHCP.', 'Comprendre NAT.', 'Définir pare-feu.'], ['DNS traduit les noms de domaine en adresses IP. DHCP attribue automatiquement une configuration IP.', 'NAT permet à plusieurs machines privées de sortir sur Internet avec une adresse publique.', 'Un pare-feu filtre les flux selon des règles : IP, ports, protocole, état de connexion.'], ['DNS = nom vers IP.', 'DHCP = configuration automatique.', 'NAT = traduction d’adresses.'], 'services'),
      lesson('5.06', 'Diagnostic réseau', 'Utiliser les outils de base pour trouver une panne.', ['Savoir utiliser ping, ipconfig/ip, traceroute.', 'Lire une configuration IP.', 'Adopter une méthode logique.'], ['Pour diagnostiquer, on part du plus simple : câble/Wi-Fi, adresse IP, passerelle, DNS, accès distant.', 'ping teste la joignabilité, traceroute montre le chemin, ip ou ipconfig affiche la configuration.', 'Une panne réseau se résout souvent par étapes, pas au hasard.'], ['Tester local puis distant.', 'Si IP OK mais nom KO : suspecter DNS.', 'Si passerelle KO : problème LAN ou routeur.'], 'diagnostic'),
    ],
    exercises: [
      qa('Citer les 7 couches du modèle OSI.', 'Physique, liaison de données, réseau, transport, session, présentation, application.'),
      qa('Pour 192.168.10.5/24, donner le réseau et le broadcast.', 'Réseau : 192.168.10.0. Broadcast : 192.168.10.255. Plage hôte : 192.168.10.1 à 192.168.10.254.'),
      qa('Différence entre switch et routeur.', 'Le switch relie des machines dans un réseau local avec des adresses MAC. Le routeur relie des réseaux IP différents et choisit les routes.'),
      qa('Si ping 8.8.8.8 marche mais ping google.com échoue, quelle panne probable ?', 'Le réseau IP fonctionne, mais la résolution DNS est probablement en panne ou mal configurée.'),
    ],
  },
  {
    id: 'c-linux',
    title: 'Programmation réseaux C/Linux',
    short: 'Sockets, TCP, UDP et processus',
    color: '#172033',
    lessons: [
      lesson('6.01', 'Sockets', 'Comprendre le point d’entrée de la programmation réseau.', ['Définir socket.', 'Identifier adresse IP et port.', 'Comprendre client et serveur.'], ['Une socket est une extrémité de communication entre deux programmes.', 'Pour communiquer, un programme utilise une adresse IP et un port. L’IP identifie la machine, le port identifie l’application.', 'En C sous Linux, les fonctions clés sont socket(), bind(), listen(), accept(), connect(), send(), recv().'], ['Socket = point de communication.', 'Port serveur connu : 80 HTTP, 443 HTTPS.', 'Client initie souvent la connexion.'], 'socket'),
      lesson('6.02', 'Serveur TCP', 'Retenir l’ordre des appels système côté serveur.', ['Créer une socket TCP.', 'Associer adresse et port avec bind.', 'Attendre et accepter les clients.'], ['Un serveur TCP suit généralement : socket, bind, listen, accept, recv/send, close.', 'listen met la socket en écoute. accept crée une nouvelle socket dédiée au client connecté.', 'TCP est fiable, orienté connexion et ordonné.'], ['socket() crée.', 'bind() attache au port.', 'accept() retourne la socket client.'], 'pipeline'),
      lesson('6.03', 'Client TCP', 'Retenir l’ordre des appels côté client.', ['Créer une socket.', 'Utiliser connect vers le serveur.', 'Échanger avec send et recv.'], ['Le client TCP suit : socket, connect, send/recv, close.', 'connect établit la connexion vers l’adresse IP et le port serveur.', 'Après connexion, les deux côtés peuvent envoyer et recevoir des octets.'], ['connect() déclenche la connexion.', 'send()/recv() manipulent des octets.', 'Toujours vérifier les retours d’erreur.'], 'clientserver'),
      lesson('6.04', 'UDP', 'Comprendre la communication sans connexion.', ['Comparer UDP et TCP.', 'Utiliser sendto et recvfrom.', 'Citer les usages d’UDP.'], ['UDP n’établit pas de connexion. Chaque datagramme est envoyé indépendamment.', 'Il est plus simple et rapide, mais ne garantit ni livraison, ni ordre, ni retransmission.', 'Il est utilisé pour DNS, streaming, jeux, VoIP ou protocoles où la rapidité compte.'], ['TCP : fiable et connecté.', 'UDP : rapide et sans connexion.', 'sendto/recvfrom remplacent souvent send/recv.'], 'packets'),
      lesson('6.05', 'Concurrence serveur', 'Gérer plusieurs clients.', ['Comprendre fork, thread et select.', 'Identifier le blocage d’E/S.', 'Choisir une stratégie simple.'], ['Un serveur naïf traite un client à la fois. Pour plusieurs clients, il peut créer un processus avec fork, un thread, ou surveiller plusieurs sockets avec select/poll/epoll.', 'fork isole les clients mais consomme plus de ressources. Les threads partagent la mémoire. select évite de créer un flux d’exécution par client.', 'En examen, il faut surtout expliquer le principe et les compromis.'], ['fork : un processus par client.', 'thread : plus léger mais mémoire partagée.', 'select/poll : multiplexage d’E/S.'], 'multiplex'),
      lesson('6.06', 'Erreurs et robustesse', 'Écrire un programme réseau plus sûr.', ['Vérifier les retours système.', 'Comprendre errno.', 'Fermer les descripteurs.'], ['Les appels système peuvent échouer : port occupé, réseau absent, permission refusée, client déconnecté.', 'Il faut tester les valeurs de retour, afficher perror ou strerror(errno), fermer les sockets et éviter les buffers trop petits.', 'Un bon programme réseau gère les erreurs sans s’arrêter brutalement pour une panne normale.'], ['Toujours vérifier return < 0.', 'close() libère les descripteurs.', 'recv() retourne 0 si le pair ferme proprement.'], 'shield'),
    ],
    exercises: [
      qa('Donner l’ordre des appels d’un serveur TCP simple.', 'socket(), bind(), listen(), accept(), recv()/send(), close().'),
      qa('Différence entre TCP et UDP.', 'TCP est orienté connexion, fiable et ordonné. UDP est sans connexion, plus léger, mais ne garantit pas la livraison ni l’ordre.'),
      qa('À quoi sert bind() ?', 'bind() associe une socket à une adresse locale et à un port, afin que le serveur puisse recevoir des connexions ou datagrammes sur ce port.'),
      qa('Que signifie recv() qui retourne 0 en TCP ?', 'Cela signifie que l’autre côté a fermé proprement la connexion.'),
    ],
  },
  {
    id: 'telecom',
    title: 'Télécommunications',
    short: 'Signaux, modulation et accès',
    color: '#e98645',
    lessons: [
      lesson('7.01', 'Chaîne de communication', 'Visualiser le chemin d’un message télécom.', ['Identifier émetteur, canal, récepteur.', 'Comprendre bruit et atténuation.', 'Relier codage, modulation et antenne.'], ['Une chaîne de télécommunication transporte une information d’un émetteur vers un récepteur à travers un canal.', 'Le canal ajoute du bruit, de l’atténuation et parfois des interférences.', 'Le système doit coder, moduler, amplifier, transmettre, recevoir, démoduler et décoder.'], ['Émetteur : prépare le signal.', 'Canal : support imparfait.', 'Récepteur : reconstruit l’information.'], 'flow'),
      lesson('7.02', 'Bande passante et débit', 'Comprendre ce qui limite la vitesse d’une transmission.', ['Définir bande passante.', 'Différencier débit binaire et baud.', 'Comprendre l’impact du bruit.'], ['La bande passante est la plage de fréquences utilisable par un canal.', 'Le débit binaire mesure les bits transmis par seconde. Le baud mesure les symboles par seconde.', 'Plus le canal est large et propre, plus le débit possible est élevé.'], ['Débit : bits/s.', 'Baud : symboles/s.', 'Bruit élevé = erreurs ou débit réduit.'], 'waves'),
      lesson('7.03', 'Modulation', 'Comprendre comment transporter une information sur une onde.', ['Définir porteuse.', 'Comparer AM, FM, PM.', 'Comprendre modulation numérique.'], ['La modulation modifie une onde porteuse pour transporter l’information.', 'AM modifie l’amplitude, FM modifie la fréquence, PM modifie la phase.', 'En numérique, les schémas comme ASK, FSK, PSK ou QAM représentent des bits par états de signal.'], ['Porteuse : onde support.', 'QAM combine amplitude et phase.', 'La modulation s’adapte au canal.'], 'modulation'),
      lesson('7.04', 'Supports de transmission', 'Comparer cuivre, fibre optique et radio.', ['Identifier avantages et limites du cuivre.', 'Comprendre l’intérêt de la fibre.', 'Citer les contraintes radio.'], ['Le cuivre est économique mais sensible aux perturbations et limité en distance/débit.', 'La fibre utilise la lumière : haut débit, longue distance, faible atténuation.', 'La radio permet la mobilité mais subit interférences, obstacles et partage du spectre.'], ['Cuivre : simple et moins cher.', 'Fibre : très haut débit.', 'Radio : mobilité.'], 'media'),
      lesson('7.05', 'Accès multiple', 'Partager le canal entre plusieurs utilisateurs.', ['Comparer FDMA, TDMA, CDMA, OFDMA.', 'Comprendre pourquoi partager le spectre.', 'Relier aux réseaux mobiles.'], ['L’accès multiple permet à plusieurs utilisateurs de communiquer sur une ressource limitée.', 'FDMA sépare par fréquences, TDMA par temps, CDMA par codes, OFDMA par sous-porteuses.', 'Les réseaux mobiles combinent plusieurs techniques pour servir beaucoup d’utilisateurs.'], ['FDMA : fréquences.', 'TDMA : temps.', 'OFDMA : sous-porteuses orthogonales.'], 'multiplex'),
      lesson('7.06', 'Réseaux mobiles', 'Comprendre cellule, antenne et handover.', ['Définir cellule radio.', 'Comprendre BTS/eNodeB/gNodeB.', 'Expliquer handover.'], ['Un réseau mobile découpe le territoire en cellules couvertes par des antennes.', 'Quand l’utilisateur bouge, le réseau peut transférer la communication d’une cellule à l’autre : c’est le handover.', 'La capacité dépend de la fréquence, densité d’antennes, technologie et nombre d’utilisateurs.'], ['Cellule : zone de couverture.', 'Handover : changement d’antenne sans couper.', '5G : débit, faible latence, découpage réseau possible.'], 'cellular'),
    ],
    exercises: [
      qa('Décrire une chaîne de télécommunication.', 'Information, émetteur, codage/modulation, canal, bruit, récepteur, démodulation/décodage, information reconstruite.'),
      qa('Différence entre débit binaire et baud.', 'Le débit binaire mesure les bits par seconde. Le baud mesure les symboles par seconde. Un symbole peut représenter plusieurs bits.'),
      qa('Comparer AM et FM.', 'AM modifie l’amplitude de la porteuse. FM modifie sa fréquence. FM est souvent plus résistante à certains bruits d’amplitude.'),
      qa('Pourquoi utilise-t-on des cellules dans les réseaux mobiles ?', 'Pour réutiliser les fréquences dans différentes zones, augmenter la capacité et assurer une couverture progressive du territoire.'),
    ],
  },
  {
    id: 'virtualisation',
    title: 'Virtualisation',
    short: 'VM, conteneurs et cloud',
    color: '#5a6fd6',
    lessons: [
      lesson('8.01', 'Principe de virtualisation', 'Comprendre comment plusieurs systèmes partagent une même machine.', ['Définir virtualisation.', 'Comprendre abstraction des ressources.', 'Identifier avantages principaux.'], ['La virtualisation crée une version logique d’une ressource physique : serveur, stockage, réseau ou système d’exploitation.', 'Elle permet d’exécuter plusieurs environnements isolés sur une même machine physique.', 'Avantages : meilleure utilisation du matériel, isolation, tests rapides, sauvegarde et déploiement simplifiés.'], ['Abstraction : cacher le matériel réel.', 'Isolation : séparer les environnements.', 'Consolidation : utiliser moins de serveurs physiques.'], 'layers'),
      lesson('8.02', 'Machines virtuelles', 'Comprendre VM, hyperviseur type 1 et type 2.', ['Définir VM et hyperviseur.', 'Comparer type 1 et type 2.', 'Citer les usages.'], ['Une machine virtuelle simule un ordinateur complet avec CPU, RAM, disque et réseau virtuels.', 'L’hyperviseur type 1 tourne directement sur le matériel, comme VMware ESXi ou Hyper-V Server. Le type 2 tourne sur un OS hôte, comme VirtualBox.', 'Les VM servent à isoler des serveurs, tester des OS et faciliter la migration.'], ['VM = machine complète virtualisée.', 'Type 1 = bare metal.', 'Type 2 = sur un OS hôte.'], 'vm'),
      lesson('8.03', 'Conteneurs', 'Comprendre Docker et la différence avec les VM.', ['Définir conteneur.', 'Comparer conteneur et VM.', 'Comprendre image et registre.'], ['Un conteneur isole une application et ses dépendances en partageant le noyau du système hôte.', 'Il est plus léger qu’une VM, démarre plus vite, mais isole moins fortement qu’un OS complet.', 'Une image est un modèle immuable. Un registre stocke et distribue les images.'], ['Conteneur : processus isolé.', 'Image : modèle de conteneur.', 'Dockerfile : recette de construction.'], 'containers'),
      lesson('8.04', 'Stockage et réseau virtuels', 'Relier VM, disques virtuels et commutateurs virtuels.', ['Définir disque virtuel.', 'Comprendre bridge, NAT et host-only.', 'Identifier snapshots.'], ['Une VM utilise souvent un fichier disque virtuel qui se comporte comme un disque dur.', 'Le réseau virtuel peut être en bridge pour apparaître sur le LAN, en NAT pour sortir via l’hôte, ou host-only pour rester isolé.', 'Un snapshot capture l’état d’une VM à un moment donné pour revenir en arrière.'], ['Bridge : VM visible sur le réseau.', 'NAT : sortie via l’hôte.', 'Snapshot : point de retour.'], 'switch'),
      lesson('8.05', 'Cloud et virtualisation', 'Comprendre IaaS, PaaS et SaaS.', ['Définir cloud computing.', 'Comparer IaaS, PaaS, SaaS.', 'Relier cloud et virtualisation.'], ['Le cloud fournit des ressources informatiques à la demande via le réseau.', 'IaaS fournit machines, stockage, réseau. PaaS fournit une plateforme pour déployer du code. SaaS fournit une application prête à utiliser.', 'La virtualisation permet au fournisseur cloud de mutualiser et automatiser ses infrastructures.'], ['IaaS : infrastructure.', 'PaaS : plateforme.', 'SaaS : logiciel prêt.'], 'cloud'),
      lesson('8.06', 'Sécurité et sauvegarde', 'Réviser les risques en environnement virtualisé.', ['Identifier risques VM et conteneurs.', 'Comprendre isolation et mises à jour.', 'Citer sauvegarde et PRA.'], ['La virtualisation facilite la gestion mais ajoute des risques : mauvaise configuration, images vulnérables, accès administrateur mal protégé, fuite entre environnements.', 'Il faut mettre à jour hyperviseur, images et systèmes invités, limiter les droits et segmenter les réseaux.', 'Les sauvegardes et plans de reprise d’activité réduisent l’impact des pannes ou attaques.'], ['Ne pas exposer l’interface d’administration.', 'Sauvegarder et tester la restauration.', 'Utiliser des images fiables.'], 'shield'),
    ],
    exercises: [
      qa('Définir la virtualisation.', 'C’est une technique qui crée une version logique d’une ressource physique afin de faire fonctionner plusieurs environnements isolés sur une même infrastructure.'),
      qa('Comparer VM et conteneur.', 'Une VM virtualise une machine complète avec son propre OS. Un conteneur isole une application en partageant le noyau de l’hôte, donc il est plus léger et démarre plus vite.'),
      qa('Différence entre hyperviseur type 1 et type 2.', 'Type 1 : installé directement sur le matériel. Type 2 : installé comme application au-dessus d’un système d’exploitation hôte.'),
      qa('Donner un exemple de IaaS, PaaS et SaaS.', 'IaaS : machine virtuelle cloud. PaaS : plateforme de déploiement d’applications. SaaS : Gmail, Microsoft 365 ou outil web prêt à utiliser.'),
    ],
  },
];

const documentedLessons = {
  'eco-num': [
    lesson('1.01', 'Définition et périmètre', 'Comprendre ce que recouvre vraiment l’économie numérique.', ['Définir économie numérique, TIC et nouvelle économie.', 'Comprendre que le numérique traverse tous les secteurs.', 'Identifier les activités directement et indirectement concernées.'], ['Les documents définissent l’économie numérique comme l’ensemble des activités économiques et sociales activées par Internet, les réseaux mobiles, les plateformes, les capteurs, les logiciels et les données.', 'Elle ne se limite pas aux entreprises informatiques. Une banque, une école, un hôpital ou une entreprise agricole deviennent aussi numériques lorsqu’ils utilisent des outils connectés pour produire, vendre ou décider.', 'En examen, il faut retenir son caractère transversal : le numérique transforme les produits, les services, l’organisation du travail et les modèles économiques.'], ['Économie numérique = TIC + données + réseaux + usages économiques.', 'Elle touche les secteurs numériques et les secteurs traditionnels numérisés.', 'Le numérique est un moteur de croissance, productivité et compétitivité.'], 'flow'),
    lesson('1.02', 'Technologies de base', 'Identifier les technologies qui rendent possible l’économie numérique.', ['Citer les principales technologies numériques.', 'Relier chaque technologie à un usage économique.', 'Comprendre le rôle des infrastructures.'], ['Les cours citent Internet haut débit, cloud, mobilité sans fil, Internet des objets, robotique, intelligence artificielle, big data, réalité virtuelle, impression 3D et plateformes.', 'Ces technologies permettent de collecter des données, automatiser des tâches, collaborer à distance, prévoir la demande et vendre sans frontière physique.', 'Sans infrastructures réseau, centres de données, terminaux et logiciels, l’économie numérique ne fonctionne pas.'], ['Cloud : ressources informatiques à la demande.', 'IoT : objets capables de capter et transmettre des données.', 'IA et big data : analyser de grands volumes pour décider.'], 'cloud'),
    lesson('1.03', 'Acteurs de l’économie numérique', 'Distinguer les producteurs, utilisateurs, intermédiaires et régulateurs.', ['Identifier fournisseurs de services et producteurs de contenus.', 'Comprendre le rôle des intermédiaires techniques.', 'Situer l’État et les régulateurs.'], ['Les documents UNJF insistent sur les acteurs : producteur de contenu ou service numérique, destinataire, intermédiaires techniques, opérateurs d’infrastructure, hébergeurs, plateformes et autorités de régulation.', 'La relation entre acteurs repose souvent sur un contrat électronique, mais aussi sur des moyens techniques : réseau, hébergement, paiement, identité numérique.', 'Le numérique n’a pas supprimé les intermédiaires. Il a créé de nouvelles formes d’intermédiation : plateformes, moteurs de recherche, places de marché, services cloud.'], ['Producteur : crée le service ou contenu.', 'Utilisateur : consomme, paie, produit parfois des données.', 'Intermédiaire : rend la relation possible techniquement.'], 'network'),
    lesson('1.04', 'Plateformes et effets de réseau', 'Comprendre pourquoi les plateformes deviennent puissantes.', ['Définir une plateforme numérique.', 'Expliquer les effets de réseau.', 'Comprendre la tendance à la concentration.'], ['Une plateforme met en relation plusieurs groupes : vendeurs et acheteurs, chauffeurs et clients, annonceurs et utilisateurs, créateurs et public.', 'Plus il y a d’utilisateurs, plus la plateforme devient utile. Cet effet de réseau attire encore plus d’utilisateurs et peut créer une position dominante.', 'Les documents soulignent que l’économie numérique tend à concentrer les marchés, même si une innovation peut renverser un leader.'], ['Effet de réseau direct : le service vaut plus si beaucoup l’utilisent.', 'Effet indirect : plus de vendeurs attirent plus d’acheteurs.', 'Risque : dépendance, pouvoir de marché, verrouillage.'], 'network'),
    lesson('1.05', 'Modèles d’affaires numériques', 'Retenir comment les entreprises numériques gagnent de l’argent.', ['Comparer publicité, abonnement, commission et freemium.', 'Comprendre le coût marginal faible.', 'Relier modèle économique et données.'], ['Le numérique réduit souvent le coût de reproduction : copier un logiciel, diffuser un fichier ou servir une page coûte peu par utilisateur supplémentaire.', 'Les modèles fréquents sont la publicité ciblée, l’abonnement, la commission, le freemium, la vente de données agrégées, le cloud à l’usage et les places de marché.', 'La valeur provient souvent de la combinaison service + audience + données + confiance.'], ['Freemium : gratuit pour attirer, payant pour avancer.', 'Commission : pourcentage sur une transaction.', 'Publicité : l’attention et le ciblage financent le service.'], 'layers'),
    lesson('1.06', 'Données et actifs immatériels', 'Comprendre pourquoi la donnée devient une ressource stratégique.', ['Différencier donnée, information et connaissance.', 'Relier données, IA et décision.', 'Comprendre la notion d’actifs immatériels.'], ['Les rapports d’économie numérique soulignent le rôle des données, de la propriété intellectuelle, des logiciels, marques, algorithmes et compétences comme actifs immatériels.', 'Une donnée brute devient utile lorsqu’elle est collectée, nettoyée, croisée, analysée puis utilisée pour prévoir, personnaliser ou automatiser.', 'La donnée crée de la valeur seulement si l’organisation possède les compétences, les outils et les règles pour l’exploiter correctement.'], ['Donnée brute : fait isolé.', 'Information : donnée interprétée.', 'Actif immatériel : ressource non physique créant de la valeur.'], 'pipeline'),
    lesson('1.07', 'Transformation numérique', 'Expliquer comment une organisation devient numérique.', ['Distinguer informatisation et transformation numérique.', 'Identifier processus, compétences et organisation.', 'Comprendre les gains de productivité.'], ['La transformation numérique n’est pas seulement installer un logiciel. Elle modifie les processus, la relation client, la production, la décision et parfois le métier lui-même.', 'Les documents citent les gains de productivité, la connectivité, la collaboration, l’exploitation des informations et la restructuration des processus.', 'Une entreprise profite vraiment du numérique si elle possède un capital humain qualifié et un capital organisationnel solide.'], ['Transformation = technologie + organisation + compétences.', 'Objectif : produire mieux, plus vite, avec plus d’information.', 'Le facteur humain reste central.'], 'loop'),
    lesson('1.08', 'Travail, compétences et emploi', 'Comprendre les effets du numérique sur le marché du travail.', ['Identifier les nouveaux métiers et compétences.', 'Comprendre polarisation et automatisation.', 'Relier plateformes et nouvelles formes d’emploi.'], ['Les documents évoquent l’impact du numérique sur l’emploi, les métiers, les compétences et la protection sociale.', 'Certaines tâches répétitives sont automatisées, tandis que les métiers liés aux données, réseaux, sécurité, développement et gestion de projets numériques progressent.', 'Les plateformes peuvent créer de nouvelles opportunités mais aussi fragiliser le salariat classique et poser des questions de droits sociaux.'], ['Compétence numérique : savoir utiliser, produire et sécuriser l’information.', 'Automatisation : certaines tâches disparaissent ou changent.', 'Plateformisation : nouvelles formes de travail indépendant.'], 'layers'),
    lesson('1.09', 'Contrats, confiance et régulation', 'Retenir les bases juridiques utiles en économie numérique.', ['Comprendre contrat électronique et signature électronique.', 'Relier confiance, preuve et sécurité.', 'Identifier les enjeux de régulation.'], ['Les documents UNJF abordent le contrat électronique, l’écrit numérique, la signature électronique, les conditions de validité et la preuve.', 'Dans le numérique, la confiance dépend de la capacité à identifier les parties, protéger les données, garantir la preuve et sécuriser les transactions.', 'La régulation cherche à protéger les utilisateurs, organiser la concurrence, encadrer les plateformes et éviter les abus.'], ['Signature électronique : moyen d’identifier et d’approuver.', 'Preuve numérique : garantir l’origine et l’intégrité.', 'Régulation : équilibrer innovation, concurrence et protection.'], 'shield'),
    lesson('1.10', 'Enjeux publics et défis', 'Synthétiser les grands défis de l’économie numérique.', ['Citer les défis de mesure, fiscalité et concurrence.', 'Comprendre fracture numérique et souveraineté.', 'Préparer une réponse de dissertation.'], ['Les documents évoquent la mesure statistique de l’économie numérique, la fiscalité, le contrôle technologique, la concentration des ressources, la fracture numérique et la souveraineté.', 'L’économie numérique crée de la valeur mais pose des problèmes : comment taxer des entreprises présentes partout, protéger les données, mesurer la croissance réelle et éviter les monopoles ?', 'Une bonne conclusion d’examen doit montrer que le numérique est une opportunité, mais qu’il exige compétences, infrastructures, confiance et régulation adaptée.'], ['Défis : fiscalité, données, concurrence, emploi, inclusion.', 'Fracture numérique : inégalité d’accès et de compétences.', 'Souveraineté : capacité à maîtriser ses technologies et données.'], 'diagnostic'),
  ],
  bd: [
    lesson('2.01', 'Rôle d’une base de données', 'Comprendre pourquoi une application a besoin d’une mémoire structurée.', ['Définir base de données et donnée structurée.', 'Expliquer le lien entre application et base.', 'Distinguer fichier simple et SGBD.'], ['Le cours compare la base de données à un entrepôt et l’application à une usine. Le programme traite les données, mais la base les conserve.', 'Une base relationnelle stocke des données structurées sous forme de tableaux. Elle convient aux applications web, mobiles et logiciels de gestion.', 'Un SGBD ajoute des services importants : requêtes, sécurité, utilisateurs, intégrité, transactions et sauvegarde.'], ['BDD : mémoire organisée d’une application.', 'Donnée structurée : représentable en lignes et colonnes.', 'SGBD : logiciel qui gère la base.'], 'database'),
    lesson('2.02', 'Tables, lignes et colonnes', 'Maîtriser le vocabulaire relationnel de base.', ['Définir table, relation, tuple et attribut.', 'Comprendre schéma d’une table.', 'Lire une table simple.'], ['Dans une base relationnelle, l’objet principal est la table. Une table regroupe des objets de même nature.', 'Une ligne représente un objet ou enregistrement. Une colonne représente une caractéristique. Le schéma d’une table est l’ensemble de ses colonnes.', 'Les termes relation, tuple et attribut correspondent souvent à table, ligne et colonne.'], ['Table = relation.', 'Ligne = tuple = enregistrement.', 'Colonne = attribut = caractéristique.'], 'relations'),
    lesson('2.03', 'SGBD et choix techniques', 'Connaître MySQL, PostgreSQL, SQLite et Oracle.', ['Définir SGBDR.', 'Comparer quelques SGBD courants.', 'Comprendre le rôle de SQL.'], ['Les documents présentent MySQL, PostgreSQL, SQLite et Oracle comme des SGBD relationnels courants.', 'MySQL est très utilisé dans le web. PostgreSQL est robuste et respecte fortement SQL. SQLite stocke une base dans un seul fichier et convient aux petits projets. Oracle vise les gros systèmes d’entreprise.', 'SQL est le langage commun qui permet de communiquer avec ces SGBD.'], ['MySQL : très répandu en web.', 'SQLite : léger, fichier unique.', 'PostgreSQL : puissant et conforme aux standards.'], 'layers'),
    lesson('2.04', 'Langage SQL', 'Comprendre les familles de requêtes SQL.', ['Distinguer DDL, DML et DCL.', 'Identifier SELECT, INSERT, UPDATE, DELETE.', 'Comprendre la notion de requête.'], ['Parler à une base en SQL, c’est formuler une requête. Une requête peut lire des données, modifier des lignes ou changer la structure des tables.', 'DDL crée ou modifie la structure : CREATE TABLE, ALTER TABLE, DROP TABLE. DML manipule les données : SELECT, INSERT, UPDATE, DELETE. DCL gère les droits.', 'En examen, les requêtes de lecture et modification sont les plus fréquentes.'], ['DDL : structure.', 'DML : données.', 'DCL : droits et utilisateurs.'], 'query'),
    lesson('2.05', 'Création de tables', 'Savoir construire la structure minimale d’une table.', ['Utiliser CREATE TABLE.', 'Choisir des types simples.', 'Définir une clé primaire.'], ['Créer une table consiste à nommer les colonnes, choisir leurs types et fixer les contraintes importantes.', 'Une clé primaire identifie chaque ligne de manière unique. Elle doit être stable, unique et non nulle.', 'Exemple logique : une table etudiants peut contenir id, nom, prenom, filiere et date_naissance.'], ['CREATE TABLE définit la structure.', 'PRIMARY KEY identifie chaque ligne.', 'Le type doit correspondre à la nature de la donnée.'], 'database'),
    lesson('2.06', 'Lecture des données', 'Savoir écrire les SELECT indispensables.', ['Utiliser SELECT et FROM.', 'Filtrer avec WHERE.', 'Trier et limiter les résultats.'], ['SELECT lit les données d’une ou plusieurs tables. WHERE filtre les lignes selon une condition.', 'ORDER BY trie les résultats. LIMIT limite le nombre de lignes renvoyées selon le SGBD.', 'La méthode d’examen : préciser les colonnes voulues, la table, puis la condition.'], ['SELECT colonnes FROM table.', 'WHERE filtre.', 'ORDER BY organise le résultat.'], 'query'),
    lesson('2.07', 'Insertion, mise à jour et suppression', 'Manipuler les lignes sans perdre de données.', ['Utiliser INSERT INTO.', 'Modifier avec UPDATE.', 'Supprimer avec DELETE prudemment.'], ['INSERT ajoute une ligne. UPDATE modifie des lignes existantes. DELETE supprime des lignes.', 'La règle la plus importante : toujours vérifier la condition WHERE avant UPDATE ou DELETE, sinon toute la table peut être modifiée ou supprimée.', 'Pour s’entraîner, il faut savoir écrire les quatre opérations CRUD : Create, Read, Update, Delete.'], ['INSERT = ajouter.', 'UPDATE = modifier.', 'DELETE = supprimer.', 'CRUD = créer, lire, modifier, supprimer.'], 'pipeline'),
    lesson('2.08', 'Relations et jointures', 'Croiser des données réparties dans plusieurs tables.', ['Comprendre clé étrangère.', 'Utiliser JOIN.', 'Résoudre les relations N-N.'], ['Une clé étrangère relie une table à la clé primaire d’une autre table. Elle garantit que la relation pointe vers une donnée existante.', 'JOIN permet d’afficher des données situées dans plusieurs tables, par exemple étudiants et inscriptions.', 'Une relation plusieurs-à-plusieurs se représente par une table d’association contenant généralement deux clés étrangères.'], ['FOREIGN KEY relie deux tables.', 'JOIN exploite les clés.', 'Table d’association pour les relations N-N.'], 'relations'),
    lesson('2.09', 'Normalisation et intégrité', 'Éviter redondances, incohérences et anomalies.', ['Comprendre redondance.', 'Expliquer 1FN, 2FN, 3FN simplement.', 'Identifier les contraintes d’intégrité.'], ['La normalisation organise les données pour éviter les répétitions inutiles et les anomalies de mise à jour.', '1FN : valeurs atomiques. 2FN : dépendance à toute la clé. 3FN : pas de dépendance entre colonnes non clés.', 'Les contraintes comme NOT NULL, UNIQUE, PRIMARY KEY et FOREIGN KEY protègent la cohérence.'], ['Redondance = même information répétée.', 'Intégrité = données cohérentes.', '3FN : bon objectif de base en examen.'], 'shield'),
    lesson('2.10', 'MySQL, sécurité et transactions', 'Retenir les bases de gestion avancée utiles.', ['Comprendre utilisateurs et privilèges.', 'Définir transaction ACID.', 'Relier sécurité et sauvegarde.'], ['Les documents MySQL abordent les privilèges, utilisateurs, accès et sécurité. Une base doit limiter les droits selon les besoins réels.', 'Une transaction regroupe plusieurs opérations qui doivent réussir ensemble. ACID signifie Atomicité, Cohérence, Isolation, Durabilité.', 'En pratique, une base sérieuse doit être sauvegardée, sécurisée et administrée avec prudence.'], ['Privilège : droit accordé à un utilisateur.', 'Transaction : tout ou rien.', 'Sauvegarde : protection contre panne et erreur humaine.'], 'shield'),
  ],
  teleinfo: [
    lesson('3.01', 'Introduction à la téléinformatique', 'Comprendre la transmission et le traitement des données à distance.', ['Définir téléinformatique.', 'Identifier transmission et traitement distant.', 'Citer Internet, Wi-Fi, 4G/5G et réseaux.'], ['Le document définit la téléinformatique comme un domaine de l’informatique lié à la transmission et au traitement des données à distance.', 'Elle s’est développée avec Internet, les réseaux informatiques, le Wi-Fi et les réseaux mobiles 4G/5G.', 'Elle combine supports physiques, équipements réseau, protocoles et services numériques.'], ['Téléinformatique = informatique + télécommunications.', 'Objectif : échanger des données à distance.', 'Internet est l’application la plus connue.'], 'flow'),
    lesson('3.02', 'Données, signaux et supports', 'Comprendre comment une donnée devient transmissible.', ['Différencier donnée et signal.', 'Comparer analogique et numérique.', 'Identifier support de transmission.'], ['Une donnée doit être représentée par un signal pour traverser un canal. Le signal peut être électrique, lumineux ou radio.', 'Le document rappelle que les données sont transmises sous forme de signaux numériques ou analogiques.', 'Le support peut être un câble, une fibre optique, une ligne téléphonique, l’air ou un canal radio.'], ['Donnée : information à transmettre.', 'Signal : forme physique transportée.', 'Canal : support de transmission.'], 'waves'),
    lesson('3.03', 'Transmission série et parallèle', 'Comparer deux façons d’envoyer les bits.', ['Définir transmission série.', 'Définir transmission parallèle.', 'Comparer distance, fiabilité et vitesse.'], ['En transmission série, les bits passent les uns après les autres sur une seule ligne. Elle est adaptée aux longues distances et plus simple à synchroniser.', 'En transmission parallèle, plusieurs bits passent en même temps sur plusieurs lignes. Elle peut être rapide sur courte distance mais devient complexe et moins fiable loin.', 'Le document insiste sur la différence entre longue distance pour la série et courte distance pour la parallèle.'], ['Série : une ligne, bits successifs.', 'Parallèle : plusieurs lignes, bits simultanés.', 'Longue distance : série plus adaptée.'], 'duplex'),
    lesson('3.04', 'Modes de transmission', 'Retenir simplex, half-duplex, full-duplex et synchronisation.', ['Comparer simplex, half-duplex et full-duplex.', 'Comprendre synchrone et asynchrone.', 'Donner un exemple par mode.'], ['Simplex : un seul sens. Half-duplex : les deux sens existent mais chacun son tour. Full-duplex : émission et réception simultanées.', 'La transmission synchrone partage un rythme commun. La transmission asynchrone indique le début et la fin des données envoyées.', 'Ces notions tombent souvent sous forme de comparaison.'], ['Simplex : diffusion TV.', 'Half-duplex : talkie-walkie.', 'Full-duplex : téléphone.'], 'duplex'),
    lesson('3.05', 'Équipements téléinformatiques', 'Identifier le rôle du modem, routeur, switch et point d’accès.', ['Définir modem.', 'Comprendre routeur et switch.', 'Identifier Wi-Fi, DHCP et NAT.'], ['Le document cite les modems, routeurs, équipements Wi-Fi et paramètres réseau comme SSID, sécurité Wi-Fi, DHCP et NAT.', 'Le modem convertit des signaux pour accéder à une ligne. Le routeur relie des réseaux et donne souvent accès à Internet. Le switch relie des machines dans un réseau local.', 'Le point d’accès Wi-Fi permet aux appareils sans fil de rejoindre le réseau local.'], ['Modem : conversion de signal.', 'Routeur : liaison entre réseaux.', 'Switch : réseau local câblé.'], 'switch'),
    lesson('3.06', 'Protocoles de communication', 'Comprendre pourquoi les machines ont besoin de règles.', ['Définir protocole.', 'Citer TCP/IP, HTTP et FTP.', 'Relier protocole et service.'], ['Un protocole définit les règles suivies par les machines pour communiquer.', 'Le document cite TCP/IP comme fondement d’Internet, HTTP pour le Web et FTP pour le transfert de fichiers.', 'Sans protocole commun, deux équipements peuvent être connectés physiquement sans comprendre leurs messages.'], ['TCP/IP : base de l’Internet.', 'HTTP : consultation Web.', 'FTP : transfert de fichiers.'], 'api'),
    lesson('3.07', 'DSL et fibre optique', 'Comparer deux technologies d’accès.', ['Comprendre le principe DSL.', 'Comprendre le principe fibre optique.', 'Comparer débit, distance et qualité.'], ['Le document présente les technologies DSL et fibre optique comme des solutions d’accès et de transmission.', 'DSL utilise les lignes téléphoniques en cuivre. Ses performances diminuent avec la distance et la qualité de ligne.', 'La fibre transporte la lumière, offre de très hauts débits, une faible atténuation et une meilleure stabilité.'], ['DSL : cuivre, distance limitante.', 'Fibre : lumière, haut débit.', 'Choix selon coût, disponibilité et besoin.'], 'media'),
    lesson('3.08', 'Applications de la téléinformatique', 'Relier les concepts aux usages réels.', ['Citer les usages majeurs.', 'Comprendre ERP, CRM, e-learning et IoT.', 'Relier téléinformatique et transformation numérique.'], ['Le cours cite Internet, réseaux sociaux, ERP, CRM, plateformes d’apprentissage en ligne, webinaires, forums et Internet des objets.', 'La téléinformatique permet de travailler, apprendre, vendre, gérer et surveiller à distance.', 'Elle est donc une base technique de l’économie numérique et des services modernes.'], ['ERP : gestion intégrée d’entreprise.', 'CRM : gestion de la relation client.', 'IoT : objets connectés qui communiquent.'], 'network'),
    lesson('3.09', 'Sécurité des réseaux', 'Protéger les transmissions et les accès.', ['Identifier les menaces courantes.', 'Comprendre chiffrement et authentification.', 'Citer MFA et protection des données.'], ['Le document aborde la sécurité des réseaux en téléinformatique : interceptions, accès non autorisés et protection des communications.', 'Le chiffrement rend les données illisibles sans clé. L’authentification vérifie l’identité. Le MFA ajoute plusieurs preuves d’identité.', 'La sécurité vise confidentialité, intégrité, disponibilité et traçabilité.'], ['Chiffrement : protéger le contenu.', 'MFA : plusieurs facteurs d’authentification.', 'Réseau public = besoin de protection renforcée.'], 'shield'),
    lesson('3.10', 'Gestion des réseaux', 'Comprendre l’administration quotidienne d’un réseau.', ['Définir supervision.', 'Identifier configuration et maintenance.', 'Comprendre disponibilité du service.'], ['La gestion de réseau consiste à configurer, surveiller, maintenir et dépanner les équipements et services.', 'Elle inclut l’adressage, les paramètres Wi-Fi, DHCP, NAT, sécurité, performances et documentation.', 'Un bon administrateur procède par étapes : observer, tester, isoler, corriger, vérifier.'], ['Supervision : surveiller l’état du réseau.', 'Maintenance : prévenir et corriger les pannes.', 'Disponibilité : service accessible quand on en a besoin.'], 'diagnostic'),
  ],
  web: [
    lesson('4.01', 'Projet web dynamique', 'Comprendre le périmètre du cours PHP/MySQL.', ['Définir application web dynamique.', 'Relier PHP, serveur et base de données.', 'Distinguer frontend et backend.'], ['Le plan de cours vise la création d’applications web dynamiques avec PHP, en interaction avec MySQL ou PostgreSQL.', 'Une page dynamique est produite par le serveur selon les données, l’utilisateur ou le contexte.', 'PHP travaille côté serveur, tandis que HTML, CSS et JavaScript sont envoyés au navigateur.'], ['PHP : script côté serveur.', 'MySQL/PostgreSQL : stockage relationnel.', 'Dynamique : contenu généré ou personnalisé.'], 'clientserver'),
    lesson('4.02', 'Environnement et structure', 'Savoir organiser un petit projet PHP.', ['Comprendre serveur local.', 'Identifier fichiers et dossiers.', 'Créer un premier script.'], ['Les documents d’initiation PHP présentent WAMP, EasyPHP, MAMP, Apache, PHP et MySQL comme environnement de test.', 'Un fichier PHP porte l’extension .php. Le serveur lit le code PHP puis renvoie du HTML au navigateur.', 'Une structure simple sépare pages, includes, assets, configuration et traitements.'], ['Extension PHP : .php.', 'Le navigateur ne voit pas le code PHP.', 'Indenter et commenter facilite le débogage.'], 'layers'),
    lesson('4.03', 'Syntaxe PHP', 'Retenir les bases d’écriture du langage.', ['Utiliser les balises PHP.', 'Comprendre variables et point-virgule.', 'Afficher avec echo.'], ['Le code PHP s’écrit entre balises <?php et ?>. Les instructions se terminent par un point-virgule.', 'Les variables commencent par $. PHP est sensible à la casse : $nom et $Nom sont différents.', 'echo sert à afficher du texte ou une valeur dans la page générée.'], ['Variable PHP : commence par $.', 'Instruction : finit par ;.', 'Parse error : souvent syntaxe oubliée avant la ligne indiquée.'], 'query'),
    lesson('4.04', 'Variables, types et concaténation', 'Manipuler les valeurs de base.', ['Créer une variable.', 'Différencier chaîne, nombre et booléen.', 'Concaténer des textes.'], ['Une variable est une boîte qui contient une valeur : texte, nombre, tableau ou résultat de calcul.', 'Les chaînes sont entourées de guillemets simples ou doubles. Les guillemets doubles peuvent interpréter les variables.', 'La concaténation permet d’assembler plusieurs morceaux de texte, souvent avec le point en PHP.'], ['Toujours initialiser les variables.', 'Nom valide : lettres, chiffres, underscore, pas de chiffre au début.', 'Concaténer = assembler.'], 'pipeline'),
    lesson('4.05', 'Conditions et boucles', 'Contrôler l’exécution d’un script.', ['Utiliser if, elseif, else.', 'Comprendre switch.', 'Utiliser while, for et foreach.'], ['Les structures de contrôle permettent au programme de prendre des décisions et de répéter des actions.', 'if teste une condition. switch compare une valeur à plusieurs cas. while et for répètent selon une condition ou un compteur.', 'foreach est très utile pour parcourir les tableaux.'], ['Condition : choisir.', 'Boucle : répéter.', 'foreach : parcourir un tableau.'], 'loop'),
    lesson('4.06', 'Tableaux et fonctions', 'Organiser et réutiliser le code.', ['Créer tableaux indexés et associatifs.', 'Parcourir un tableau.', 'Créer une fonction simple.'], ['Les documents PHP insistent sur les tableaux : index numériques, clés associatives, boucles et fonctions de tri.', 'Un tableau associatif associe une clé à une valeur, par exemple nom => Ali.', 'Une fonction regroupe un traitement réutilisable et évite de répéter le même code.'], ['Tableau indexé : clés 0, 1, 2.', 'Tableau associatif : clés nommées.', 'Fonction : bloc réutilisable.'], 'grid'),
    lesson('4.07', 'Formulaires, sessions et cookies', 'Gérer les interactions utilisateur.', ['Récupérer des données de formulaire.', 'Comprendre GET et POST.', 'Distinguer session et cookie.'], ['Une application web dynamique reçoit souvent des données via formulaire : inscription, connexion, recherche ou commentaire.', 'GET transmet dans l’URL et convient aux recherches simples. POST transmet dans le corps de la requête et convient aux données de formulaire.', 'Une session stocke des informations côté serveur pour un utilisateur connecté. Un cookie est stocké côté navigateur.'], ['GET : visible dans l’URL.', 'POST : données envoyées au serveur.', 'Session : état utilisateur côté serveur.'], 'api'),
    lesson('4.08', 'SQL et MySQL avec PHP', 'Relier une page PHP à une base relationnelle.', ['Comprendre SQL dans une application.', 'Exécuter SELECT, INSERT, UPDATE, DELETE.', 'Afficher les résultats.'], ['Les documents PHP/MySQL introduisent SQL, types de champs, insertion, récupération, mise à jour et suppression.', 'L’application PHP envoie des requêtes au SGBD, récupère les résultats puis génère une page HTML.', 'Cette liaison permet de créer des applications comme gestion d’étudiants, articles, utilisateurs ou produits.'], ['CRUD : Create, Read, Update, Delete.', 'PHP prépare la requête.', 'MySQL stocke et renvoie les données.'], 'database'),
    lesson('4.09', 'PDO et POO en PHP', 'Écrire un accès base plus propre et sécurisé.', ['Comprendre PDO.', 'Utiliser requêtes préparées.', 'Identifier classe, attribut et méthode.'], ['Le plan de cours et le document POO/PDO insistent sur PDO pour manipuler MySQL ou PostgreSQL.', 'Les requêtes préparées séparent la requête des valeurs et protègent contre les injections SQL.', 'La POO organise le code en classes représentant des objets comme Etudiant, Article ou Utilisateur.'], ['PDO : interface d’accès base.', 'prepare/execute : requête préparée.', 'Classe : modèle d’objet.'], 'relations'),
    lesson('4.10', 'Sécurité web', 'Éviter les erreurs dangereuses en PHP.', ['Identifier XSS, CSRF et injection SQL.', 'Échapper les sorties HTML.', 'Valider les entrées.'], ['Le plan de cours cite htmlspecialchars, échappement des données, protection CSRF, XSS et injections SQL.', 'Une injection SQL arrive quand une entrée utilisateur modifie la requête. XSS arrive quand du code HTML/JS malveillant est affiché.', 'La règle : ne jamais faire confiance aux données utilisateur, valider à l’entrée et échapper à la sortie.'], ['htmlspecialchars contre XSS.', 'Requêtes préparées contre injection SQL.', 'CSRF : vérifier qu’une action vient bien de l’utilisateur.'], 'shield'),
  ],
  reseaux: [
    lesson('5.01', 'VLAN', 'Comprendre la segmentation logique d’un réseau local.', ['Définir VLAN.', 'Comprendre isolation logique.', 'Identifier avantages des VLAN.'], ['Le document de réseaux avancés commence par les VLAN. Un VLAN découpe un switch physique en plusieurs réseaux logiques.', 'Deux machines dans des VLAN différents ne communiquent pas directement, même si elles sont sur le même switch.', 'Les VLAN améliorent organisation, sécurité, réduction du broadcast et administration.'], ['VLAN = réseau local virtuel.', 'Un VLAN sépare les domaines de broadcast.', 'Communication inter-VLAN nécessite routage.'], 'switch'),
    lesson('5.02', 'Adressage et sous-réseaux', 'Préparer les bases nécessaires au routage.', ['Lire adresse IP et masque.', 'Comprendre réseau et hôte.', 'Identifier passerelle.'], ['Un réseau IP est défini par une adresse et un masque. Le masque indique quelle partie identifie le réseau et quelle partie identifie l’hôte.', 'La passerelle est l’adresse du routeur permettant de sortir du réseau local.', 'Même en routage avancé, une erreur de masque ou de passerelle bloque souvent la communication.'], ['IP : identifie une interface.', 'Masque : sépare réseau et hôte.', 'Passerelle : route vers les autres réseaux.'], 'subnet'),
    lesson('5.03', 'Définition du routage', 'Comprendre le mécanisme d’acheminement des paquets.', ['Définir routage.', 'Comprendre paquet et réseau de destination.', 'Expliquer pourquoi Internet a besoin du routage.'], ['Le cours définit le routage comme le mécanisme qui permet d’acheminer les paquets de données entre réseaux différents.', 'Sans routage, les machines d’un même réseau peuvent communiquer, mais pas atteindre d’autres réseaux ou Internet.', 'Le routeur examine l’adresse IP de destination et choisit la meilleure sortie.'], ['Routage = acheminer entre réseaux.', 'Routeur = équipement couche réseau.', 'Internet = interconnexion de réseaux routés.'], 'routes'),
    lesson('5.04', 'Table de routage', 'Lire la décision prise par un routeur.', ['Identifier destination, masque, passerelle et interface.', 'Comprendre next hop.', 'Comprendre route par défaut.'], ['Chaque routeur possède une table de routage contenant les destinations connues, les masques, les prochaines passerelles et les interfaces de sortie.', 'Si une destination correspond à plusieurs routes, la route la plus précise est choisie.', 'La route par défaut 0.0.0.0/0 est utilisée quand aucune route spécifique ne correspond.'], ['Destination : réseau à atteindre.', 'Next hop : prochain routeur.', 'Route par défaut : sortie générale, souvent Internet.'], 'routes'),
    lesson('5.05', 'Routage statique', 'Configurer manuellement des routes simples.', ['Définir routage statique.', 'Citer avantages et limites.', 'Comprendre route statique avancée.'], ['Le routage statique est configuré manuellement par l’administrateur. Il est simple, prévisible et adapté aux petits réseaux.', 'Ses limites apparaissent quand le réseau grandit ou change souvent : chaque modification doit être faite à la main.', 'Le document mentionne le routage statique avancé et son usage pour des chemins précis ou une route vers Internet.'], ['Statique : configuré à la main.', 'Avantage : contrôle et simplicité.', 'Limite : peu scalable.'], 'pipeline'),
    lesson('5.06', 'Routage dynamique', 'Comprendre l’échange automatique des routes.', ['Définir routage dynamique.', 'Comprendre mise à jour des tables.', 'Citer RIP, OSPF et BGP.'], ['Le document définit le routage dynamique comme un mécanisme où les routeurs échangent automatiquement des informations pour déterminer les meilleurs chemins.', 'Contrairement au statique, il s’adapte aux changements de topologie et aux pannes selon le protocole utilisé.', 'Les protocoles importants sont RIP, OSPF et BGP selon la taille et le contexte du réseau.'], ['Dynamique : les routeurs apprennent les routes.', 'Objectif : adaptation automatique.', 'Protocole : règles d’échange des routes.'], 'network'),
    lesson('5.07', 'Métriques de routage', 'Savoir comment un protocole choisit le meilleur chemin.', ['Définir métrique.', 'Comparer nombre de sauts, coût et bande passante.', 'Comprendre convergence.'], ['Une métrique est une valeur utilisée pour comparer plusieurs chemins possibles.', 'RIP utilise principalement le nombre de sauts. OSPF calcule un coût, souvent lié à la bande passante.', 'La convergence est le moment où tous les routeurs ont une vision cohérente du réseau après un changement.'], ['Métrique : critère de choix.', 'RIP : nombre de sauts.', 'Convergence : tables stabilisées.'], 'speed'),
    lesson('5.08', 'RIP', 'Retenir le principe du routage dynamique simple.', ['Définir RIP.', 'Comprendre distance vector.', 'Identifier ses limites.'], ['RIP est un protocole de routage dynamique simple basé sur le nombre de sauts.', 'Les routeurs échangent périodiquement leurs tables avec leurs voisins. Le meilleur chemin est celui qui a le moins de sauts.', 'RIP est facile à comprendre mais limité pour les grands réseaux, car le nombre maximal de sauts est faible et la convergence peut être lente.'], ['RIP = Routing Information Protocol.', 'Métrique : hop count.', 'Adapté aux petits réseaux.'], 'routes'),
    lesson('5.09', 'OSPF', 'Comprendre le routage dynamique plus avancé.', ['Définir OSPF.', 'Comprendre link-state.', 'Identifier l’intérêt des zones.'], ['OSPF est un protocole de routage dynamique plus avancé que RIP. Il repose sur l’état des liens et construit une carte logique du réseau.', 'Il calcule les meilleurs chemins avec un coût, généralement basé sur la bande passante.', 'OSPF convient mieux aux réseaux moyens et grands, avec une organisation possible en zones.'], ['OSPF : protocole à état de liens.', 'Coût : métrique principale.', 'Zones : meilleure organisation du réseau.'], 'network'),
    lesson('5.10', 'NAT et routage inter-VLAN', 'Relier réseaux privés, Internet et VLAN.', ['Définir NAT.', 'Comprendre accès Internet depuis un réseau privé.', 'Expliquer routage inter-VLAN.'], ['Le document consacre un chapitre au NAT. NAT traduit une adresse privée interne en adresse publique pour accéder à Internet.', 'Le PC interne envoie une requête, le routeur remplace l’adresse source privée par son adresse publique, puis Internet répond à cette adresse publique.', 'Le routage inter-VLAN permet à des VLAN différents de communiquer via un routeur ou un switch de niveau 3.'], ['NAT : traduction d’adresses.', 'Inter-VLAN : communication entre VLAN.', 'Internet utilise généralement des IP publiques.'], 'services'),
  ],
  'c-linux': [
    lesson('6.01', 'Programmation réseau sous Linux', 'Situer le rôle des sockets en C.', ['Définir programmation réseau.', 'Comprendre client, serveur, protocole.', 'Identifier les appels système.'], ['La programmation réseau consiste à écrire des programmes capables d’échanger des données via le réseau.', 'En C sous Linux, on utilise les sockets comme interface entre le programme et la pile réseau du système.', 'Les appels système importants sont socket, bind, listen, accept, connect, send, recv et close.'], ['Socket = point de communication.', 'Client initie souvent la communication.', 'Serveur attend les clients.'], 'socket'),
    lesson('6.02', 'Adresses IP, ports et structures', 'Comprendre les informations nécessaires à une socket.', ['Distinguer IP et port.', 'Comprendre sockaddr_in.', 'Relier port et service.'], ['Une adresse IP identifie une machine ou interface. Un port identifie une application sur cette machine.', 'En C, les informations réseau sont stockées dans des structures comme sockaddr_in pour IPv4.', 'Les conversions htons, htonl, ntohs et ntohl gèrent l’ordre des octets réseau.'], ['IP : machine.', 'Port : application.', 'Ordre réseau : big endian.'], 'subnet'),
    lesson('6.03', 'Création d’une socket', 'Maîtriser socket() et ses paramètres.', ['Comprendre domaine AF_INET.', 'Comparer SOCK_STREAM et SOCK_DGRAM.', 'Vérifier les erreurs.'], ['socket() crée un descripteur utilisé comme un fichier spécial pour communiquer.', 'AF_INET désigne IPv4. SOCK_STREAM correspond à TCP. SOCK_DGRAM correspond à UDP.', 'Comme tout appel système, socket() peut échouer : il faut tester la valeur de retour et utiliser perror.'], ['AF_INET : IPv4.', 'SOCK_STREAM : TCP.', 'SOCK_DGRAM : UDP.'], 'layers'),
    lesson('6.04', 'Serveur TCP', 'Retenir l’ordre classique côté serveur.', ['Utiliser bind().', 'Mettre en écoute avec listen().', 'Accepter avec accept().'], ['Un serveur TCP suit généralement : socket(), bind(), listen(), accept(), recv()/send(), close().', 'bind() associe la socket à une adresse locale et un port. listen() place la socket en attente de connexions.', 'accept() retourne une nouvelle socket dédiée au client accepté, tandis que la socket principale continue d’écouter.'], ['bind : attacher au port.', 'listen : attendre.', 'accept : accepter un client.'], 'pipeline'),
    lesson('6.05', 'Client TCP', 'Retenir l’ordre classique côté client.', ['Créer une socket.', 'Se connecter avec connect().', 'Échanger avec send et recv.'], ['Un client TCP suit généralement : socket(), connect(), send()/recv(), close().', 'connect() demande l’établissement d’une connexion vers l’adresse IP et le port du serveur.', 'Une fois connecté, TCP fournit un flux d’octets fiable, ordonné et contrôlé.'], ['connect : joindre le serveur.', 'send : envoyer.', 'recv : recevoir.'], 'clientserver'),
    lesson('6.06', 'Échanges TCP', 'Comprendre la nature flux de TCP.', ['Comprendre flux d’octets.', 'Gérer lectures partielles.', 'Traiter fermeture propre.'], ['TCP ne transporte pas des messages séparés mais un flux d’octets. Un recv peut recevoir moins de données que prévu.', 'Il faut donc prévoir une logique de boucle si l’on attend une taille précise ou un délimiteur.', 'Quand recv() retourne 0, cela signifie que l’autre côté a fermé proprement la connexion.'], ['TCP = flux fiable.', 'recv partiel possible.', 'recv() == 0 : fermeture propre.'], 'packets'),
    lesson('6.07', 'UDP', 'Programmer une communication sans connexion.', ['Comparer UDP et TCP.', 'Utiliser sendto et recvfrom.', 'Identifier usages d’UDP.'], ['UDP n’établit pas de connexion. Chaque datagramme contient l’adresse de destination ou d’origine.', 'Les fonctions sendto() et recvfrom() sont souvent utilisées pour envoyer et recevoir des datagrammes.', 'UDP est utile pour DNS, streaming, jeux, VoIP ou protocoles où la rapidité compte plus que la garantie de livraison.'], ['UDP : datagrammes.', 'Pas de garantie de livraison.', 'Plus simple et plus léger que TCP.'], 'packets'),
    lesson('6.08', 'Serveur multi-clients', 'Gérer plusieurs connexions simultanées.', ['Comprendre fork().', 'Comparer threads et processus.', 'Identifier select/poll.'], ['Un serveur simple peut rester bloqué avec un seul client. Pour gérer plusieurs clients, on peut créer un processus par client avec fork, utiliser des threads ou multiplexeur les entrées-sorties.', 'fork isole bien les clients mais consomme plus. Les threads partagent la mémoire. select/poll surveillent plusieurs descripteurs.', 'En examen, il faut expliquer le compromis : simplicité, performance, isolation.'], ['fork : processus par client.', 'Thread : exécution légère avec mémoire partagée.', 'select/poll : surveiller plusieurs sockets.'], 'multiplex'),
    lesson('6.09', 'Robustesse et erreurs', 'Écrire du code réseau défensif.', ['Vérifier les retours système.', 'Utiliser errno et perror.', 'Fermer les descripteurs.'], ['Les appels réseau échouent pour de nombreuses raisons : port occupé, réseau absent, permission refusée, client coupé ou adresse invalide.', 'Il faut tester chaque retour, afficher une erreur utile et libérer les ressources avec close().', 'Un serveur robuste ne s’arrête pas brutalement pour une erreur normale d’un client.'], ['Toujours tester < 0.', 'perror explique l’erreur système.', 'close évite les fuites de descripteurs.'], 'shield'),
    lesson('6.10', 'Mini-protocole applicatif', 'Structurer les messages échangés par les programmes.', ['Comprendre protocole applicatif.', 'Définir format de message.', 'Éviter les ambiguïtés côté réception.'], ['Au-dessus de TCP ou UDP, le développeur définit souvent son propre protocole applicatif : commandes, séparateurs, tailles, codes de réponse.', 'Exemple simple : le client envoie "HELLO", "GET nom" ou "QUIT", et le serveur répond par un code et un message.', 'Sans format clair, le serveur ne sait pas où commence et où finit une requête.'], ['Protocole applicatif : règles propres à l’application.', 'Délimiteur ou taille : fin de message.', 'Codes de réponse : faciliter le diagnostic.'], 'api'),
  ],
  telecom: [
    lesson('7.01', 'Introduction aux télécommunications', 'Comprendre la transmission d’informations à distance.', ['Définir télécommunications.', 'Identifier voix, données, images et vidéo.', 'Comprendre émetteur, canal et récepteur.'], ['Le cours définit les télécommunications comme l’ensemble des techniques permettant la transmission, le traitement et la distribution d’informations.', 'Les informations peuvent être voix, données numériques, images, vidéo ou mesures de capteurs.', 'Une chaîne de communication contient une source, un émetteur, un canal de transmission, un récepteur et une destination.'], ['Télécommunication = communiquer à distance.', 'Canal : câble, fibre ou onde radio.', 'Information : analogique ou numérique.'], 'flow'),
    lesson('7.02', 'Signaux analogiques et numériques', 'Distinguer les deux grandes formes de signal.', ['Définir signal analogique.', 'Définir signal numérique.', 'Relier signal et information.'], ['Un signal analogique varie de manière continue, comme la voix captée par un microphone.', 'Un signal numérique représente l’information par des valeurs discrètes, généralement des 0 et des 1.', 'Les systèmes modernes convertissent souvent l’analogique en numérique pour stocker, traiter, chiffrer et transmettre plus facilement.'], ['Analogique : variation continue.', 'Numérique : valeurs discrètes.', 'Conversion : ADC/DAC.'], 'waves'),
    lesson('7.03', 'Transmission et bruit', 'Comprendre les perturbations du canal.', ['Définir bruit.', 'Comprendre atténuation et interférences.', 'Relier bruit et erreurs.'], ['Le cours décrit le bruit comme un signal indésirable perturbant la transmission.', 'Le canal peut ajouter atténuation, distorsion, interférences et pertes. Plus le signal est faible ou perturbé, plus les erreurs augmentent.', 'Les systèmes utilisent filtrage, codage, correction d’erreurs, modulation adaptée et retransmission pour limiter les effets.'], ['Bruit : perturbation.', 'Atténuation : perte de puissance.', 'SNR élevé : meilleure qualité.'], 'waves'),
    lesson('7.04', 'Bande passante et débit', 'Relier capacité du canal et vitesse de transmission.', ['Définir bande passante.', 'Différencier bit/s et baud.', 'Comprendre effet du bruit.'], ['La bande passante est la plage de fréquences utilisable par un canal.', 'Le débit binaire mesure les bits transmis par seconde. Le baud mesure les symboles par seconde.', 'Un symbole peut représenter plusieurs bits si la modulation est avancée, mais le bruit limite ce qu’on peut distinguer.'], ['Bande passante : largeur fréquentielle.', 'Débit : bits par seconde.', 'Baud : symboles par seconde.'], 'speed'),
    lesson('7.05', 'Supports de transmission', 'Comparer cuivre, fibre et radio.', ['Identifier les supports guidés.', 'Identifier les supports non guidés.', 'Comparer avantages et limites.'], ['Les supports guidés comprennent cuivre, paire torsadée, câble coaxial et fibre optique. Les supports non guidés utilisent les ondes radio, micro-ondes ou satellite.', 'Le cuivre est économique mais limité. La fibre offre très haut débit et faible atténuation. La radio permet mobilité mais subit interférences et partage du spectre.', 'Le choix dépend du débit, de la distance, du coût, de la mobilité et de l’environnement.'], ['Cuivre : simple et répandu.', 'Fibre : très haut débit.', 'Radio : mobilité.'], 'media'),
    lesson('7.06', 'Propagation des ondes', 'Comprendre comment une onde se déplace.', ['Définir propagation.', 'Citer réflexion, diffraction, absorption.', 'Relier fréquence et portée.'], ['La propagation décrit le déplacement des ondes électromagnétiques dans l’espace ou un milieu.', 'Les obstacles peuvent provoquer réflexion, réfraction, diffraction, absorption et trajets multiples.', 'En général, les hautes fréquences offrent plus de débit potentiel mais une portée et une pénétration plus limitées.'], ['Propagation : déplacement de l’onde.', 'Obstacle : modification du signal.', 'Fréquence élevée : souvent portée plus courte.'], 'cellular'),
    lesson('7.07', 'Modulation analogique', 'Comprendre AM, FM et PM.', ['Définir porteuse.', 'Expliquer AM, FM et PM.', 'Comprendre pourquoi moduler.'], ['La modulation modifie une onde porteuse pour transporter l’information sur de longues distances.', 'AM modifie l’amplitude. FM modifie la fréquence. PM modifie la phase.', 'On module pour adapter le signal au canal, partager les fréquences et permettre une meilleure propagation.'], ['AM : amplitude.', 'FM : fréquence.', 'PM : phase.'], 'modulation'),
    lesson('7.08', 'Modulation numérique et codage', 'Comprendre QPSK, QAM et encodage.', ['Définir modulation numérique.', 'Citer QPSK et QAM.', 'Relier codage et fiabilité.'], ['En modulation numérique, les bits sont représentés par des symboles. QPSK utilise des états de phase. QAM combine amplitude et phase.', 'Plus une modulation transporte de bits par symbole, plus le débit augmente, mais plus elle devient sensible au bruit.', 'Le codage et l’encodage ajoutent une structure qui aide à détecter ou corriger les erreurs.'], ['QPSK : modulation de phase.', 'QAM : amplitude + phase.', 'Codage : améliorer fiabilité et représentation.'], 'modulation'),
    lesson('7.09', 'Réseaux de télécommunication', 'Relier commutation, Internet et réseaux mobiles.', ['Comparer commutation de circuits et paquets.', 'Situer 2G, 3G, 4G, 5G.', 'Comprendre Internet mobile.'], ['Le cours cite la commutation de circuits et la commutation de paquets. Le téléphone traditionnel réservait un circuit, alors qu’Internet découpe les données en paquets.', 'Les générations mobiles évoluent : 2G voix/SMS, 3G Internet mobile, 4G haut débit IP, 5G faible latence et nouveaux usages.', 'Les réseaux modernes transportent de plus en plus les services sous forme de paquets IP.'], ['Circuit : chemin réservé.', 'Paquet : découpage et routage.', '5G : débit, latence, densité.'], 'packets'),
    lesson('7.10', 'Satellites, micro-ondes et applications', 'Connaître les systèmes longue distance.', ['Définir transmission satellite.', 'Comprendre liaison point-à-point micro-ondes.', 'Citer TV, GPS et Internet global.'], ['Le cours aborde satellites et micro-ondes. Les satellites couvrent de grandes zones et servent à TV, GPS, Internet global et liaisons spécialisées.', 'Les micro-ondes permettent des liaisons point-à-point, souvent entre antennes en visibilité directe.', 'Ces technologies sont utiles quand la fibre ou le câble ne sont pas disponibles ou pour couvrir de très grandes distances.'], ['Satellite : grande couverture.', 'Micro-ondes : point-à-point.', 'Applications : TV, GPS, Internet, secours.'], 'cellular'),
  ],
};

programs.forEach((program) => {
  if (documentedLessons[program.id]) {
    program.lessons = documentedLessons[program.id];
  }
});

programs.find((program) => program.id === 'virtualisation').lessons = [
  richLesson('8.01', 'Principe de virtualisation', 'Comprendre comment une ressource physique devient plusieurs ressources logiques.', ['Définir virtualisation, hôte, invité et ressource virtuelle.', 'Comprendre abstraction, isolation et mutualisation.', 'Identifier les bénéfices et limites.'], ['La virtualisation consiste à présenter à un système une ressource logique qui repose en réalité sur une ressource physique partagée.', 'Un serveur physique peut héberger plusieurs machines virtuelles. Chaque VM croit posséder son propre CPU, sa RAM, son disque et sa carte réseau.', 'Le point important en examen : la virtualisation n’est pas magique. Les ressources restent limitées, donc il faut surveiller CPU, mémoire, stockage et réseau.'], ['Abstraction : masquer le matériel réel.', 'Isolation : séparer les environnements.', 'Mutualisation : partager efficacement le matériel.'], 'layers', '<p>Un serveur physique avec 32 Go de RAM peut héberger 4 VM de 6 Go, mais il faut garder de la mémoire pour l’hyperviseur et éviter la saturation.</p>', topology('Serveur physique\nCPU/RAM/Disques/NIC\n  ├─ Hyperviseur\n  │   ├─ VM1 : Linux + Apache\n  │   ├─ VM2 : Windows Server + AD\n  │   └─ VM3 : Debian + MySQL')),
  richLesson('8.02', 'Hyperviseurs type 1 et type 2', 'Comparer les deux familles d’hyperviseurs.', ['Définir hyperviseur.', 'Comparer bare-metal et hébergé.', 'Choisir selon le contexte.'], ['L’hyperviseur est la couche qui crée et contrôle les machines virtuelles.', 'Le type 1 s’installe directement sur le matériel : il est performant et adapté aux serveurs de production. Le type 2 s’installe comme une application sur un OS hôte : il est pratique pour les tests.', 'Exemples : VMware ESXi, Hyper-V Server et Proxmox pour le type 1 ; VirtualBox et VMware Workstation pour le type 2.'], ['Type 1 : production, performance, serveur.', 'Type 2 : apprentissage, test, poste personnel.', 'L’hyperviseur répartit CPU, RAM, stockage et réseau.'], 'vm', '<p>Pour un laboratoire étudiant, VirtualBox suffit. Pour héberger les services d’une entreprise, un hyperviseur type 1 comme Proxmox ou ESXi est plus adapté.</p>', techTable(['Critère', 'Type 1', 'Type 2'], [['Installation', 'Directement sur le matériel', 'Sur Windows/Linux/macOS'], ['Usage', 'Production, datacenter', 'Test, apprentissage'], ['Performance', 'Meilleure', 'Dépend de l’OS hôte']])) ,
  richLesson('8.03', 'Machine virtuelle', 'Comprendre ce qui compose une VM.', ['Identifier vCPU, vRAM, disque virtuel et carte réseau virtuelle.', 'Comprendre image ISO et système invité.', 'Distinguer allocation fixe et dynamique.'], ['Une VM est un ordinateur logiciel. Elle possède des composants virtuels : processeurs, mémoire, disque, carte réseau, BIOS/UEFI.', 'Le système installé dans la VM est appelé système invité. Le système ou serveur qui héberge est appelé hôte.', 'Le disque virtuel est souvent un fichier qui grandit dynamiquement ou occupe directement une taille fixe.'], ['vCPU : processeur logique attribué.', 'vRAM : mémoire allouée à la VM.', 'Disque virtuel : fichier représentant un disque.'], 'vm', '<p>Pour installer Debian en VM : créer une VM, attribuer 2 vCPU, 2 Go RAM, disque 25 Go, monter l’ISO Debian, démarrer puis installer.</p>', topology('VM Debian\n  ├─ 2 vCPU\n  ├─ 2048 Mo RAM\n  ├─ disque.vdi 25 Go\n  ├─ carte réseau NAT/Bridge\n  └─ ISO installation Debian')),
  richLesson('8.04', 'Réseau virtuel', 'Savoir connecter une VM au réseau.', ['Comparer NAT, bridge et host-only.', 'Comprendre switch virtuel.', 'Choisir le bon mode réseau.'], ['Le réseau virtuel relie les VM entre elles, à l’hôte ou au réseau physique.', 'En NAT, la VM sort vers Internet via l’hôte mais n’est pas directement visible sur le LAN. En bridge, elle apparaît comme une machine du réseau local. En host-only, elle communique seulement avec l’hôte et les VM du même réseau privé.', 'Un switch virtuel joue le rôle d’un switch logiciel reliant cartes réseau virtuelles et interfaces physiques.'], ['NAT : simple pour sortir sur Internet.', 'Bridge : VM visible sur le LAN.', 'Host-only : labo isolé.'], 'switch', '<p>Pour tester un serveur web depuis un autre PC du réseau, utilise Bridge. Pour naviguer simplement depuis la VM, NAT suffit.</p>', techTable(['Mode', 'Accès Internet', 'Visible depuis LAN', 'Usage'], [['NAT', 'Oui', 'Non directement', 'Navigation, mises à jour'], ['Bridge', 'Oui', 'Oui', 'Serveur accessible'], ['Host-only', 'Non par défaut', 'Non', 'Laboratoire isolé']])) ,
  richLesson('8.05', 'Snapshots et clones', 'Comprendre retour arrière et duplication.', ['Définir snapshot.', 'Différencier clone lié et clone complet.', 'Identifier les risques.'], ['Un snapshot capture l’état d’une VM à un instant : disque, mémoire et configuration selon l’outil.', 'Il sert avant une mise à jour risquée ou un TP. Si l’expérience échoue, on revient à l’état précédent.', 'Un snapshot n’est pas une sauvegarde longue durée. Trop de snapshots ralentissent et compliquent le stockage.'], ['Snapshot : point de retour.', 'Clone complet : copie indépendante.', 'Clone lié : dépend du disque parent.'], 'loop', '<p>Avant d’installer un service DHCP dans une VM, créer un snapshot “avant-dhcp”. Si la configuration casse le réseau, revenir au snapshot.</p>', topology('VM état initial\n  ├─ Snapshot S1 : avant mise à jour\n  ├─ Snapshot S2 : avant installation service\n  └─ Retour possible vers S1 ou S2')),
  richLesson('8.06', 'Conteneurs', 'Différencier conteneur et VM.', ['Définir conteneur.', 'Comprendre image, registre et Dockerfile.', 'Comparer avec une VM.'], ['Un conteneur isole une application et ses dépendances en partageant le noyau du système hôte.', 'Il est plus léger qu’une VM car il ne démarre pas un système d’exploitation complet. Il démarre vite et se déploie facilement.', 'Docker utilise des images. Une image est construite depuis un Dockerfile et peut être stockée dans un registre.'], ['VM : OS complet virtualisé.', 'Conteneur : processus isolé.', 'Image : modèle immuable du conteneur.'], 'containers', codeBlock('docker run -d --name web -p 8080:80 nginx\n# Le site Nginx du conteneur devient accessible sur http://localhost:8080'), techTable(['Point', 'VM', 'Conteneur'], [['Isolation', 'Forte, OS complet', 'Processus isolé'], ['Démarrage', 'Plus lent', 'Très rapide'], ['Poids', 'Go', 'Mo à centaines de Mo']])) ,
  richLesson('8.07', 'Stockage virtuel', 'Comprendre disques, volumes et sauvegardes.', ['Identifier disque virtuel et datastore.', 'Comprendre thin et thick provisioning.', 'Relier stockage et performance.'], ['Le stockage d’une VM repose sur un disque virtuel placé dans un datastore ou un dossier de l’hôte.', 'Le thin provisioning réserve peu d’espace au départ et grandit à l’usage. Le thick provisioning réserve immédiatement toute la taille.', 'La performance dépend du type de disque, du contrôleur, des IOPS, de la latence et de la concurrence entre VM.'], ['Thin : flexible mais à surveiller.', 'Thick : espace réservé, prévisible.', 'Sauvegarde : copier les données hors de l’hôte.'], 'database', '<p>Si 5 VM ont chacune un disque thin de 100 Go sur un SSD de 300 Go, elles peuvent démarrer, mais il y aura panne si les disques grandissent tous au maximum.</p>', techTable(['Provisioning', 'Avantage', 'Risque'], [['Thin', 'Économise espace au départ', 'Surallocation dangereuse'], ['Thick', 'Performance et capacité prévisibles', 'Consomme tout l’espace immédiatement']])) ,
  richLesson('8.08', 'Cloud et modèles de service', 'Relier virtualisation et cloud computing.', ['Définir IaaS, PaaS, SaaS.', 'Comprendre élasticité et facturation à l’usage.', 'Relier datacenter et virtualisation.'], ['Le cloud fournit des ressources informatiques à la demande via le réseau.', 'IaaS fournit VM, réseau et stockage. PaaS fournit une plateforme de déploiement. SaaS fournit une application prête.', 'La virtualisation permet au fournisseur de mutualiser les serveurs physiques et d’automatiser la création de ressources.'], ['IaaS : tu administres l’OS.', 'PaaS : tu déploies le code.', 'SaaS : tu utilises l’application.'], 'cloud', '<p>Une VM Ubuntu chez AWS ou Azure est IaaS. Un hébergement Heroku-like est PaaS. Gmail ou Microsoft 365 sont SaaS.</p>', techTable(['Modèle', 'Tu gères', 'Le fournisseur gère'], [['IaaS', 'OS, applications, données', 'Matériel, virtualisation'], ['PaaS', 'Code et données', 'OS, runtime, plateforme'], ['SaaS', 'Utilisation et données', 'Toute l’application']])) ,
  richLesson('8.09', 'Haute disponibilité et migration', 'Comprendre continuité de service.', ['Définir HA.', 'Comprendre migration à chaud.', 'Identifier PRA/PCA.'], ['La haute disponibilité vise à garder un service accessible même si un serveur tombe.', 'Dans un cluster, une VM peut être redémarrée sur un autre hôte. Avec la migration à chaud, elle peut être déplacée sans arrêt visible si le stockage et le réseau le permettent.', 'PCA signifie plan de continuité d’activité. PRA signifie plan de reprise d’activité après incident.'], ['HA : réduire interruption.', 'Migration à chaud : déplacer une VM active.', 'PRA/PCA : organisation contre les pannes graves.'], 'network', '<p>Si l’hôte A tombe, le cluster redémarre la VM critique sur l’hôte B. Le service peut avoir une courte coupure mais reste récupérable.</p>', topology('Cluster HA\n  ├─ Hôte A : VM Web, VM DNS\n  ├─ Hôte B : capacité disponible\n  └─ Stockage partagé : disques des VM\nPanne A → redémarrage VM sur B')),
  richLesson('8.10', 'Sécurité en virtualisation', 'Identifier les risques propres aux VM et conteneurs.', ['Protéger hyperviseur et console admin.', 'Sécuriser images et réseaux virtuels.', 'Prévoir sauvegarde et restauration.'], ['La virtualisation ajoute une couche critique : si l’hyperviseur est compromis, plusieurs VM peuvent être touchées.', 'Les risques fréquents sont images vulnérables, mots de passe faibles, console exposée, réseaux mal segmentés, snapshots oubliés et sauvegardes non testées.', 'La règle d’examen : isoler, mettre à jour, limiter les droits, sauvegarder et tester la restauration.'], ['Ne jamais exposer la console admin inutilement.', 'Images fiables et mises à jour.', 'Sauvegarde utile seulement si la restauration est testée.'], 'shield', '<p>Checklist minimale : MFA sur l’administration, réseau management séparé, sauvegarde hors hôte, mises à jour hyperviseur, droits limités par rôle.</p>', techTable(['Risque', 'Mesure'], [['Compromission console', 'MFA, VPN, réseau admin isolé'], ['Image vulnérable', 'Images officielles, mises à jour'], ['Perte VM', 'Sauvegarde + test restauration']])) ,
];

applyTechnicalUpgrade();

let currentProgramIndex = 0;
let currentLessonIndex = 0;

const els = {
  mobileMenuButton: document.querySelector('#mobileMenuButton'),
  mobileMenu: document.querySelector('#mobileMenu'),
  programSelect: document.querySelector('#programSelect'),
  programGrid: document.querySelector('#programGrid'),
  sidebarTitle: document.querySelector('#sidebarTitle'),
  lessonCount: document.querySelector('#lessonCount'),
  lessonList: document.querySelector('#lessonList'),
  lessonBadge: document.querySelector('#lessonBadge'),
  lessonTitle: document.querySelector('#lessonTitle'),
  lessonIntro: document.querySelector('#lessonIntro'),
  objectivesList: document.querySelector('#objectivesList'),
  summaryText: document.querySelector('#summaryText'),
  exampleBox: document.querySelector('#exampleBox'),
  keyPointsList: document.querySelector('#keyPointsList'),
  diagramBox: document.querySelector('#diagramBox'),
  nextLessonButton: document.querySelector('#nextLessonButton'),
  exerciseSelect: document.querySelector('#exerciseSelect'),
  exerciseList: document.querySelector('#exerciseList'),
};

function lesson(code, title, intro, objectives, summary, keyPoints, diagram) {
  return { code, title, intro, objectives, summary, keyPoints, diagram };
}

function qa(question, answer) {
  return { question, answer };
}

function richLesson(code, title, intro, objectives, summary, keyPoints, diagram, example = '', visual = '') {
  return { code, title, intro, objectives, summary, keyPoints, diagram, example, visual };
}

function codeBlock(content) {
  return `<pre class="code-block"><code>${escapeHtml(content)}</code></pre>`;
}

function topology(content) {
  return `<pre class="topology-box">${escapeHtml(content)}</pre>`;
}

function techTable(headers, rows) {
  return `
    <table class="tech-table">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  `;
}

function applyTechnicalUpgrade() {
  const upgrades = {
    bd: {
      '2.01': {
        extra: 'Dans un sujet d’examen, on peut te demander de transformer un besoin métier en tables. La bonne méthode est de repérer les objets importants, leurs caractéristiques, puis les liens entre eux.',
        example: '<p><strong>Contexte :</strong> une école veut gérer les étudiants et leurs filières. On évite un fichier Excel unique si plusieurs utilisateurs doivent modifier les données.</p>' + codeBlock('CREATE DATABASE revision_exam;\nUSE revision_exam;\n\nCREATE TABLE filieres (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  nom VARCHAR(80) NOT NULL UNIQUE\n);\n\nCREATE TABLE etudiants (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  nom VARCHAR(80) NOT NULL,\n  prenom VARCHAR(80) NOT NULL,\n  filiere_id INT NOT NULL,\n  FOREIGN KEY (filiere_id) REFERENCES filieres(id)\n);'),
        visual: techTable(['Besoin', 'Table possible', 'Pourquoi'], [['Étudiants', 'etudiants', 'Chaque ligne représente un étudiant'], ['Filières', 'filieres', 'Évite de répéter le nom de la filière'], ['Lien étudiant-filière', 'filiere_id', 'Clé étrangère vers filieres']]),
      },
      '2.02': {
        extra: 'Le modèle relationnel est très strict : une table doit regrouper des objets de même nature. Mélanger étudiants, enseignants et matières dans une seule table rend les requêtes et les mises à jour fragiles.',
        example: codeBlock('TABLE etudiants\n+----+------+--------+------------+\n| id | nom  | prenom | filiere_id |\n+----+------+--------+------------+\n| 1  | Koffi| Marc   | 2          |\n| 2  | Diallo| Awa   | 1          |\n+----+------+--------+------------+\n\n-- id est la clé primaire.\n-- filiere_id est une clé étrangère.'),
        visual: techTable(['Mot du cours', 'Mot simple', 'Exemple'], [['Relation', 'Table', 'etudiants'], ['Tuple', 'Ligne', 'Koffi Marc'], ['Attribut', 'Colonne', 'nom'], ['Domaine', 'Valeurs possibles', 'VARCHAR(80)']]),
      },
      '2.03': {
        extra: 'Le choix du SGBD dépend du contexte : SQLite pour une application locale simple, MySQL pour beaucoup de sites web, PostgreSQL pour des projets robustes, Oracle pour grandes entreprises.',
        example: '<p><strong>Cas concret :</strong> une application PHP de gestion d’articles peut utiliser MySQL/MariaDB. Une application mobile embarquée peut utiliser SQLite.</p>' + codeBlock('-- Même idée SQL, SGBD différent\nSELECT nom, prenom FROM etudiants ORDER BY nom;'),
        visual: techTable(['SGBD', 'Point fort', 'Usage typique'], [['SQLite', 'Très léger, fichier unique', 'Mobile, petit logiciel'], ['MySQL/MariaDB', 'Répandu sur le web', 'Sites PHP'], ['PostgreSQL', 'Robuste et strict', 'Applications métier'], ['Oracle', 'Très gros systèmes', 'Banques, grandes entreprises']]),
      },
      '2.04': {
        extra: 'Une erreur fréquente est de confondre les familles SQL. CREATE TABLE ne manipule pas les lignes, il crée la structure. SELECT ne modifie rien, il lit.',
        example: codeBlock('-- DDL : structure\nCREATE TABLE matieres (id INT PRIMARY KEY, nom VARCHAR(80));\n\n-- DML : données\nINSERT INTO matieres VALUES (1, \'Bases de données\');\nSELECT * FROM matieres;\nUPDATE matieres SET nom = \'BD I\' WHERE id = 1;\nDELETE FROM matieres WHERE id = 1;'),
        visual: techTable(['Famille', 'Rôle', 'Commandes'], [['DDL', 'Définir la structure', 'CREATE, ALTER, DROP'], ['DML', 'Manipuler les lignes', 'SELECT, INSERT, UPDATE, DELETE'], ['DCL', 'Gérer les droits', 'GRANT, REVOKE'], ['TCL', 'Gérer transactions', 'COMMIT, ROLLBACK']]),
      },
      '2.05': {
        extra: 'Pour créer une bonne table, commence par les contraintes : quelles colonnes sont obligatoires ? quelle colonne identifie une ligne ? quelles valeurs doivent rester uniques ?',
        example: codeBlock('CREATE TABLE notes (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  etudiant_id INT NOT NULL,\n  matiere_id INT NOT NULL,\n  note DECIMAL(4,2) CHECK (note >= 0 AND note <= 20),\n  date_eval DATE NOT NULL,\n  FOREIGN KEY (etudiant_id) REFERENCES etudiants(id),\n  FOREIGN KEY (matiere_id) REFERENCES matieres(id)\n);'),
        visual: techTable(['Contrainte', 'Signification', 'Exemple'], [['NOT NULL', 'Valeur obligatoire', 'nom VARCHAR(80) NOT NULL'], ['UNIQUE', 'Pas de doublon', 'email UNIQUE'], ['CHECK', 'Condition à respecter', 'note BETWEEN 0 AND 20'], ['FOREIGN KEY', 'Lien vers une autre table', 'etudiant_id']]),
      },
      '2.06': {
        extra: 'La lecture SQL se construit en couches : FROM choisit la table, WHERE filtre, SELECT choisit les colonnes, ORDER BY trie le résultat.',
        example: codeBlock('-- Étudiants de la filière Réseaux, triés par nom\nSELECT e.nom, e.prenom, f.nom AS filiere\nFROM etudiants e\nJOIN filieres f ON f.id = e.filiere_id\nWHERE f.nom = \'Réseaux\'\nORDER BY e.nom ASC;'),
        visual: topology('Ordre logique d’une requête\nFROM etudiants\n  → JOIN filieres\n  → WHERE filiere = Réseaux\n  → SELECT nom, prenom\n  → ORDER BY nom'),
      },
      '2.07': {
        extra: 'En examen, montre toujours la condition WHERE quand tu modifies ou supprimes. Une requête sans WHERE peut changer toute la table.',
        example: codeBlock('INSERT INTO filieres(nom) VALUES (\'Développement Web\');\n\nUPDATE etudiants\nSET filiere_id = 3\nWHERE id = 12;\n\nDELETE FROM notes\nWHERE etudiant_id = 12 AND matiere_id = 4;'),
        visual: techTable(['Commande', 'Effet', 'Danger principal'], [['INSERT', 'Ajoute une ligne', 'Valeurs manquantes ou mauvais type'], ['UPDATE', 'Modifie des lignes', 'Oublier WHERE'], ['DELETE', 'Supprime des lignes', 'Oublier WHERE']]),
      },
      '2.08': {
        extra: 'La jointure sert à répondre à une question métier lorsque les informations sont réparties dans plusieurs tables. Elle est normale dans une base bien conçue.',
        example: codeBlock('-- Moyenne par étudiant\nSELECT e.nom, e.prenom, AVG(n.note) AS moyenne\nFROM etudiants e\nJOIN notes n ON n.etudiant_id = e.id\nGROUP BY e.id, e.nom, e.prenom\nHAVING AVG(n.note) >= 10;'),
        visual: topology('etudiants(id) 1 ──── N notes(etudiant_id)\nmatieres(id)  1 ──── N notes(matiere_id)\n\nnotes = table d’association entre étudiant et matière'),
      },
      '2.09': {
        extra: 'Une base non normalisée paraît simple au début, mais elle crée vite des contradictions. Si le nom d’une filière est répété dans 500 lignes, un changement de nom doit être fait 500 fois.',
        example: '<p><strong>Mauvais modèle :</strong> stocker le nom de la filière directement dans chaque étudiant.</p>' + codeBlock('-- Mauvais : répétition\netudiants(id, nom, prenom, filiere_nom)\n\n-- Meilleur : séparation\netudiants(id, nom, prenom, filiere_id)\nfilieres(id, nom)'),
        visual: techTable(['Forme', 'Règle simple', 'Erreur évitée'], [['1FN', 'Une cellule = une valeur', 'Liste de téléphones dans une cellule'], ['2FN', 'Dépendance à toute la clé', 'Colonne dépendant d’une partie de clé'], ['3FN', 'Pas de dépendance indirecte', 'filiere_nom dépend de filiere_id']]),
      },
      '2.10': {
        extra: 'Une transaction est indispensable quand plusieurs requêtes forment une seule opération logique. Si une seule étape échoue, on annule tout.',
        example: codeBlock('START TRANSACTION;\n\nUPDATE comptes SET solde = solde - 5000 WHERE id = 1;\nUPDATE comptes SET solde = solde + 5000 WHERE id = 2;\n\n-- Si tout est correct\nCOMMIT;\n\n-- En cas d’erreur\n-- ROLLBACK;'),
        visual: techTable(['ACID', 'Sens', 'Exemple transfert'], [['Atomicité', 'Tout ou rien', 'Débit et crédit ensemble'], ['Cohérence', 'Règles respectées', 'Pas de solde invalide'], ['Isolation', 'Transactions séparées', 'Deux virements ne se mélangent pas'], ['Durabilité', 'Validé = conservé', 'Après COMMIT, reste enregistré']]),
      },
    },
    web: buildWebUpgrades(),
    reseaux: buildNetworkUpgrades(),
    teleinfo: buildTeleinfoUpgrades(),
    'c-linux': buildCLinuxUpgrades(),
    telecom: buildTelecomUpgrades(),
    'eco-num': buildEconomyUpgrades(),
  };

  programs.forEach((program) => {
    const programUpgrades = upgrades[program.id];
    if (!programUpgrades) return;

    program.lessons = program.lessons.map((item) => {
      const upgrade = programUpgrades[item.code];
      if (!upgrade) return item;

      return {
        ...item,
        summary: upgrade.extra ? [...item.summary, upgrade.extra] : item.summary,
        example: upgrade.example,
        visual: upgrade.visual,
      };
    });
  });
}

function fromPairs(pairs) {
  return Object.fromEntries(pairs);
}

function buildWebUpgrades() {
  return fromPairs([
    ['4.01', { extra: 'Une application web dynamique suit toujours le même principe : le navigateur demande, le serveur exécute PHP, PHP interroge éventuellement MySQL, puis le serveur renvoie du HTML.', example: topology('Navigateur\n  GET /articles.php\n     ↓\nServeur Apache/Nginx\n     ↓ exécute\nPHP\n     ↓ SELECT\nMySQL\n     ↓ résultats\nHTML renvoyé au navigateur'), visual: topology('Client → HTTP Request → Serveur Web → PHP → MySQL\nClient ← HTML/CSS/JS ← Serveur Web ← Données') }],
    ['4.02', { extra: 'Un projet propre évite de tout mettre dans un seul fichier. Même en petit TP, sépare la configuration, les vues, les traitements et les ressources CSS/JS.', example: topology('mon-projet/\n  public/index.php\n  public/assets/style.css\n  includes/header.php\n  includes/db.php\n  pages/articles.php\n  actions/save_article.php'), visual: techTable(['Dossier/fichier', 'Rôle'], [['includes/db.php', 'Connexion PDO'], ['pages/', 'Pages affichées'], ['actions/', 'Traitements POST'], ['public/assets/', 'CSS, JS, images']]) }],
    ['4.03', { extra: 'PHP est exécuté côté serveur. Si tu regardes le code source dans le navigateur, tu ne verras que le résultat HTML, jamais les instructions PHP.', example: codeBlock('<?php\n$nom = "Awa";\necho "Bonjour " . $nom;\n?>\n\n<!-- Résultat envoyé au navigateur -->\nBonjour Awa'), visual: techTable(['Élément PHP', 'Exemple', 'Rôle'], [['Balise', '<?php ... ?>', 'Délimite le code PHP'], ['Variable', '$nom', 'Stocke une valeur'], ['echo', 'echo $nom;', 'Affiche dans le HTML'], [';', 'fin instruction', 'Termine une instruction']]) }],
    ['4.04', { extra: 'Les variables mal nommées ou non initialisées créent beaucoup d’erreurs. Utilise des noms clairs et vérifie les types quand tu manipules formulaires et calculs.', example: codeBlock('<?php\n$prix = 2500;\n$quantite = 3;\n$total = $prix * $quantite;\necho "Total : " . $total . " FCFA";\n?>'), visual: techTable(['Variable', 'Valeur', 'Type probable'], [['$prix', '2500', 'int'], ['$quantite', '3', 'int'], ['$total', '7500', 'int'], ['$message', 'Total : 7500 FCFA', 'string']]) }],
    ['4.05', { extra: 'Les conditions et boucles servent à transformer une page statique en page logique : vérifier un âge, afficher une liste, traiter plusieurs produits.', example: codeBlock('<?php\n$notes = [12, 8, 15];\nforeach ($notes as $note) {\n  if ($note >= 10) {\n    echo "Admis<br>";\n  } else {\n    echo "Échec<br>";\n  }\n}\n?>'), visual: topology('Début\n  ↓\nPour chaque note\n  ↓\nnote >= 10 ?\n  ├─ oui → afficher Admis\n  └─ non → afficher Échec') }],
    ['4.06', { extra: 'Les tableaux associatifs sont essentiels en PHP web, car les lignes récupérées depuis MySQL arrivent souvent sous forme de tableaux clé-valeur.', example: codeBlock('<?php\n$etudiant = [\n  "nom" => "Koffi",\n  "prenom" => "Marc",\n  "moyenne" => 13.5\n];\n\necho $etudiant["nom"] . " : " . $etudiant["moyenne"];\n?>'), visual: techTable(['Clé', 'Valeur'], [['nom', 'Koffi'], ['prenom', 'Marc'], ['moyenne', '13.5']]) }],
    ['4.07', { extra: 'La différence GET/POST est importante pour les examens. GET convient à une recherche partageable. POST convient aux actions qui changent les données.', example: codeBlock('<form method="post" action="actions/save_article.php">\n  <input name="titre">\n  <textarea name="contenu"></textarea>\n  <button>Enregistrer</button>\n</form>\n\n<?php\n$titre = $_POST["titre"] ?? "";\n?>'), visual: techTable(['Méthode', 'Visible URL', 'Usage'], [['GET', 'Oui', 'Recherche, filtre'], ['POST', 'Non directement', 'Création, connexion, modification'], ['SESSION', 'Non', 'Utilisateur connecté'], ['COOKIE', 'Côté navigateur', 'Préférences, trace limitée']]) }],
    ['4.08', { extra: 'Le lien PHP-MySQL suit une chaîne précise : connexion, préparation de la requête, exécution, récupération, affichage.', example: codeBlock('<?php\n$pdo = new PDO("mysql:host=localhost;dbname=ecole", "root", "");\n$stmt = $pdo->query("SELECT nom, prenom FROM etudiants");\nforeach ($stmt as $row) {\n  echo htmlspecialchars($row["nom"]) . "<br>";\n}\n?>'), visual: topology('PHP\n  ├─ se connecte à MySQL\n  ├─ exécute SELECT\n  ├─ reçoit des lignes\n  └─ génère HTML') }],
    ['4.09', { extra: 'PDO est préférable car il rend le code plus portable et permet les requêtes préparées. C’est un point très important pour la sécurité.', example: codeBlock('$sql = "SELECT * FROM etudiants WHERE matricule = :matricule";\n$stmt = $pdo->prepare($sql);\n$stmt->execute(["matricule" => $_POST["matricule"]]);\n$etudiant = $stmt->fetch();'), visual: techTable(['Sans préparation', 'Avec préparation'], [['Concatène directement les entrées', 'Sépare SQL et valeurs'], ['Risque injection SQL', 'Risque fortement réduit'], ['Difficile à maintenir', 'Plus clair et réutilisable']]) }],
    ['4.10', { extra: 'La sécurité web repose sur une règle simple : tout ce qui vient de l’utilisateur est suspect jusqu’à validation.', example: codeBlock('// Protection affichage contre XSS\necho htmlspecialchars($commentaire, ENT_QUOTES, "UTF-8");\n\n// Protection SQL\n$stmt = $pdo->prepare("INSERT INTO commentaires(contenu) VALUES (:contenu)");\n$stmt->execute(["contenu" => $commentaire]);'), visual: techTable(['Attaque', 'Cause', 'Protection'], [['XSS', 'HTML/JS injecté dans page', 'htmlspecialchars'], ['Injection SQL', 'Entrée concaténée dans SQL', 'Requête préparée'], ['CSRF', 'Action déclenchée sans accord', 'Token CSRF']]) }],
  ]);
}

function buildNetworkUpgrades() {
  return fromPairs([
    ['5.01', { extra: 'Un VLAN est très concret : il évite qu’un poste administratif soit dans le même domaine de broadcast qu’un poste étudiant, même si les deux sont branchés sur le même switch.', example: codeBlock('Switch(config)# vlan 10\nSwitch(config-vlan)# name ETUDIANTS\nSwitch(config)# vlan 20\nSwitch(config-vlan)# name ADMIN\nSwitch(config)# interface fa0/1\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10'), visual: topology('Switch\n  ├─ Fa0/1 PC étudiant  → VLAN 10\n  ├─ Fa0/2 PC étudiant  → VLAN 10\n  └─ Fa0/3 PC admin     → VLAN 20') }],
    ['5.02', { extra: 'Avant de parler routage, il faut savoir déterminer si deux machines sont dans le même réseau. Le masque répond à cette question.', example: codeBlock('IP : 192.168.10.34/24\nRéseau : 192.168.10.0\nBroadcast : 192.168.10.255\nPlage utilisable : 192.168.10.1 - 192.168.10.254\nPasserelle typique : 192.168.10.1'), visual: techTable(['CIDR', 'Masque', 'Nombre adresses'], [['/24', '255.255.255.0', '256'], ['/25', '255.255.255.128', '128'], ['/26', '255.255.255.192', '64'], ['/30', '255.255.255.252', '4']]) }],
    ['5.03', { extra: 'Le routeur ne regarde pas le nom de la machine. Il regarde l’adresse IP de destination, puis cherche la meilleure route dans sa table.', example: topology('PC A 192.168.1.10/24\n  passerelle 192.168.1.1\n      ↓\nRouteur\n      ↓\nPC B 192.168.2.20/24'), visual: topology('Paquet vers 192.168.2.20\nRouteur consulte table\n  192.168.2.0/24 → sortie G0/1\nLe paquet est transmis') }],
    ['5.04', { extra: 'La route la plus précise gagne. Une route /24 est plus précise qu’une route /0.', example: codeBlock('Destination      Masque            Next hop\n192.168.2.0      255.255.255.0    10.0.0.2\n10.0.0.0         255.255.255.0    connecté\n0.0.0.0          0.0.0.0          10.0.0.1'), visual: techTable(['Route', 'Quand utilisée'], [['192.168.2.0/24', 'Pour le réseau 192.168.2.x'], ['10.0.0.0/24', 'Réseau directement connecté'], ['0.0.0.0/0', 'Si aucune autre route ne correspond']]) }],
    ['5.05', { extra: 'Une route statique est utile dans un petit réseau ou pour une route par défaut vers Internet.', example: codeBlock('Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2\nRouter(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1'), visual: topology('R1 --10.0.0.0/30-- R2\nR1 connaît 192.168.1.0/24\nR2 connaît 192.168.2.0/24\nRoute statique nécessaire pour joindre le réseau distant') }],
    ['5.06', { extra: 'Le routage dynamique devient utile quand il y a plusieurs routeurs, plusieurs chemins et des changements possibles.', example: topology('R1 échange ses routes avec R2\nR2 échange ses routes avec R3\nAprès convergence : chaque routeur connaît les réseaux distants'), visual: techTable(['Protocole', 'Type', 'Usage'], [['RIP', 'Distance vector', 'Petits réseaux'], ['OSPF', 'Link-state', 'Réseaux moyens/grands'], ['BGP', 'Path vector', 'Internet, opérateurs']]) }],
    ['5.07', { extra: 'La métrique répond à la question : si plusieurs routes existent, laquelle est meilleure ?', example: codeBlock('Chemin A : R1 → R2 → R4 = 2 sauts\nChemin B : R1 → R3 → R5 → R4 = 3 sauts\nAvec RIP, le chemin A est préféré.'), visual: techTable(['Métrique', 'Signification'], [['Hop count', 'Nombre de routeurs traversés'], ['Coût OSPF', 'Valeur liée à la bande passante'], ['Latence', 'Temps de traversée'], ['Bande passante', 'Capacité du lien']]) }],
    ['5.08', { extra: 'RIP est facile à expliquer : chaque routeur annonce ce qu’il connaît à ses voisins, et ajoute 1 saut à chaque réseau appris.', example: codeBlock('R1 annonce : 192.168.1.0/24 à 0 saut\nR2 reçoit et note : 192.168.1.0/24 via R1 à 1 saut\nR3 reçoit depuis R2 : 192.168.1.0/24 à 2 sauts'), visual: topology('R1 ---- R2 ---- R3\n192.168.1.0/24 appris progressivement par annonces RIP') }],
    ['5.09', { extra: 'OSPF est plus sérieux que RIP : il construit une carte du réseau et calcule les meilleurs chemins avec l’algorithme SPF.', example: topology('Zone OSPF 0\n  R1 ── coût 10 ── R2\n  R1 ── coût 100 ─ R3 ─ coût 10 ─ R2\nOSPF préfère coût total 10 plutôt que 110'), visual: techTable(['Notion OSPF', 'Sens'], [['LSA', 'Annonce d’état de lien'], ['Area', 'Zone OSPF'], ['Cost', 'Métrique'], ['SPF', 'Calcul du plus court chemin']]) }],
    ['5.10', { extra: 'NAT est souvent ce qui permet à un réseau privé entier d’accéder à Internet avec une seule adresse publique.', example: topology('PC 192.168.1.20:51515\n  ↓ NAT\nRouteur public 41.90.10.5:40001\n  ↓\nServeur web 142.250.x.x:443'), visual: techTable(['Avant NAT', 'Après NAT'], [['Source 192.168.1.20', 'Source 41.90.10.5'], ['Port 51515', 'Port traduit 40001'], ['Adresse privée non routable Internet', 'Adresse publique routable']]) }],
  ]);
}

function buildTeleinfoUpgrades() {
  return fromPairs(Array.from({ length: 10 }, (_, index) => {
    const code = `3.${String(index + 1).padStart(2, '0')}`;
    const examples = [
      topology('Utilisateur → terminal → réseau local → fournisseur Internet → serveur distant\nLa téléinformatique étudie cette chaîne complète.'),
      techTable(['Information', 'Signal possible', 'Support'], [['Texte', 'Impulsions électriques', 'Cuivre'], ['Fichier', 'Lumière', 'Fibre'], ['Voix', 'Onde radio', '4G/5G']]),
      techTable(['Critère', 'Série', 'Parallèle'], [['Lignes', '1 ligne principale', 'Plusieurs lignes'], ['Distance', 'Longue', 'Courte'], ['Complexité', 'Faible', 'Synchronisation difficile']]),
      techTable(['Mode', 'Sens', 'Exemple'], [['Simplex', 'A vers B seulement', 'Diffusion TV'], ['Half-duplex', 'A ou B chacun son tour', 'Talkie-walkie'], ['Full-duplex', 'A et B en même temps', 'Téléphone']]),
      topology('PC ── Switch ── Routeur/Box ── Modem/ONT ── FAI ── Internet\nWi-Fi : terminal → point d’accès → réseau local'),
      techTable(['Protocole', 'Rôle'], [['TCP/IP', 'Transport et adressage Internet'], ['HTTP', 'Pages web'], ['FTP', 'Transfert de fichiers'], ['DHCP', 'Configuration IP automatique']]),
      techTable(['Technologie', 'Support', 'Point fort'], [['ADSL/VDSL', 'Cuivre téléphonique', 'Réutilise réseau existant'], ['Fibre FTTH', 'Fibre optique', 'Très haut débit'], ['4G/5G', 'Radio', 'Mobilité']]),
      topology('ERP/CRM/e-learning/IoT\n  ↓ utilisent\nRéseaux + protocoles + serveurs distants\n  ↓ produisent\nServices accessibles partout'),
      techTable(['Menace', 'Protection'], [['Interception', 'Chiffrement'], ['Usurpation', 'Authentification MFA'], ['Intrusion', 'Pare-feu + segmentation'], ['Perte de données', 'Sauvegarde']]),
      topology('Méthode panne réseau\n1. Tester câble/Wi-Fi\n2. Vérifier IP/masque\n3. Tester passerelle\n4. Tester DNS\n5. Tester service distant'),
    ];
    return [code, { extra: 'Pour une matière technique, retiens toujours la chaîne complète : information, signal, support, équipement, protocole, service et sécurité.', example: examples[index], visual: examples[index] }];
  }));
}

function buildCLinuxUpgrades() {
  return fromPairs([
    ['6.01', { extra: 'Sous Linux, une socket est manipulée comme un descripteur de fichier. Cela explique pourquoi on retrouve close() et des retours d’erreur négatifs.', example: codeBlock('int s = socket(AF_INET, SOCK_STREAM, 0);\nif (s < 0) {\n  perror("socket");\n  return 1;\n}'), visual: topology('Programme C\n  ↓ socket()\nDescripteur s\n  ↓ noyau Linux\nPile TCP/IP\n  ↓ réseau') }],
    ['6.02', { extra: 'Les fonctions htons et htonl sont importantes parce que le réseau utilise un ordre d’octets standard.', example: codeBlock('struct sockaddr_in addr;\naddr.sin_family = AF_INET;\naddr.sin_port = htons(8080);\naddr.sin_addr.s_addr = inet_addr("127.0.0.1");'), visual: techTable(['Champ', 'Valeur'], [['sin_family', 'AF_INET'], ['sin_port', 'htons(8080)'], ['sin_addr', 'Adresse IPv4']]) }],
    ['6.03', { extra: 'Le type de socket détermine le protocole : SOCK_STREAM donne TCP, SOCK_DGRAM donne UDP.', example: codeBlock('int tcp = socket(AF_INET, SOCK_STREAM, 0);\nint udp = socket(AF_INET, SOCK_DGRAM, 0);'), visual: techTable(['Socket', 'Protocole', 'Propriété'], [['SOCK_STREAM', 'TCP', 'Connexion fiable'], ['SOCK_DGRAM', 'UDP', 'Datagrammes sans connexion']]) }],
    ['6.04', { extra: 'L’erreur classique est de croire que accept() utilise la même socket que listen(). En réalité accept() crée une socket connectée au client.', example: codeBlock('int server = socket(AF_INET, SOCK_STREAM, 0);\nbind(server, (struct sockaddr*)&addr, sizeof(addr));\nlisten(server, 5);\nint client = accept(server, NULL, NULL);\nrecv(client, buffer, sizeof(buffer), 0);'), visual: topology('socket serveur : écoute port 8080\n  └─ accept() → socket client dédiée\n       └─ recv/send avec ce client') }],
    ['6.05', { extra: 'Le client doit connaître l’adresse et le port du serveur. connect() déclenche la négociation TCP.', example: codeBlock('int s = socket(AF_INET, SOCK_STREAM, 0);\nconnect(s, (struct sockaddr*)&server_addr, sizeof(server_addr));\nsend(s, "HELLO", 5, 0);\nrecv(s, buffer, sizeof(buffer), 0);'), visual: topology('Client socket()\n  ↓ connect()\nServeur accept()\n  ↓\nÉchange send/recv') }],
    ['6.06', { extra: 'TCP garantit l’ordre des octets, pas les frontières de messages. Si tu envoies 100 octets, le récepteur peut lire 40 puis 60.', example: codeBlock('int total = 0;\nwhile (total < expected) {\n  int n = recv(s, buffer + total, expected - total, 0);\n  if (n <= 0) break;\n  total += n;\n}'), visual: topology('send 100 octets\n  ↓ TCP flux\nrecv 40 octets\nrecv 60 octets\n= même message reconstitué par le programme') }],
    ['6.07', { extra: 'UDP est utile quand l’application accepte de perdre un paquet ou gère elle-même la fiabilité.', example: codeBlock('sendto(s, msg, strlen(msg), 0,\n       (struct sockaddr*)&dest, sizeof(dest));\n\nrecvfrom(s, buffer, sizeof(buffer), 0,\n         (struct sockaddr*)&src, &len);'), visual: techTable(['TCP', 'UDP'], [['Connexion avant échange', 'Pas de connexion'], ['Fiable et ordonné', 'Pas de garantie'], ['Flux d’octets', 'Datagrammes'], ['Plus lourd', 'Plus rapide/simple']]) }],
    ['6.08', { extra: 'Un serveur multi-clients évite qu’un client lent bloque tout le monde.', example: codeBlock('while (1) {\n  int client = accept(server, NULL, NULL);\n  if (fork() == 0) {\n    close(server);\n    traiter_client(client);\n    close(client);\n    exit(0);\n  }\n  close(client);\n}'), visual: topology('Serveur parent\n  ├─ fork client 1\n  ├─ fork client 2\n  └─ fork client 3') }],
    ['6.09', { extra: 'Un programme réseau sérieux vérifie chaque retour : socket, bind, listen, accept, connect, send, recv.', example: codeBlock('if (bind(s, (struct sockaddr*)&addr, sizeof(addr)) < 0) {\n  perror("bind");\n  close(s);\n  return 1;\n}'), visual: techTable(['Retour', 'Signification'], [['< 0', 'Erreur système'], ['0 avec recv', 'Connexion fermée proprement'], ['> 0', 'Nombre d’octets lus/écrits']]) }],
    ['6.10', { extra: 'Un mini-protocole rend les échanges prévisibles. Sans protocole applicatif, le serveur ne sait pas quoi faire avec les octets reçus.', example: codeBlock('Client → GET /note/12\nServeur → 200 14.50\n\nClient → QUIT\nServeur → 200 BYE'), visual: techTable(['Commande', 'Réponse possible'], [['HELLO', '200 OK'], ['GET id', '200 valeur ou 404'], ['SET id valeur', '201 CREATED'], ['QUIT', '200 BYE']]) }],
  ]);
}

function buildTelecomUpgrades() {
  return fromPairs(Array.from({ length: 10 }, (_, index) => {
    const code = `7.${String(index + 1).padStart(2, '0')}`;
    const visuals = [
      topology('Source → Émetteur → Canal bruité → Récepteur → Destination'),
      techTable(['Signal', 'Forme', 'Exemple'], [['Analogique', 'Continu', 'Voix micro'], ['Numérique', 'Discret', 'Bits ordinateur']]),
      topology('Signal utile + bruit\n  ↓ filtrage/codage\nSignal reconstruit avec moins d’erreurs'),
      techTable(['Notion', 'Définition'], [['Bande passante', 'Largeur de fréquences disponible'], ['Débit', 'Bits par seconde'], ['Baud', 'Symboles par seconde']]),
      techTable(['Support', 'Avantage', 'Limite'], [['Cuivre', 'Économique', 'Atténuation'], ['Fibre', 'Très haut débit', 'Installation'], ['Radio', 'Mobilité', 'Interférences']]),
      topology('Antenne émettrice\n  ↓ réflexion / diffraction / absorption\nAntenne réceptrice'),
      techTable(['Modulation', 'Paramètre modifié'], [['AM', 'Amplitude'], ['FM', 'Fréquence'], ['PM', 'Phase']]),
      topology('Bits → symboles → QPSK/QAM → onde modulée → canal → démodulation → bits'),
      techTable(['Génération', 'Usage dominant'], [['2G', 'Voix/SMS'], ['3G', 'Internet mobile'], ['4G', 'IP haut débit'], ['5G', 'Débit + faible latence']]),
      topology('Station sol → satellite → zone couverte\nMicro-ondes : antenne A ⇄ antenne B en visibilité directe'),
    ];
    return [code, { extra: 'Pour traiter une question de télécommunications, raisonne toujours en chaîne : nature du signal, canal, bruit, modulation, débit et réception.', example: visuals[index], visual: visuals[index] }];
  }));
}

function buildEconomyUpgrades() {
  return fromPairs(Array.from({ length: 10 }, (_, index) => {
    const code = `1.${String(index + 1).padStart(2, '0')}`;
    const visuals = [
      techTable(['Élément', 'Exemple'], [['Infrastructure', 'Réseaux, cloud'], ['Service', 'Plateforme e-commerce'], ['Données', 'Historique clics/achats'], ['Usage', 'Paiement mobile']]),
      topology('TIC + cloud + mobile + IA + IoT\n  ↓\nNouveaux services\n  ↓\nProductivité et nouveaux marchés'),
      topology('Producteur de service\n  ↓ plateforme / hébergeur / paiement\nUtilisateur final\n  ↓ données et contrat électronique'),
      topology('Plus d’utilisateurs → plus de valeur → plus d’utilisateurs\nEffet de réseau = cercle d’attraction'),
      techTable(['Modèle', 'Exemple'], [['Abonnement', 'Netflix, SaaS'], ['Commission', 'Marketplace'], ['Publicité', 'Réseau social'], ['Freemium', 'Application gratuite + premium']]),
      topology('Donnée brute → nettoyage → analyse → décision → valeur économique'),
      topology('Processus ancien → numérisation → automatisation → mesure → amélioration'),
      techTable(['Effet', 'Exemple'], [['Automatisation', 'Caisse automatique'], ['Nouveau métier', 'Data analyst'], ['Plateforme', 'Livreur indépendant'], ['Compétence', 'Cybersécurité']]),
      techTable(['Besoin', 'Outil'], [['Preuve', 'Écrit électronique'], ['Consentement', 'Contrat en ligne'], ['Identité', 'Signature électronique'], ['Confiance', 'Sécurité + régulation']]),
      techTable(['Défi', 'Question d’examen'], [['Fiscalité', 'Où taxer une plateforme mondiale ?'], ['Concurrence', 'Comment limiter les monopoles ?'], ['Emploi', 'Quels métiers disparaissent ou changent ?'], ['Inclusion', 'Qui reste exclu du numérique ?']]),
    ];
    return [code, { extra: 'Pour éviter une réponse trop vague, illustre toujours avec un acteur, une donnée collectée, un modèle de revenu et un risque associé.', example: visuals[index], visual: visuals[index] }];
  }));
}

function init() {
  renderProgramControls();
  renderAll();
  bindEvents();
}

function bindEvents() {
  els.mobileMenuButton.addEventListener('click', () => {
    const isOpen = !els.mobileMenu.classList.toggle('hidden');
    els.mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('#mobileMenu a').forEach((link) => {
    link.addEventListener('click', () => els.mobileMenu.classList.add('hidden'));
  });

  els.programSelect.addEventListener('change', (event) => {
    currentProgramIndex = Number(event.target.value);
    currentLessonIndex = 0;
    renderAll();
  });

  els.exerciseSelect.addEventListener('change', (event) => {
    currentProgramIndex = Number(event.target.value);
    currentLessonIndex = 0;
    renderAll();
    document.querySelector('#exercices').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  els.nextLessonButton.addEventListener('click', () => {
    const program = programs[currentProgramIndex];
    currentLessonIndex = (currentLessonIndex + 1) % program.lessons.length;
    renderLessonArea();
  });
}

function renderProgramControls() {
  programs.forEach((program, index) => {
    const option = new Option(program.title, String(index));
    els.programSelect.add(option.cloneNode(true));
    els.exerciseSelect.add(option);
  });
}

function renderAll() {
  els.programSelect.value = String(currentProgramIndex);
  els.exerciseSelect.value = String(currentProgramIndex);
  renderProgramGrid();
  renderLessonArea();
  renderExercises();
}

function renderProgramGrid() {
  els.programGrid.innerHTML = programs
    .map((program, index) => {
      const active = index === currentProgramIndex ? 'active' : '';
      return `
        <button class="program-card ${active}" type="button" data-program-index="${index}">
          <span class="text-xs font-extrabold uppercase tracking-[0.18em] ${active ? 'text-cream/60' : 'text-muted'}">Matière ${index + 1}</span>
          <strong class="mt-3 block font-manrope text-xl font-extrabold tracking-[-0.03em]">${program.title}</strong>
          <span class="mt-2 block text-sm ${active ? 'text-cream/75' : 'text-muted'}">${program.short}</span>
          <span class="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${active ? 'bg-white/10 text-cream' : 'bg-brand/10 text-brand'}">${program.lessons.length} leçons</span>
        </button>
      `;
    })
    .join('');

  els.programGrid.querySelectorAll('[data-program-index]').forEach((button) => {
    button.addEventListener('click', () => {
      currentProgramIndex = Number(button.dataset.programIndex);
      currentLessonIndex = 0;
      renderAll();
      document.querySelector('#formation').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderLessonArea() {
  const program = programs[currentProgramIndex];
  const lessonData = program.lessons[currentLessonIndex];

  els.sidebarTitle.textContent = program.title;
  els.lessonCount.textContent = `${program.lessons.length} leçons`;
  els.lessonList.innerHTML = program.lessons
    .map((item, index) => {
      const active = index === currentLessonIndex ? 'active' : '';
      return `
        <button class="lesson-item ${active}" type="button" data-lesson-index="${index}">
          <span class="block text-xs font-extrabold ${active ? 'text-cream/55' : 'text-muted'}">${item.code}</span>
          <span class="mt-1 block font-manrope text-base font-extrabold tracking-[-0.02em]">${item.title}</span>
        </button>
      `;
    })
    .join('');

  els.lessonList.querySelectorAll('[data-lesson-index]').forEach((button) => {
    button.addEventListener('click', () => {
      currentLessonIndex = Number(button.dataset.lessonIndex);
      renderLessonArea();
    });
  });

  els.lessonBadge.textContent = `${program.title} · ${lessonData.code}`;
  els.lessonTitle.textContent = lessonData.title;
  els.lessonIntro.textContent = lessonData.intro;
  els.objectivesList.innerHTML = lessonData.objectives.map((item) => `<li>${item}</li>`).join('');
  els.summaryText.innerHTML = lessonData.summary.map((item) => `<p>${item}</p>`).join('');
  els.exampleBox.innerHTML = renderExample(lessonData.example);
  els.keyPointsList.innerHTML = lessonData.keyPoints.map((item) => `<li>${item}</li>`).join('');
  els.diagramBox.innerHTML = lessonData.visual || diagram(lessonData.diagram, program.color, lessonData.title);
}

function renderExample(example) {
  if (!example) {
    return '<p>Relis le résumé puis reformule la notion avec un cas de ton choix.</p>';
  }

  if (Array.isArray(example)) {
    return example.map((item) => `<p>${item}</p>`).join('');
  }

  return example;
}

function renderExercises() {
  const program = programs[currentProgramIndex];
  const assessment = getAssessment(program);
  const courseHtml = assessment.course
    .map((item, index) => exerciseCard(`Question de cours ${index + 1}`, item.question, item.answer, `course-${index}`))
    .join('');
  const contextHtml = assessment.contexts.length
    ? assessment.contexts.map((item, index) => contextCard(item, index)).join('')
    : '<article class="exercise-card"><p class="leading-7 text-muted">Cette matière est surtout évaluée avec des questions de cours et des mini-analyses. Les cas pratiques lourds sont concentrés sur les matières techniques ciblées.</p></article>';

  els.exerciseList.innerHTML = `
    <div class="exercise-section-title"><span>Section 1</span><h3>Questions de cours</h3></div>
    <div class="grid gap-4">${courseHtml}</div>
    <div class="exercise-section-title"><span>Section 2</span><h3>Exercices contextualisés</h3></div>
    <div class="grid gap-4">${contextHtml}</div>
  `;

  els.exerciseList.querySelectorAll('.answer-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = document.querySelector(`#answer-${button.dataset.answerIndex}`);
      panel.classList.toggle('open');
      button.textContent = panel.classList.contains('open') ? 'Masquer le corrigé' : 'Voir le corrigé';
    });
  });
}

function exerciseCard(label, question, answer, id) {
  return `
    <article class="exercise-card">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span class="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">${label}</span>
          <h3 class="mt-2 font-manrope text-xl font-extrabold tracking-[-0.03em]">${question}</h3>
        </div>
        <button class="answer-toggle rounded-2xl border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink hover:bg-paper" type="button" data-answer-index="${id}">Voir le corrigé</button>
      </div>
      <div class="answer-panel" id="answer-${id}">
        <strong class="text-ink">Corrigé : </strong>${answer}
      </div>
    </article>
  `;
}

function contextCard(item, index) {
  return `
    <article class="exercise-card">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span class="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Cas pratique ${index + 1}</span>
          <h3 class="mt-2 font-manrope text-xl font-extrabold tracking-[-0.03em]">${item.title}</h3>
        </div>
        <button class="answer-toggle rounded-2xl border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink hover:bg-paper" type="button" data-answer-index="context-${index}">Voir le corrigé</button>
      </div>
      <div class="context-block">${item.context}</div>
      <ol class="question-list">${item.questions.map((question) => `<li>${question.question}</li>`).join('')}</ol>
      <div class="answer-panel" id="answer-context-${index}">
        ${item.questions.map((question, questionIndex) => `<p><strong class="text-ink">${questionIndex + 1}. </strong>${question.answer}</p>`).join('')}
      </div>
    </article>
  `;
}

function getAssessment(program) {
  const generatedCourse = program.lessons.map((item) => ({
    question: `Explique la notion « ${item.title} » et donne deux éléments importants à retenir.`,
    answer: `${item.intro} À retenir : ${item.keyPoints.slice(0, 2).join(' ')}`,
  }));
  const course = [...generatedCourse, ...(extraCourseQuestions[program.id] || [])].slice(0, 15);

  return {
    course,
    contexts: contextualExercises[program.id] || [],
  };
}

function courseQuestion(question, answer) {
  return { question, answer };
}

function contextualExercise(title, context, questions) {
  return { title, context, questions };
}

function contextualQuestion(question, answer) {
  return { question, answer };
}

const extraCourseQuestions = {
  'eco-num': [
    courseQuestion('Pourquoi le numérique tend-il parfois à concentrer les marchés ?', 'Parce que les plateformes bénéficient d’effets de réseau, d’économies d’échelle, de données massives et de coûts marginaux faibles. Plus la plateforme grossit, plus elle devient attractive.'),
    courseQuestion('Différencie donnée brute, information et connaissance dans une entreprise numérique.', 'La donnée brute est un fait isolé. L’information est une donnée interprétée. La connaissance est une information utilisable pour décider ou agir.'),
    courseQuestion('Explique le rôle du contrat électronique dans l’économie numérique.', 'Il encadre juridiquement une relation conclue en ligne : identification des parties, consentement, preuve, conditions de validité et obligations.'),
    courseQuestion('Cite quatre modèles de revenus numériques avec un exemple.', 'Abonnement : SaaS. Commission : marketplace. Publicité : réseau social. Freemium : application gratuite avec options premium.'),
    courseQuestion('Pourquoi la souveraineté numérique est-elle un enjeu économique ?', 'Elle concerne la capacité d’un État ou d’une organisation à maîtriser ses données, infrastructures, logiciels, règles de sécurité et dépendances technologiques.'),
  ],
  bd: [
    courseQuestion('Quelle différence entre clé primaire, clé étrangère et contrainte UNIQUE ?', 'La clé primaire identifie chaque ligne. La clé étrangère référence une clé d’une autre table. UNIQUE interdit les doublons sur une colonne ou combinaison.'),
    courseQuestion('Explique la différence entre WHERE et HAVING.', 'WHERE filtre les lignes avant regroupement. HAVING filtre les groupes après GROUP BY, souvent avec AVG, COUNT, SUM.'),
    courseQuestion('À quoi sert une table d’association ?', 'Elle représente une relation plusieurs-à-plusieurs. Exemple : inscriptions(etudiant_id, matiere_id) entre étudiants et matières.'),
    courseQuestion('Pourquoi faut-il éviter UPDATE ou DELETE sans WHERE ?', 'Sans WHERE, toutes les lignes de la table sont modifiées ou supprimées. C’est une erreur critique en base de données.'),
    courseQuestion('Quand un index peut-il être utile et quand peut-il être gênant ?', 'Il accélère les recherches, JOIN et WHERE fréquents. Il peut gêner les écritures car chaque INSERT, UPDATE ou DELETE doit aussi maintenir l’index.'),
  ],
  teleinfo: [
    courseQuestion('Compare transmission série et parallèle.', 'La série envoie les bits successivement sur une ligne, adaptée aux longues distances. La parallèle envoie plusieurs bits simultanément, rapide sur courte distance mais plus complexe.'),
    courseQuestion('Pourquoi un protocole est-il indispensable en téléinformatique ?', 'Il définit le format, l’ordre, le contrôle et l’interprétation des messages pour que deux machines se comprennent.'),
    courseQuestion('Différencie DSL, fibre optique et 4G/5G.', 'DSL utilise le cuivre téléphonique, la fibre transporte la lumière avec haut débit, la 4G/5G utilise les ondes radio pour la mobilité.'),
    courseQuestion('Explique le rôle de DHCP et NAT dans un réseau domestique.', 'DHCP attribue automatiquement IP, masque, passerelle et DNS. NAT traduit les adresses privées en adresse publique pour accéder à Internet.'),
    courseQuestion('Quelle méthode appliquer pour diagnostiquer une panne réseau ?', 'Vérifier support physique/Wi-Fi, configuration IP, passerelle, DNS, puis service distant. On teste du plus proche vers le plus lointain.'),
  ],
  web: [
    courseQuestion('Pourquoi utiliser PDO et les requêtes préparées en PHP ?', 'PDO facilite l’accès aux bases et les requêtes préparées séparent SQL et valeurs, ce qui réduit fortement le risque d’injection SQL.'),
    courseQuestion('Différencie GET, POST, SESSION et COOKIE.', 'GET transmet dans l’URL, POST dans le corps de requête, SESSION stocke côté serveur, COOKIE stocke côté navigateur.'),
    courseQuestion('Explique XSS et la protection principale en PHP.', 'XSS injecte du HTML/JS dans une page. On protège l’affichage avec htmlspecialchars et on valide les entrées.'),
    courseQuestion('Dans une architecture PHP/MySQL, qui exécute quoi ?', 'Le navigateur envoie HTTP. Le serveur exécute PHP. PHP interroge MySQL. Le serveur renvoie du HTML/CSS/JS au navigateur.'),
    courseQuestion('Pourquoi séparer includes, pages, actions et assets ?', 'Cela rend le projet plus maintenable : configuration et fonctions dans includes, affichage dans pages, traitements POST dans actions, fichiers statiques dans assets.'),
  ],
  reseaux: [
    courseQuestion('Pourquoi créer des VLAN dans un réseau local ?', 'Pour segmenter logiquement le réseau, réduire le broadcast, améliorer la sécurité et séparer les groupes comme administration, étudiants et invités.'),
    courseQuestion('Explique la différence entre routage statique et dynamique.', 'Le routage statique est configuré manuellement. Le routage dynamique échange automatiquement des routes via RIP, OSPF ou BGP.'),
    courseQuestion('Pourquoi la route la plus précise est choisie ?', 'Le routeur choisit la correspondance avec le préfixe le plus long, car elle désigne le réseau de destination le plus spécifique.'),
    courseQuestion('Compare RIP et OSPF.', 'RIP utilise le nombre de sauts et convient aux petits réseaux. OSPF utilise l’état des liens et un coût, mieux adapté aux réseaux plus grands.'),
    courseQuestion('À quoi sert NAT ?', 'NAT traduit des adresses privées en adresse publique, permettant à plusieurs machines internes d’accéder à Internet avec une adresse publique.'),
  ],
  'c-linux': [
    courseQuestion('Donne l’ordre complet d’un serveur TCP en C sous Linux.', 'socket(), bind(), listen(), accept(), recv()/send(), close(). Il faut vérifier chaque retour d’appel système.'),
    courseQuestion('Pourquoi htons() est-il nécessaire pour un port ?', 'Parce que les données réseau utilisent un ordre d’octets standard. htons convertit un entier court de l’ordre machine vers l’ordre réseau.'),
    courseQuestion('Différencie SOCK_STREAM et SOCK_DGRAM.', 'SOCK_STREAM correspond à TCP, fiable et connecté. SOCK_DGRAM correspond à UDP, sans connexion et non garanti.'),
    courseQuestion('Que signifie recv() qui retourne 0 ?', 'Cela signifie que le pair distant a fermé proprement la connexion TCP.'),
    courseQuestion('Pourquoi TCP ne garantit-il pas les frontières de messages ?', 'TCP transporte un flux d’octets. Un message envoyé peut être reçu en plusieurs morceaux ou regroupé avec d’autres, donc l’application doit définir son protocole.'),
  ],
  telecom: [
    courseQuestion('Différencie débit binaire et baud.', 'Le débit binaire mesure les bits par seconde. Le baud mesure les symboles par seconde. Un symbole peut représenter plusieurs bits.'),
    courseQuestion('Compare AM, FM et PM.', 'AM modifie l’amplitude, FM modifie la fréquence, PM modifie la phase de la porteuse.'),
    courseQuestion('Pourquoi la fibre optique offre-t-elle de hauts débits ?', 'Elle transporte la lumière, subit peu d’atténuation, résiste mieux aux perturbations électromagnétiques et possède une grande bande passante.'),
    courseQuestion('Explique l’intérêt des cellules dans un réseau mobile.', 'Les cellules permettent de couvrir un territoire, réutiliser les fréquences dans différentes zones et gérer la mobilité via handover.'),
    courseQuestion('Pourquoi une modulation plus complexe exige-t-elle un bon rapport signal/bruit ?', 'Parce que les états du signal sont plus proches les uns des autres. Le bruit peut les confondre et provoquer des erreurs.'),
  ],
  virtualisation: [
    courseQuestion('Compare hyperviseur type 1 et type 2.', 'Le type 1 tourne directement sur le matériel et convient à la production. Le type 2 tourne sur un OS hôte et convient surtout aux tests ou à l’apprentissage.'),
    courseQuestion('Différencie NAT, bridge et host-only pour une VM.', 'NAT donne accès Internet via l’hôte, bridge rend la VM visible sur le LAN, host-only isole la VM avec l’hôte et les VM du même réseau.'),
    courseQuestion('Pourquoi un snapshot n’est-il pas une sauvegarde longue durée ?', 'Il dépend souvent de la chaîne de disques de la VM et peut ralentir ou compliquer le stockage. Une vraie sauvegarde doit être restaurable hors hôte.'),
    courseQuestion('Compare VM et conteneur.', 'Une VM virtualise un OS complet. Un conteneur isole un processus/application en partageant le noyau de l’hôte.'),
    courseQuestion('Explique IaaS, PaaS et SaaS avec un exemple.', 'IaaS : VM cloud. PaaS : plateforme de déploiement. SaaS : application prête comme Gmail ou Microsoft 365.'),
  ],
};

const contextualExercises = {
  bd: [
    contextualExercise('Gestion des étudiants et notes', 'Une école veut gérer des étudiants, des filières, des matières et les notes obtenues. Un étudiant appartient à une filière. Une matière peut recevoir plusieurs notes pour plusieurs étudiants.', [
      contextualQuestion('Propose les tables principales avec les clés.', `${codeBlock('filieres(id PK, nom UNIQUE)\netudiants(id PK, nom, prenom, filiere_id FK)\nmatieres(id PK, nom, coefficient)\nnotes(id PK, etudiant_id FK, matiere_id FK, note, date_eval)')}`),
      contextualQuestion('Écris la requête SQL qui affiche nom, prénom, filière des étudiants de la filière “Réseaux”.', `${codeBlock('SELECT e.nom, e.prenom, f.nom AS filiere\nFROM etudiants e\nJOIN filieres f ON f.id = e.filiere_id\nWHERE f.nom = \'Réseaux\'\nORDER BY e.nom;')}`),
      contextualQuestion('Écris une requête qui calcule la moyenne de chaque étudiant.', `${codeBlock('SELECT e.id, e.nom, e.prenom, AVG(n.note) AS moyenne\nFROM etudiants e\nJOIN notes n ON n.etudiant_id = e.id\nGROUP BY e.id, e.nom, e.prenom;')}`),
      contextualQuestion('Quelle contrainte ajouter pour empêcher une note hors intervalle 0-20 ?', `${codeBlock('note DECIMAL(4,2) CHECK (note >= 0 AND note <= 20)')}`),
    ]),
    contextualExercise('Transactions bancaires', 'Deux comptes existent : A a 80 000 FCFA, B a 25 000 FCFA. On veut transférer 15 000 FCFA de A vers B sans risque d’incohérence.', [
      contextualQuestion('Écris les requêtes SQL de transaction.', `${codeBlock('START TRANSACTION;\nUPDATE comptes SET solde = solde - 15000 WHERE id = 1;\nUPDATE comptes SET solde = solde + 15000 WHERE id = 2;\nCOMMIT;')}`),
      contextualQuestion('Quels sont les nouveaux soldes si tout réussit ?', 'A = 65 000 FCFA. B = 40 000 FCFA.'),
      contextualQuestion('Que faire si le crédit de B échoue après le débit de A ?', `${codeBlock('ROLLBACK;')} On annule toute la transaction pour revenir à l’état initial.`),
      contextualQuestion('Quelle propriété ACID correspond au “tout ou rien” ?', 'L’atomicité.'),
    ]),
    contextualExercise('Normalisation', 'Une table ventes contient : id_vente, date, nom_client, telephone_client, nom_produit, prix_produit, quantite. Le même client et le même produit apparaissent plusieurs fois.', [
      contextualQuestion('Quel problème principal observes-tu ?', 'Il y a redondance : les informations client et produit sont répétées dans chaque vente, ce qui crée des anomalies de mise à jour.'),
      contextualQuestion('Propose une décomposition en 3 tables.', `${codeBlock('clients(id, nom, telephone)\nproduits(id, nom, prix)\nventes(id, date, client_id, produit_id, quantite)')}`),
      contextualQuestion('Écris une requête qui affiche le total par vente.', `${codeBlock('SELECT v.id, c.nom, p.nom AS produit, v.quantite,\n       p.prix * v.quantite AS total\nFROM ventes v\nJOIN clients c ON c.id = v.client_id\nJOIN produits p ON p.id = v.produit_id;')}`),
    ]),
  ],
  web: [
    contextualExercise('Formulaire d’inscription PHP', 'On veut créer une page inscription.php qui reçoit nom, email et mot de passe via POST puis insère l’utilisateur dans MySQL avec PDO.', [
      contextualQuestion('Écris le formulaire HTML minimal.', `${codeBlock('<form method="post" action="inscription.php">\n  <input name="nom" required>\n  <input name="email" type="email" required>\n  <input name="password" type="password" required>\n  <button>S’inscrire</button>\n</form>')}`),
      contextualQuestion('Écris la requête préparée PDO d’insertion.', `${codeBlock('$sql = "INSERT INTO users(nom, email, password_hash) VALUES (:nom, :email, :hash)";\n$stmt = $pdo->prepare($sql);\n$stmt->execute([\n  "nom" => $_POST["nom"],\n  "email" => $_POST["email"],\n  "hash" => password_hash($_POST["password"], PASSWORD_DEFAULT)\n]);')}`),
      contextualQuestion('Pourquoi ne faut-il pas stocker le mot de passe en clair ?', 'Parce qu’une fuite de base exposerait directement les mots de passe. Il faut stocker un hash avec password_hash puis vérifier avec password_verify.'),
      contextualQuestion('Quelle protection utiliser à l’affichage du nom ?', `${codeBlock('echo htmlspecialchars($user["nom"], ENT_QUOTES, "UTF-8");')}`),
    ]),
    contextualExercise('Recherche d’articles', 'Une page articles.php reçoit un mot-clé q dans l’URL et doit afficher les articles dont le titre contient ce mot.', [
      contextualQuestion('Quelle méthode HTTP est la plus adaptée ?', 'GET, car une recherche ne modifie pas les données et l’URL peut être partagée, par exemple articles.php?q=reseau.'),
      contextualQuestion('Écris la requête préparée PDO.', `${codeBlock('$q = $_GET["q"] ?? "";\n$stmt = $pdo->prepare("SELECT titre, contenu FROM articles WHERE titre LIKE :q");\n$stmt->execute(["q" => "%" . $q . "%"]);')}`),
      contextualQuestion('Quel risque évite la requête préparée ?', 'Elle évite que le mot-clé utilisateur modifie la structure SQL : protection contre l’injection SQL.'),
    ]),
  ],
  reseaux: [
    contextualExercise('Plan d’adressage IPv4', 'Une entreprise reçoit le réseau 192.168.20.0/24. Elle veut 4 sous-réseaux de taille identique pour ADMIN, ETUDIANTS, SERVEURS et INVITES.', [
      contextualQuestion('Quel nouveau préfixe faut-il utiliser ?', 'Il faut emprunter 2 bits pour obtenir 4 sous-réseaux : /26.'),
      contextualQuestion('Donne les 4 réseaux obtenus.', '192.168.20.0/26, 192.168.20.64/26, 192.168.20.128/26, 192.168.20.192/26.'),
      contextualQuestion('Combien d’hôtes utilisables par sous-réseau ?', 'Un /26 contient 64 adresses, donc 62 hôtes utilisables après réseau et broadcast.'),
      contextualQuestion('Donne la plage utilisable du sous-réseau 192.168.20.64/26.', 'Réseau : 192.168.20.64. Broadcast : 192.168.20.127. Hôtes : 192.168.20.65 à 192.168.20.126.'),
    ]),
    contextualExercise('Routage statique', 'R1 relie LAN1 192.168.1.0/24 et le lien 10.0.0.0/30. R2 relie LAN2 192.168.2.0/24 et le même lien. R1 = 10.0.0.1, R2 = 10.0.0.2.', [
      contextualQuestion('Quelle route statique configurer sur R1 vers LAN2 ?', `${codeBlock('ip route 192.168.2.0 255.255.255.0 10.0.0.2')}`),
      contextualQuestion('Quelle route statique configurer sur R2 vers LAN1 ?', `${codeBlock('ip route 192.168.1.0 255.255.255.0 10.0.0.1')}`),
      contextualQuestion('Si R1 n’a pas de route vers 192.168.2.0/24, que se passe-t-il ?', 'R1 ne sait pas acheminer les paquets vers LAN2. Les paquets sont supprimés sauf s’il existe une route par défaut appropriée.'),
    ]),
    contextualExercise('VLAN et inter-VLAN', 'Un switch possède VLAN 10 ETUDIANTS et VLAN 20 ADMIN. Les postes des deux VLAN doivent accéder à Internet et parfois communiquer via un routeur.', [
      contextualQuestion('Pourquoi les deux VLAN ne communiquent-ils pas directement ?', 'Chaque VLAN est un domaine de broadcast séparé. La communication entre VLAN nécessite un équipement de couche 3 : routeur ou switch L3.'),
      contextualQuestion('Quel principe permet le routage inter-VLAN sur un seul lien ?', 'Router-on-a-stick : un lien trunk transporte plusieurs VLAN vers le routeur, qui utilise des sous-interfaces par VLAN.'),
      contextualQuestion('Donne deux avantages des VLAN.', 'Sécurité par séparation logique, réduction du broadcast, meilleure organisation, administration plus claire.'),
    ]),
  ],
  'c-linux': [
    contextualExercise('Serveur TCP echo', 'On veut écrire un serveur TCP qui écoute sur le port 9000 et renvoie au client tout message reçu.', [
      contextualQuestion('Donne l’ordre des appels système côté serveur.', 'socket(), bind(), listen(), accept(), recv(), send(), close().'),
      contextualQuestion('Écris la création de socket TCP IPv4.', `${codeBlock('int s = socket(AF_INET, SOCK_STREAM, 0);\nif (s < 0) { perror("socket"); return 1; }')}`),
      contextualQuestion('Écris l’affectation du port 9000 dans sockaddr_in.', `${codeBlock('struct sockaddr_in addr;\naddr.sin_family = AF_INET;\naddr.sin_port = htons(9000);\naddr.sin_addr.s_addr = INADDR_ANY;')}`),
      contextualQuestion('Pourquoi faut-il utiliser htons(9000) ?', 'Pour convertir le port de l’ordre d’octets de la machine vers l’ordre réseau.'),
    ]),
    contextualExercise('Lecture partielle TCP', 'Un client envoie un message de 100 octets. Le serveur appelle recv() une fois et reçoit seulement 40 octets.', [
      contextualQuestion('Est-ce une erreur TCP ?', 'Non. TCP est un flux d’octets. Il garantit l’ordre, mais pas qu’un recv récupère tout le message applicatif d’un coup.'),
      contextualQuestion('Quelle stratégie utiliser pour lire les 100 octets ?', `${codeBlock('int total = 0;\nwhile (total < 100) {\n  int n = recv(sock, buffer + total, 100 - total, 0);\n  if (n <= 0) break;\n  total += n;\n}')}`),
      contextualQuestion('Quelle autre stratégie de protocole applicatif peut-on utiliser ?', 'Ajouter un délimiteur comme \n, ou envoyer d’abord la taille du message puis lire exactement cette taille.'),
    ]),
    contextualExercise('UDP', 'Un programme doit envoyer régulièrement une température à un serveur. Si une mesure est perdue, la mesure suivante remplace l’ancienne.', [
      contextualQuestion('TCP ou UDP est le plus adapté ?', 'UDP peut être adapté, car la perte ponctuelle d’une mesure est acceptable et la faible latence est intéressante.'),
      contextualQuestion('Quelles fonctions utiliser pour envoyer et recevoir ?', 'sendto() pour envoyer un datagramme, recvfrom() pour recevoir avec l’adresse de l’émetteur.'),
      contextualQuestion('Quelle garantie UDP ne fournit-il pas ?', 'Il ne garantit ni livraison, ni ordre, ni absence de duplication.'),
    ]),
  ],
  teleinfo: [
    contextualExercise('Choix du mode de transmission', 'Un système de vidéosurveillance envoie uniquement des images d’une caméra vers un centre de contrôle. Le centre n’envoie pas de commande vers la caméra.', [
      contextualQuestion('Quel mode de transmission décrit ce cas ?', 'Simplex, car l’information circule dans un seul sens : caméra vers centre.'),
      contextualQuestion('Si le centre devait aussi contrôler l’orientation de la caméra, quel mode deviendrait nécessaire ?', 'Half-duplex ou full-duplex selon si commandes et vidéo peuvent circuler en même temps. Pour contrôle fluide + vidéo, full-duplex est préférable.'),
      contextualQuestion('Quel support serait pertinent pour longue distance et haut débit ?', 'La fibre optique si l’infrastructure existe, sinon une liaison radio selon le terrain et la mobilité.'),
    ]),
    contextualExercise('Diagnostic d’accès Internet', 'Un PC a l’adresse 192.168.1.50/24, passerelle 192.168.1.1. ping 192.168.1.1 fonctionne, ping 8.8.8.8 fonctionne, mais ping google.com échoue.', [
      contextualQuestion('Quelle panne est la plus probable ?', 'Un problème DNS, car l’accès IP fonctionne mais la résolution de nom échoue.'),
      contextualQuestion('Quel paramètre faut-il vérifier ?', 'L’adresse du serveur DNS configuré par DHCP ou manuellement.'),
      contextualQuestion('Quelle commande permettrait de confirmer la résolution DNS ?', 'nslookup google.com ou dig google.com selon le système.'),
    ]),
    contextualExercise('Débit utile', 'Une liaison annonce 100 Mbit/s. Le protocole et les erreurs consomment environ 12 % du débit. On veut transférer un fichier de 900 Mo.', [
      contextualQuestion('Quel est le débit utile approximatif ?', '100 Mbit/s × 0,88 = 88 Mbit/s.'),
      contextualQuestion('Convertis 900 Mo en Mbits approximativement.', '900 Mo × 8 = 7200 Mbits.'),
      contextualQuestion('Calcule le temps de transfert approximatif.', '7200 Mbits / 88 Mbit/s ≈ 81,8 s, donc environ 82 secondes.'),
    ]),
  ],
  telecom: [
    contextualExercise('Débit binaire et symboles', 'Une modulation transmet 4 bits par symbole avec un débit symbole de 2400 bauds.', [
      contextualQuestion('Calcule le débit binaire.', 'Débit binaire = 2400 symboles/s × 4 bits/symbole = 9600 bit/s.'),
      contextualQuestion('Si on passe à 6 bits par symbole au même baud, quel débit obtient-on ?', '2400 × 6 = 14 400 bit/s.'),
      contextualQuestion('Pourquoi ne peut-on pas augmenter indéfiniment le nombre de bits par symbole ?', 'Parce que les états du signal deviennent plus proches et le bruit provoque davantage d’erreurs.'),
    ]),
    contextualExercise('Atténuation', 'Un câble présente une atténuation de 2 dB par km. La liaison mesure 8 km.', [
      contextualQuestion('Calcule l’atténuation totale.', '2 dB/km × 8 km = 16 dB.'),
      contextualQuestion('Que signifie une atténuation élevée ?', 'Le signal reçu est beaucoup plus faible, ce qui peut augmenter les erreurs ou nécessiter amplification/répéteurs.'),
      contextualQuestion('Quel support choisir pour réduire l’atténuation sur longue distance ?', 'La fibre optique est souvent préférable pour les longues distances et hauts débits.'),
    ]),
    contextualExercise('Réseau mobile', 'Un utilisateur se déplace en voiture pendant un appel vidéo 4G. Il passe de la couverture d’une antenne A à celle d’une antenne B.', [
      contextualQuestion('Quel mécanisme maintient la communication ?', 'Le handover transfère la communication d’une cellule/antenne à une autre.'),
      contextualQuestion('Pourquoi découper le territoire en cellules ?', 'Pour couvrir progressivement le territoire, réutiliser les fréquences et augmenter la capacité globale.'),
      contextualQuestion('Quel problème peut survenir si le handover échoue ?', 'Coupure d’appel, perte de paquets, forte latence ou dégradation de la vidéo.'),
    ]),
  ],
};

function diagram(type, color, title) {
  const safeTitle = escapeHtml(title);
  const diagrams = {
    flow: `<svg viewBox="0 0 420 260" role="img" aria-label="Schéma ${safeTitle}"><rect x="18" y="92" width="102" height="70" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="159" y="92" width="102" height="70" rx="18" fill="${color}"/><rect x="300" y="92" width="102" height="70" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M124 127h30M265 127h30" stroke="#172033" stroke-width="5" stroke-linecap="round"/><text x="69" y="133" text-anchor="middle" font-weight="800" font-size="14">Source</text><text x="210" y="133" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">Canal</text><text x="351" y="133" text-anchor="middle" font-weight="800" font-size="14">Cible</text></svg>`,
    network: `<svg viewBox="0 0 420 260" role="img" aria-label="Réseau d'acteurs"><circle cx="210" cy="130" r="55" fill="${color}"/><circle cx="80" cy="70" r="34" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="340" cy="70" r="34" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="95" cy="205" r="34" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="325" cy="205" r="34" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M110 84l55 25M310 84l-55 25M125 195l48-35M295 195l-48-35" stroke="#172033" stroke-width="4"/><text x="210" y="135" text-anchor="middle" fill="#fff" font-weight="900" font-size="15">Plateforme</text></svg>`,
    layers: `<svg viewBox="0 0 420 260" role="img" aria-label="Couches"><rect x="70" y="55" width="280" height="46" rx="14" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="92" y="108" width="236" height="46" rx="14" fill="${color}"/><rect x="114" y="161" width="192" height="46" rx="14" fill="#172033"/><text x="210" y="84" text-anchor="middle" font-weight="800">Interface</text><text x="210" y="137" text-anchor="middle" fill="#fff" font-weight="800">Logique</text><text x="210" y="190" text-anchor="middle" fill="#fff" font-weight="800">Infrastructure</text></svg>`,
    pipeline: `<svg viewBox="0 0 420 260" role="img" aria-label="Pipeline"><path d="M50 130h320" stroke="#172033" stroke-width="8" stroke-linecap="round"/><circle cx="70" cy="130" r="34" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="160" cy="130" r="34" fill="${color}"/><circle cx="250" cy="130" r="34" fill="#e98645"/><circle cx="340" cy="130" r="34" fill="#fffdf8" stroke="#172033" stroke-width="3"/><text x="70" y="135" text-anchor="middle" font-weight="900" font-size="12">1</text><text x="160" y="135" text-anchor="middle" fill="#fff" font-weight="900" font-size="12">2</text><text x="250" y="135" text-anchor="middle" fill="#fff" font-weight="900" font-size="12">3</text><text x="340" y="135" text-anchor="middle" font-weight="900" font-size="12">4</text></svg>`,
    shield: `<svg viewBox="0 0 420 260" role="img" aria-label="Protection"><path d="M210 40l112 38v66c0 65-45 101-112 125C143 245 98 209 98 144V78l112-38z" fill="${color}"/><path d="M162 134l32 32 70-78" fill="none" stroke="#fffdf8" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    loop: `<svg viewBox="0 0 420 260" role="img" aria-label="Cycle"><circle cx="210" cy="130" r="82" fill="none" stroke="#172033" stroke-width="8" stroke-dasharray="150 35"/><circle cx="210" cy="48" r="22" fill="${color}"/><circle cx="292" cy="130" r="22" fill="#e98645"/><circle cx="210" cy="212" r="22" fill="#172033"/><circle cx="128" cy="130" r="22" fill="#fffdf8" stroke="#172033" stroke-width="3"/><text x="210" y="136" text-anchor="middle" font-weight="900">Améliorer</text></svg>`,
    database: `<svg viewBox="0 0 420 260" role="img" aria-label="Base de données"><ellipse cx="210" cy="70" rx="105" ry="38" fill="${color}"/><path d="M105 70v110c0 21 47 38 105 38s105-17 105-38V70" fill="${color}" opacity=".9"/><ellipse cx="210" cy="180" rx="105" ry="38" fill="none" stroke="#172033" stroke-width="4"/><path d="M105 106c0 21 47 38 105 38s105-17 105-38" fill="none" stroke="#172033" stroke-width="4"/><text x="210" y="75" text-anchor="middle" fill="#fff" font-weight="900">Données</text></svg>`,
    relations: `<svg viewBox="0 0 420 260"><rect x="45" y="60" width="120" height="140" rx="16" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="255" y="60" width="120" height="140" rx="16" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M166 130h88" stroke="${color}" stroke-width="7"/><text x="105" y="100" text-anchor="middle" font-weight="900">Table A</text><text x="315" y="100" text-anchor="middle" font-weight="900">Table B</text><text x="210" y="118" text-anchor="middle" font-weight="900">FK</text></svg>`,
    query: `<svg viewBox="0 0 420 260"><rect x="50" y="60" width="320" height="140" rx="20" fill="#172033"/><text x="78" y="105" fill="#a7f3d0" font-family="monospace" font-size="20">SELECT *</text><text x="78" y="135" fill="#fffdf8" font-family="monospace" font-size="20">FROM cours</text><text x="78" y="165" fill="#f7d8a7" font-family="monospace" font-size="20">WHERE exam = true;</text></svg>`,
    speed: `<svg viewBox="0 0 420 260"><path d="M95 188a120 120 0 11230 0" fill="none" stroke="#172033" stroke-width="10" stroke-linecap="round"/><path d="M210 168l82-82" stroke="${color}" stroke-width="12" stroke-linecap="round"/><circle cx="210" cy="168" r="18" fill="#e98645"/><text x="210" y="224" text-anchor="middle" font-weight="900">Performance</text></svg>`,
    waves: `<svg viewBox="0 0 420 260"><path d="M36 130c45-86 90 86 135 0s90-86 135 0 45 86 78 0" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/><path d="M50 185h320" stroke="#172033" stroke-width="4"/><text x="210" y="215" text-anchor="middle" font-weight="900">Signal + bruit</text></svg>`,
    duplex: `<svg viewBox="0 0 420 260"><rect x="50" y="82" width="100" height="96" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="270" y="82" width="100" height="96" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M162 112h96M258 148h-96" stroke="${color}" stroke-width="8" stroke-linecap="round"/><text x="100" y="136" text-anchor="middle" font-weight="900">A</text><text x="320" y="136" text-anchor="middle" font-weight="900">B</text></svg>`,
    multiplex: `<svg viewBox="0 0 420 260"><path d="M50 65h100l70 65-70 65H50" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M270 65h100v130H270l-70-65 70-65z" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M70 92h85M70 130h85M70 168h85M265 130h85" stroke="${color}" stroke-width="7" stroke-linecap="round"/></svg>`,
    packets: `<svg viewBox="0 0 420 260"><rect x="55" y="95" width="70" height="70" rx="16" fill="${color}"/><rect x="145" y="95" width="70" height="70" rx="16" fill="#e98645"/><rect x="235" y="95" width="70" height="70" rx="16" fill="#172033"/><path d="M318 130h50" stroke="#172033" stroke-width="7" stroke-linecap="round"/><text x="90" y="136" text-anchor="middle" fill="#fff" font-weight="900">P1</text><text x="180" y="136" text-anchor="middle" fill="#fff" font-weight="900">P2</text><text x="270" y="136" text-anchor="middle" fill="#fff" font-weight="900">P3</text></svg>`,
    clientserver: `<svg viewBox="0 0 420 260"><rect x="48" y="80" width="120" height="100" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="252" y="60" width="120" height="140" rx="18" fill="${color}"/><path d="M178 112h64M242 150h-64" stroke="#172033" stroke-width="7" stroke-linecap="round"/><text x="108" y="135" text-anchor="middle" font-weight="900">Client</text><text x="312" y="135" text-anchor="middle" fill="#fff" font-weight="900">Serveur</text></svg>`,
    grid: `<svg viewBox="0 0 420 260"><rect x="55" y="45" width="310" height="170" rx="20" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M55 102h310M55 158h310M158 45v170M262 45v170" stroke="${color}" stroke-width="5"/><text x="210" y="238" text-anchor="middle" font-weight="900">Grille responsive</text></svg>`,
    api: `<svg viewBox="0 0 420 260"><rect x="50" y="78" width="120" height="104" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="250" y="78" width="120" height="104" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M180 110h60M240 150h-60" stroke="${color}" stroke-width="7"/><text x="110" y="136" text-anchor="middle" font-weight="900">App</text><text x="310" y="136" text-anchor="middle" font-weight="900">API</text></svg>`,
    osi: `<svg viewBox="0 0 420 260"><g font-weight="900" font-size="12" text-anchor="middle"><rect x="130" y="35" width="160" height="25" rx="8" fill="#fffdf8" stroke="#172033"/><text x="210" y="53">Application</text><rect x="130" y="65" width="160" height="25" rx="8" fill="#fffdf8" stroke="#172033"/><text x="210" y="83">Présentation</text><rect x="130" y="95" width="160" height="25" rx="8" fill="#fffdf8" stroke="#172033"/><text x="210" y="113">Session</text><rect x="130" y="125" width="160" height="25" rx="8" fill="${color}"/><text x="210" y="143" fill="#fff">Transport</text><rect x="130" y="155" width="160" height="25" rx="8" fill="${color}"/><text x="210" y="173" fill="#fff">Réseau</text><rect x="130" y="185" width="160" height="25" rx="8" fill="#172033"/><text x="210" y="203" fill="#fff">Liaison</text><rect x="130" y="215" width="160" height="25" rx="8" fill="#172033"/><text x="210" y="233" fill="#fff">Physique</text></g></svg>`,
    subnet: `<svg viewBox="0 0 420 260"><rect x="60" y="95" width="300" height="70" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="60" y="95" width="210" height="70" rx="18" fill="${color}"/><text x="165" y="136" text-anchor="middle" fill="#fff" font-weight="900">Réseau /24</text><text x="315" y="136" text-anchor="middle" font-weight="900">Hôte</text></svg>`,
    switch: `<svg viewBox="0 0 420 260"><rect x="140" y="100" width="140" height="70" rx="18" fill="${color}"/><circle cx="80" cy="60" r="25" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="340" cy="60" r="25" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="80" cy="210" r="25" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="340" cy="210" r="25" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M103 72l50 36M317 72l-50 36M103 198l50-36M317 198l-50-36" stroke="#172033" stroke-width="4"/><text x="210" y="142" text-anchor="middle" fill="#fff" font-weight="900">Switch</text></svg>`,
    routes: `<svg viewBox="0 0 420 260"><circle cx="210" cy="130" r="42" fill="${color}"/><path d="M210 88V45M210 172v43M168 130H85M252 130h83" stroke="#172033" stroke-width="7" stroke-linecap="round"/><text x="210" y="136" text-anchor="middle" fill="#fff" font-weight="900">R</text></svg>`,
    services: `<svg viewBox="0 0 420 260"><rect x="70" y="55" width="120" height="62" rx="16" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="230" y="55" width="120" height="62" rx="16" fill="${color}"/><rect x="70" y="145" width="120" height="62" rx="16" fill="#e98645"/><rect x="230" y="145" width="120" height="62" rx="16" fill="#172033"/><text x="130" y="92" text-anchor="middle" font-weight="900">DNS</text><text x="290" y="92" text-anchor="middle" fill="#fff" font-weight="900">DHCP</text><text x="130" y="182" text-anchor="middle" fill="#fff" font-weight="900">NAT</text><text x="290" y="182" text-anchor="middle" fill="#fff" font-weight="900">FW</text></svg>`,
    diagnostic: `<svg viewBox="0 0 420 260"><path d="M90 170l55-55 45 45 90-90" fill="none" stroke="${color}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="90" cy="170" r="20" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="145" cy="115" r="20" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="190" cy="160" r="20" fill="#fffdf8" stroke="#172033" stroke-width="3"/><circle cx="280" cy="70" r="20" fill="#fffdf8" stroke="#172033" stroke-width="3"/><text x="210" y="222" text-anchor="middle" font-weight="900">Tester étape par étape</text></svg>`,
    socket: `<svg viewBox="0 0 420 260"><rect x="55" y="90" width="120" height="80" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="245" y="90" width="120" height="80" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><path d="M176 130h68" stroke="${color}" stroke-width="10" stroke-linecap="round"/><text x="115" y="136" text-anchor="middle" font-weight="900">IP:Port</text><text x="305" y="136" text-anchor="middle" font-weight="900">IP:Port</text></svg>`,
    modulation: `<svg viewBox="0 0 420 260"><path d="M40 75c35-45 70 45 105 0s70-45 105 0 70 45 125 0" fill="none" stroke="#172033" stroke-width="5"/><path d="M40 155c35-85 70 85 105 0s70-85 105 0 70 85 125 0" fill="none" stroke="${color}" stroke-width="7"/><text x="210" y="218" text-anchor="middle" font-weight="900">Porteuse modulée</text></svg>`,
    media: `<svg viewBox="0 0 420 260"><rect x="52" y="74" width="88" height="112" rx="18" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="166" y="74" width="88" height="112" rx="18" fill="${color}"/><rect x="280" y="74" width="88" height="112" rx="18" fill="#e98645"/><text x="96" y="137" text-anchor="middle" font-weight="900">Cuivre</text><text x="210" y="137" text-anchor="middle" fill="#fff" font-weight="900">Fibre</text><text x="324" y="137" text-anchor="middle" fill="#fff" font-weight="900">Radio</text></svg>`,
    cellular: `<svg viewBox="0 0 420 260"><path d="M210 130m-45 0a45 45 0 1090 0a45 45 0 10-90 0" fill="${color}"/><path d="M210 40v180M132 85l156 90M288 85l-156 90" stroke="#172033" stroke-width="4"/><circle cx="210" cy="130" r="12" fill="#fffdf8"/><text x="210" y="238" text-anchor="middle" font-weight="900">Cellules radio</text></svg>`,
    vm: `<svg viewBox="0 0 420 260"><rect x="60" y="50" width="300" height="160" rx="20" fill="#172033"/><rect x="88" y="78" width="80" height="104" rx="14" fill="#fffdf8"/><rect x="170" y="78" width="80" height="104" rx="14" fill="${color}"/><rect x="252" y="78" width="80" height="104" rx="14" fill="#e98645"/><text x="210" y="232" text-anchor="middle" font-weight="900">Hyperviseur</text></svg>`,
    containers: `<svg viewBox="0 0 420 260"><rect x="65" y="70" width="290" height="50" rx="14" fill="#fffdf8" stroke="#172033" stroke-width="3"/><rect x="65" y="125" width="290" height="50" rx="14" fill="${color}"/><rect x="65" y="180" width="290" height="50" rx="14" fill="#172033"/><text x="210" y="101" text-anchor="middle" font-weight="900">App + dépendances</text><text x="210" y="156" text-anchor="middle" fill="#fff" font-weight="900">Runtime conteneur</text><text x="210" y="211" text-anchor="middle" fill="#fff" font-weight="900">Noyau hôte</text></svg>`,
    cloud: `<svg viewBox="0 0 420 260"><path d="M128 178h160c40 0 72-28 72-64s-32-64-72-64c-18-30-72-36-105-6-36-10-79 17-79 55-30 4-52 27-52 55 0 14 30 24 76 24z" fill="${color}"/><text x="210" y="129" text-anchor="middle" fill="#fff" font-weight="900">Cloud</text><text x="210" y="224" text-anchor="middle" font-weight="900">IaaS · PaaS · SaaS</text></svg>`,
  };

  return diagrams[type] || diagrams.flow;
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

init();
