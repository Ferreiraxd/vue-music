import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    search: 'Search',
    about: 'About',
    selectLang: 'Select a language'
  },

  es: {
    search: 'Buscar',
    about: 'Nosotros',
    selectLang: 'Selecciona un lenguaje'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n;
