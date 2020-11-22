import { Injectable } from '@angular/core';
import { Language } from '../models/language.interface';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private language: String;
  private textFr: Language;
  private textEn: Language;

  constructor() {
    this.language = LanguageService.getLanguageCodeOnly();
    this.setTextEn();
    this.setTextFr();
  }

  public getTextByLocal() {
    this.language = LanguageService.getLanguageCodeOnly();
    if (this.language === 'fr') {
      return this.getTextFr();
    } else {
      return this.getTextEn();
    }
  }

  private getTextFr() {
    return this.textFr;
  }

  private getTextEn() {
    return this.textEn;
  }

  private setTextFr() {
    this.textFr = {
      dark: 'Sombre',
      light: 'Clair',
      rtl: 'Dag',
      ltr: 'Gad',
      learnMore: 'Savoir plus',
      close: 'Fermer',
      cookie: 'En poursuivant votre navigation sur le site, vous acceptez notre utilisation des cookies.',
      home: 'Accueil',
      homeDesc: 'Lucien Burdet créateur de site internet pour les professionnels et particuliers.',
      back: 'Retour',
      keywords: 'lucien, burdet, createur de site internet, solutions web, lucien burdet,',
      projects: 'Projets',
      blog: 'Blog',
      contact: 'Contact',
      education: 'Formations',
      cv: 'CV',
      about: 'À propos',
      latestPost: 'derniers articles',
      allPost: 'Retrouvez tous les articles sur le',
      readMore: 'lire la suite',
      viewMore: 'voir plus',
      aboutShadow1: 'À',
      aboutShadow2: 'propos',
      aboutTitle1: 'Je suis là pour',
      aboutTitle2: 'mettre en place vos idées',
      aboutShortContent: 'Etant passionné par l’informatique, j’ai lancé ma propre entreprise. Ma soif de connaissance m’a permis de développer mes compétences et de m’enrichir d’expérience. Les travaux que je peux effectuer sont des solutions pour le web : E-Commerce, site vitrine…',
      privacyPolicy: 'Politique de confidentialité',
      pages: 'pages',
      sitemap: 'Sitemap',
      requestQuote: 'demander un devis',
      headerTitle1: 'Solutions',
      headerTitle2: 'Web',
      projectsSubTitle: 'Mes projets',
      projectsTitle1: 'Les projets qui',
      projectsTitle2: 'me tiennent à coeurs',
      projectsShortContent: 'Les projets m\'ont beaucoup apporté : savoir, analyse, autonomie....',
      servicesSubTitle: 'Mes services',
      servicesTitle1: 'Les services que je',
      servicesTitle2: 'propose',
      servicesShortContent: 'Je ne me contente pas de simplement développer votre projet : je vous propose une étude minutieuse et je peux vous apporter mon expertise pour couvrir tous vos besoins en termes de communication, publicité, référencement…',
      postTags: 'Tags des articles',
      youtube: 'y49onlXlCWE',
      videoTitle: 'Vidéo de présentation',
      videoShortContent: 'Création. Développement. Inspiration.',
      aboutPara: [
        'Étant passionné par l’informatique, j’ai lancé ma propre entreprise. Ma soif de connaissance m’a permis de développer mes compétences et de m’enrichir d’expérience.',
        'Les travaux que je peux effectuer sont des solutions pour le web : E-Commerce, site vitrine…',
        'Je peux vous établir gratuitement un devis sur simple demande. La satisfaction du client étant ma priorité, je mettrai tout en œuvre pour répondre à vos attentes et exigences.',
        'Je ne me contente pas de simplement développer votre projet : je vous propose une étude minutieuse et je peux vous apporter mon expertise pour couvrir tous vos besoins en termes de communication, publicité, référencement…',
      ],
      years: 'ans',
      blogDesc: 'Retrouvez tous les articles.',
      blogTagDesc: 'Retrouvez tous les articles en lien avec : ',
      blogAllPost: 'Tous les articles',
      post: 'Article',
      postDesc: 'Découvrez cet article très intéressant.',
      postShortContent: 'En espérant que l\'article vous ait plu',
      categories: 'Catégories',
      contactDesc: 'Je peux vous établir gratuitement un devis sur simple demande. La satisfaction du client étant ma priorité, je mettrai tout en œuvre pour répondre à vos attentes et exigences.',
      send: 'Envoyer',
      contactError: 'Une erreur est survenue, merci de réessayer.',
      contactSuccess: 'Merci pour votre message, je vous répondrais dans les meilleurs délais.',
      contactName: 'Votre nom',
      contactEmail: 'Votre email',
      contactMessage: 'Votre message',
      contactTitle: 'Disponible dans toute la france',
      contactSubTitle: 'Lyon, France.',
      cvDesc: 'Mon parcours et les compétences que j\'ai pu acquérir sont détaillées sur mon CV.',
      educationDesc: 'Les principales formations que j\'ai suivies durant ma vie sont résumée dans cette page.',
      notFound: '404',
      notFoundDesc: 'La page que vous essayez d\'atteindre n\'est pasdisponible actuellement. Cela peut être dû au fait que la page n\'existe pas ou a été déplacée.',
      goHome: 'Retour à l\'accueil',
      notFoundTitle: 'Page non trouvée',
      download: 'Télécharger',
      website: 'Site',
      receiveFile: 'Recevoir par mail le fichier',
      receive: 'Recevoir le fichier',
      receiveSuccess: 'Fichier envoyé avec grand succès ! Vous le recevrez d\'ici peu.',
      comments: 'Commentaire(s)',
      leaveComment: 'Laissez votre commentaire',
      postComment: 'Poster un Commentaire',
      reply: 'Répondre',
      commentMessage: 'Votre commentaire',
      commentSuccess: 'Merci pour votre commentaire',
      search: 'Rechercher',
      subscribe: 'S\'abonner',
      subscribeSuccess: 'Merci de vous être abonné.',
    };
  }

  private setTextEn() {
    this.textEn = {
      dark: 'Dark',
      light: 'Light',
      rtl: 'Rtl',
      ltr: 'Ltr',
      learnMore: 'Learn more',
      close: 'Close',
      cookie: 'By continuing to browse the site, you\'re agreeing to our use of cookies.',
      home: 'Home',
      homeDesc: 'Lucien Burdet website creator for professionals and individuals.',
      back: 'Back',
      keywords: 'lucien, burdet, website creator, web solutions, lucien burdet,',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      education: 'Education',
      cv: 'CV',
      about: 'About me',
      latestPost: 'latest post',
      allPost: 'Find all the posts on the',
      readMore: 'read more',
      viewMore: 'view more',
      aboutShadow1: 'About',
      aboutShadow2: 'me',
      aboutTitle1: 'I am here',
      aboutTitle2: 'for made your idea',
      aboutShortContent: 'Being passionate about IT, I started my own business. My thirst for knowledge has allowed me to develop my skills and gain experience. The work I can do are solutions for the web: E-Commerce, website showcase…',
      privacyPolicy: 'Privacy policy',
      pages: 'pages',
      sitemap: 'Sitemap',
      requestQuote: 'request a quote',
      headerTitle1: 'Web',
      headerTitle2: 'Solutions',
      projectsSubTitle: 'My projects',
      projectsTitle1: 'Projects that ',
      projectsTitle2: 'matter to me',
      projectsShortContent: 'The projects brought me a lot: knowledge, analysis, autonomy....',
      servicesSubTitle: 'My services',
      servicesTitle1: 'Services I can',
      servicesTitle2: 'provided',
      servicesShortContent: 'I don’t just develop your project: I propose a thorough study and I can bring you my expertise to cover all your needs in terms of communication, advertising, SEO…',
      postTags: 'Post Tags',
      youtube: '2kgaoxoGKrM',
      videoTitle: 'Presentation video',
      videoShortContent: 'Creation. Development. Inspiration.',
      aboutPara: [
        'Being passionate about IT, I started my own business. My thirst for knowledge has allowed me to develop my skills and gain experience.',
        'The work I can do are solutions for the web: E-Commerce, website showcase…',
        'I can provide you with a free quote on request. As customer satisfaction is my priority, I will make every effort to meet your expectations and requirements.',
        'I don’t just develop your project: I propose a thorough study and I can bring you my expertise to cover all your needs in terms of communication, advertising, SEO…',
      ],
      years: 'years old',
      blogDesc: 'Find all the posts.',
      blogTagDesc: 'Find all posts related to : ',
      blogAllPost: 'All posts',
      post: 'Post',
      postDesc: 'Check out this very interesting post.',
      postShortContent: 'Hoping you enjoyed the post',
      categories: 'Categories',
      contactDesc: 'I can provide you with a free quote on request. As customer satisfaction is my priority, I will make every effort to meet your expectations and requirements.',
      send: 'Send',
      contactError: 'An error has occurred, please try again.',
      contactSuccess: 'Thank you for your message, I will answer you as soon as possible.',
      contactName: 'Your name',
      contactEmail: 'Your email',
      contactMessage: 'Your message',
      contactTitle: 'Available worldwide',
      contactSubTitle: 'Lyon, France.',
      cvDesc: 'My background and the skills I was able to acquire are detailed on my CV.',
      educationDesc: 'The main trainings I have taken during my life are summarized in this page.',
      notFound: '404',
      notFoundDesc: 'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.',
      goHome: 'Back to home',
      notFoundTitle: 'Page not found',
      download: 'Download',
      website: 'website',
      receiveFile: 'Receive the file by mail',
      receive: 'Receive the file',
      receiveSuccess: 'File sent with great success ! You will receive it shortly.',
      comments: 'Comment(s)',
      leaveComment: 'Leave you comment',
      postComment: 'Post Comment',
      reply: 'Reply',
      commentMessage: 'Your comment',
      commentSuccess: 'Thank you for your comment',
      search: 'Search',
      subscribe: 'Subscribe',
      subscribeSuccess: 'Thank you for subscribing.',
    };
  }

}
