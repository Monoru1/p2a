# Document de conception — P2A Formation

> Statut : **à valider avant le développement des pages de production**  
> Objectif métier : faire de P2A Formation une plateforme de confiance qui oriente rapidement chaque visiteur vers un échange qualifié.

## 1. Sources analysées

- Site vitrine : https://p2aformation.fr/
- Liste détaillée : https://p2aformation.fr/prestations
- Catalogue : https://p2aformation.catalogue.teetche.com/
- Documents officiels transmis : SST / MAC SST ; hygiène alimentaire et allergènes.

### Constats

1. L’offre est fragmentée entre un site vitrine, une liste de prestations et un catalogue Teetche.
2. Les formations courtes et les parcours métier longs sont présentés sur le même niveau de lecture.
3. Les contenus pédagogiques existent mais sont difficiles à comparer et arrivent trop tard dans le parcours.
4. Financements, accessibilité et modalités sont rarement contextualisés.
5. Le contact intervient comme une sortie de navigation, pas comme la suite naturelle d’une décision.
6. La qualité P2A (terrain, accompagnement, Qualiopi, personnalisation) est présente dans les textes mais pas structurée comme preuve de confiance.

## 2. Positionnement produit

**Promesse :** P2A aide les organisations et les professionnels à transformer un besoin de compétence en parcours utile, compréhensible et réalisable.

- Une réponse claire en moins de dix secondes.
- Des preuves avant les promesses.
- Une orientation distincte pour entreprises et particuliers.
- Des parcours immédiatement exploitables, sans tunnel commercial agressif.
- Une prise de contact contextualisée, jamais générique.

## 3. Arborescence cible

```text
Accueil
├── Formations
│   ├── Catalogue
│   ├── Prévention & sécurité
│   ├── Santé & médico-social
│   ├── Hygiène alimentaire
│   ├── QVT & management
│   └── Fiche formation
├── Entreprises
│   ├── Former mes équipes
│   ├── Formation intra-entreprise
│   └── Financer un projet entreprise
├── Particuliers
│   ├── Trouver un parcours métier
│   └── Financer mon parcours
├── Prestations
├── Financements
├── Qualiopi & accessibilité
├── L’entreprise
├── Ressources (actualités, documents, agenda)
├── Contact
└── Informations légales
```

## 4. Parcours visiteur — particulier

**Situation :** une personne cherche une reconversion, un parcours métier ou une formation finançable.

1. Arrive sur l’accueil via une recherche métier, locale ou formation.
2. Identifie immédiatement l’entrée **Trouver mon parcours**.
3. Accède au catalogue préfiltré sur les parcours métier ou recherche un sujet.
4. Compare durée, modalité, lieu, financement à étudier et prochaine étape.
5. Consulte une fiche détaillée : public, prérequis, déroulement, objectifs et documents.
6. Déclenche **Vérifier mon projet** ou **Être recontacté**.
7. Remplit un formulaire court, prérempli du nom de la formation et de sa situation.

Question à résoudre : « Est-ce que ce parcours me correspond, et puis-je réellement le financer ? »

## 5. Parcours visiteur — entreprise

**Situation :** un dirigeant, RH, manager ou référent prévention cherche une solution pour une équipe.

1. Arrive sur l’accueil ou une fiche via une problématique (SST, RPS, TMS, hygiène).
2. Comprend les quatre preuves : adaptation, pédagogie terrain, Qualiopi, accessibilité.
3. Utilise **Former mes équipes** ou une fiche formation.
4. Découvre les bénéfices métier avant le programme : conformité, prévention, transfert en situation réelle.
5. Consulte durée, format intra/inter, prérequis, évaluation et financements à étudier.
6. Déclenche **Demander un devis**.
7. Remplit une demande contextualisée : organisation, effectif, besoin, échéance.

Question à résoudre : « P2A peut-il comprendre mon contexte et construire une réponse fiable sans me faire perdre du temps ? »

## 6. CTA principaux

| CTA | Public | Emplacement | Intention |
|---|---|---|---|
| Explorer les formations | Tous | Hero, navigation | Découverte |
| Trouver mon parcours | Particulier | Accueil, catalogue | Orientation |
| Former mes équipes | Entreprise | Accueil, fiches | Qualification |
| Demander un devis | Entreprise | Fiche, prestations | Conversion |
| Vérifier mon financement | Tous | Fiche, financement | Réassurance |
| Être recontacté | Tous | Fin de page, contact | Conversion douce |
| Télécharger le programme | Prospect avancé | Fiche formation | Qualification et preuve |

