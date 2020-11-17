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
      about: 'à propos',
      latestPost: 'derniers articles',
      allPost: 'Retrouvez tous les articles sur le',
      readMore: 'lire la suite',
      viewMore: 'voir plus',
      aboutShadow1: 'A',
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
    };
  }

}