## 7. Objectifs de chaque page

| Page | Objectif métier | Information prioritaire | CTA |
|---|---|---|---|
| Accueil | Comprendre P2A et orienter | Offre, publics, preuves | Explorer / Former mes équipes |
| Catalogue | Réduire le temps de recherche | Catégorie, format, durée, financement | Voir la fiche |
| Fiche formation | Aider à décider | Bénéfices, public, déroulement, modalités | Devis / Contact |
| Entreprises | Prouver la capacité B2B | Intra, adaptation, accompagnement | Construire mon projet |
| Particuliers | Réduire l’incertitude | Parcours, admission, financements | Vérifier mon projet |
| Prestations | Développer l’offre conseil | Problèmes traités, méthode, livrables | Échanger avec P2A |
| Financements | Rassurer sans surpromettre | Dispositifs et conditions | Étudier ma situation |
| Qualiopi & accessibilité | Construire la confiance | Engagements, processus, adaptations | Poser une question |
| Contact | Transformer l’intention | Réponse attendue, coordonnées, contexte | Envoyer ma demande |

## 8. Éléments supprimés ou refondus

- Séparation perçue entre vitrine, prestations et catalogue externe.
- Longues pages sans résumé initial ni progression.
- Listes sans distinction de public, niveau ou objectif.
- CTA « Réserver » sans contexte de décision.
- Promesses de financement non contextualisées.
- Informations critiques cachées dans de longs blocs de texte.

## 9. Nouveaux éléments proposés

- Sélecteur d’entrée Entreprise / Particulier.
- Catalogue unifié : recherche, catégorie, durée, format, financement, nouveautés et recommandations.
- Fiche formation narrative : temps forts, compétences, déroulement, FAQ, documents et formations liées.
- Barres de confiance : Qualiopi, accessibilité, intra/inter, accompagnement.
- Formulaires contextualisés par formation et profil.
- Bloc d’aide au financement transparent.
- Espace ressources évolutif : actualités, agenda, documents.
- Fondations futures : espace entreprise, espace stagiaire, inscription et paiement.

## 10. Stratégie SEO

- Une URL propre par formation : `/formations/{slug}`.
- Catégories indexables ; pages locales seulement si le contenu est réellement spécifique.
- Maillage entre formation, catégorie, financement et prestations.
- Chaque fiche : titre unique, meta description, objectifs, public, prérequis, durée, programme, modalités, accessibilité, financement.
- Données structurées : Course, Organization, FAQPage et LocalBusiness après validation des données légales.
- Visuel Open Graph cohérent ; contenu officiel prioritaire sur toute reformulation marketing.
- Images WebP/AVIF, chargement différé hors viewport, navigation clavier, contrastes AA et HTML sémantique.

## 11. Stratégie de conversion

1. Réduire l’incertitude : public, durée, format, prérequis et prochaine étape visibles très tôt.
2. Rassurer progressivement : preuves de qualité et accessibilité avant le formulaire.
3. Contextualiser la prise de contact : la demande connaît déjà la formation et le profil du visiteur.
4. Éviter la pression : devis, appel et financement sont des chemins alternatifs.
5. Qualifier mieux : ressources téléchargeables et formulaires courts servent à comprendre le besoin.
6. Mesurer : vues de fiche, recherche catalogue, CTA, démarrage/envoi formulaire, téléchargement programme.

## 12. Données indispensables avant mise en production

- Identité légale complète, e-mail officiel, politique de confidentialité et traitement des données.
- Périmètre Qualiopi officiel et date de validité.
- Programmes/PDF validés pour chaque formation.
- Prix et éligibilités CPF/RS/RNCP à confirmer formation par formation.
- Coordonnées et modalités d’admission des parcours métier.
- Consentement et preuve pour chaque témoignage/logo client.

## 13. Décision demandée

Valider cette stratégie produit avant le développement des pages de production. Après validation, les étapes seront réalisées dans l’ordre Figma demandé, chacune avec lecture et capture, puis un lot de code équivalent avec commit GitHub vérifié.
