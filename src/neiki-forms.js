/*!
 * Neiki's Forms 1.0.0
 * A lightweight, dependency-free form Web Component.
 * https://github.com/neikiri/neiki-forms
 * MIT License
 */
(function () {
  'use strict';

  if (customElements.get('neiki-forms')) {
    return;
  }

  // -----------------------------------------------------------------------
  // Translations
  // -----------------------------------------------------------------------

  var TRANSLATIONS = {
    en: {
      nav: { next: 'Next', back: 'Back', submit: 'Submit', submitting: 'Submitting…', reset: 'Reset' },
      step: { label: 'Step {current} of {total}' },
      validation: { required: 'This field is required.', email: 'Enter a valid email address.', url: 'Enter a valid URL.', tel: 'Enter a valid phone number.', pattern: 'This value does not match the required format.', minLength: 'Enter at least {min} characters.', maxLength: 'Enter no more than {max} characters.', min: 'Value must be at least {min}.', max: 'Value must be no more than {max}.', match: 'This does not match {field}.', invalid: 'This value is not valid.', number: 'Enter a valid number.' },
      file: { choose: 'Choose file', chooseMultiple: 'Choose files', noFileChosen: 'No file chosen', filesChosen: '{count} files chosen', dragHint: 'Drag & drop or click to upload' },
      password: { show: 'Show password', hide: 'Hide password' },
      misc: { optional: 'optional' }
    },
    cs: {
      nav: { next: 'Další', back: 'Zpět', submit: 'Odeslat', submitting: 'Odesílání…', reset: 'Obnovit' },
      step: { label: 'Krok {current} z {total}' },
      validation: { required: 'Toto pole je povinné.', email: 'Zadejte platnou e-mailovou adresu.', url: 'Zadejte platnou URL adresu.', tel: 'Zadejte platné telefonní číslo.', pattern: 'Tato hodnota neodpovídá požadovanému formátu.', minLength: 'Zadejte alespoň {min} znaků.', maxLength: 'Zadejte nejvýše {max} znaků.', min: 'Hodnota musí být alespoň {min}.', max: 'Hodnota nesmí být větší než {max}.', match: 'Toto se neshoduje s polem {field}.', invalid: 'Tato hodnota není platná.', number: 'Zadejte platné číslo.' },
      file: { choose: 'Vybrat soubor', chooseMultiple: 'Vybrat soubory', noFileChosen: 'Žádný soubor nevybrán', filesChosen: 'Vybráno souborů: {count}', dragHint: 'Přetáhněte soubor sem nebo klikněte pro nahrání' },
      password: { show: 'Zobrazit heslo', hide: 'Skrýt heslo' },
      misc: { optional: 'volitelné' }
    },
    de: {
      nav: { next: 'Weiter', back: 'Zurück', submit: 'Absenden', submitting: 'Wird gesendet…', reset: 'Zurücksetzen' },
      step: { label: 'Schritt {current} von {total}' },
      validation: { required: 'Dieses Feld ist erforderlich.', email: 'Geben Sie eine gültige E-Mail-Adresse ein.', url: 'Geben Sie eine gültige URL ein.', tel: 'Geben Sie eine gültige Telefonnummer ein.', pattern: 'Dieser Wert entspricht nicht dem erforderlichen Format.', minLength: 'Geben Sie mindestens {min} Zeichen ein.', maxLength: 'Geben Sie höchstens {max} Zeichen ein.', min: 'Der Wert muss mindestens {min} sein.', max: 'Der Wert darf höchstens {max} sein.', match: 'Stimmt nicht mit {field} überein.', invalid: 'Dieser Wert ist ungültig.', number: 'Geben Sie eine gültige Zahl ein.' },
      file: { choose: 'Datei auswählen', chooseMultiple: 'Dateien auswählen', noFileChosen: 'Keine Datei ausgewählt', filesChosen: '{count} Dateien ausgewählt', dragHint: 'Datei hierher ziehen oder klicken zum Hochladen' },
      password: { show: 'Passwort anzeigen', hide: 'Passwort verbergen' },
      misc: { optional: 'optional' }
    },
    es: {
      nav: { next: 'Siguiente', back: 'Atrás', submit: 'Enviar', submitting: 'Enviando…', reset: 'Restablecer' },
      step: { label: 'Paso {current} de {total}' },
      validation: { required: 'Este campo es obligatorio.', email: 'Introduce una dirección de correo válida.', url: 'Introduce una URL válida.', tel: 'Introduce un número de teléfono válido.', pattern: 'Este valor no coincide con el formato requerido.', minLength: 'Introduce al menos {min} caracteres.', maxLength: 'Introduce como máximo {max} caracteres.', min: 'El valor debe ser al menos {min}.', max: 'El valor no debe superar {max}.', match: 'No coincide con {field}.', invalid: 'Este valor no es válido.', number: 'Introduce un número válido.' },
      file: { choose: 'Elegir archivo', chooseMultiple: 'Elegir archivos', noFileChosen: 'Ningún archivo seleccionado', filesChosen: '{count} archivos seleccionados', dragHint: 'Arrastra y suelta o haz clic para subir' },
      password: { show: 'Mostrar contraseña', hide: 'Ocultar contraseña' },
      misc: { optional: 'opcional' }
    },
    fr: {
      nav: { next: 'Suivant', back: 'Retour', submit: 'Envoyer', submitting: 'Envoi…', reset: 'Réinitialiser' },
      step: { label: 'Étape {current} sur {total}' },
      validation: { required: 'Ce champ est requis.', email: 'Saisissez une adresse e-mail valide.', url: 'Saisissez une URL valide.', tel: 'Saisissez un numéro de téléphone valide.', pattern: 'Cette valeur ne correspond pas au format requis.', minLength: 'Saisissez au moins {min} caractères.', maxLength: 'Saisissez au maximum {max} caractères.', min: 'La valeur doit être au moins {min}.', max: 'La valeur ne doit pas dépasser {max}.', match: 'Ne correspond pas à {field}.', invalid: "Cette valeur n'est pas valide.", number: 'Saisissez un nombre valide.' },
      file: { choose: 'Choisir un fichier', chooseMultiple: 'Choisir des fichiers', noFileChosen: 'Aucun fichier choisi', filesChosen: '{count} fichiers choisis', dragHint: 'Glissez-déposez ou cliquez pour téléverser' },
      password: { show: 'Afficher le mot de passe', hide: 'Masquer le mot de passe' },
      misc: { optional: 'facultatif' }
    },
    pl: {
      nav: { next: 'Dalej', back: 'Wstecz', submit: 'Wyślij', submitting: 'Wysyłanie…', reset: 'Resetuj' },
      step: { label: 'Krok {current} z {total}' },
      validation: { required: 'To pole jest wymagane.', email: 'Podaj prawidłowy adres e-mail.', url: 'Podaj prawidłowy adres URL.', tel: 'Podaj prawidłowy numer telefonu.', pattern: 'Ta wartość nie pasuje do wymaganego formatu.', minLength: 'Wprowadź co najmniej {min} znaków.', maxLength: 'Wprowadź maksymalnie {max} znaków.', min: 'Wartość musi wynosić co najmniej {min}.', max: 'Wartość nie może przekraczać {max}.', match: 'Nie zgadza się z polem {field}.', invalid: 'Ta wartość jest nieprawidłowa.', number: 'Podaj prawidłową liczbę.' },
      file: { choose: 'Wybierz plik', chooseMultiple: 'Wybierz pliki', noFileChosen: 'Nie wybrano pliku', filesChosen: 'Wybrano plików: {count}', dragHint: 'Przeciągnij i upuść lub kliknij, aby przesłać' },
      password: { show: 'Pokaż hasło', hide: 'Ukryj hasło' },
      misc: { optional: 'opcjonalne' }
    },
    sk: {
      nav: { next: 'Ďalej', back: 'Späť', submit: 'Odoslať', submitting: 'Odosielanie…', reset: 'Obnoviť' },
      step: { label: 'Krok {current} z {total}' },
      validation: { required: 'Toto pole je povinné.', email: 'Zadajte platnú e-mailovú adresu.', url: 'Zadajte platnú URL adresu.', tel: 'Zadajte platné telefónne číslo.', pattern: 'Táto hodnota nezodpovedá požadovanému formátu.', minLength: 'Zadajte aspoň {min} znakov.', maxLength: 'Zadajte najviac {max} znakov.', min: 'Hodnota musí byť aspoň {min}.', max: 'Hodnota nesmie byť väčšia ako {max}.', match: 'Nezhoduje sa s poľom {field}.', invalid: 'Táto hodnota nie je platná.', number: 'Zadajte platné číslo.' },
      file: { choose: 'Vybrať súbor', chooseMultiple: 'Vybrať súbory', noFileChosen: 'Žiadny súbor nevybraný', filesChosen: 'Vybraných súborov: {count}', dragHint: 'Presuňte súbor sem alebo kliknite pre nahratie' },
      password: { show: 'Zobraziť heslo', hide: 'Skryť heslo' },
      misc: { optional: 'voliteľné' }
    },
    uk: {
      nav: { next: 'Далі', back: 'Назад', submit: 'Надіслати', submitting: 'Надсилання…', reset: 'Скинути' },
      step: { label: 'Крок {current} з {total}' },
      validation: { required: 'Це поле обов’язкове.', email: 'Введіть дійсну електронну адресу.', url: 'Введіть дійсну URL-адресу.', tel: 'Введіть дійсний номер телефону.', pattern: 'Це значення не відповідає потрібному формату.', minLength: 'Введіть щонайменше {min} символів.', maxLength: 'Введіть не більше {max} символів.', min: 'Значення має бути не менше {min}.', max: 'Значення має бути не більше {max}.', match: 'Не збігається з полем {field}.', invalid: 'Це значення недійсне.', number: 'Введіть дійсне число.' },
      file: { choose: 'Обрати файл', chooseMultiple: 'Обрати файли', noFileChosen: 'Файл не вибрано', filesChosen: 'Вибрано файлів: {count}', dragHint: 'Перетягніть файл сюди або натисніть для завантаження' },
      password: { show: 'Показати пароль', hide: 'Приховати пароль' },
      misc: { optional: 'необов’язково' }
    }
  };

  var VALID_THEMES = ['light', 'dark', 'auto'];
  var VALID_ACCENTS = ['blue', 'violet', 'emerald', 'rose', 'amber', 'slate'];
  var VALID_METHODS = ['POST', 'PUT', 'PATCH', 'GET'];

  var DEFAULT_CONFIG = {
    theme: 'auto',
    accent: 'blue',
    lang: 'en',
    action: null,
    method: 'POST',
    novalidate: false
  };

  var TEXT_TYPES = ['text', 'email', 'password', 'tel', 'url', 'search', 'number', 'date', 'time', 'datetime-local', 'month', 'week', 'color'];

  function oneOf(value, list, fallback) {
    return list.indexOf(value) !== -1 ? value : fallback;
  }

  function uid() {
    return 'nf-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function isEmpty(value) {
    if (value == null) return true;
    if (Array.isArray(value)) return value.length === 0;
    return String(value).trim() === '';
  }

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var URL_RE = /^https?:\/\/[^\s]+$/i;
  var TEL_RE = /^[+()0-9\s-]{6,}$/;

  // -----------------------------------------------------------------------
  // Icons (inline SVG, no external dependency)
  // -----------------------------------------------------------------------

  var ICONS = {
    chevronLeft: '<svg viewBox="0 0 24 24"><path d="m15 6-6 6 6 6"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="m5 13 4 4 10-10"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M12 5c-5 0-9 4-10.5 7C3 15 7 19 12 19s9-4 10.5-7C21 9 17 5 12 5Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.9 5.1A10.9 10.9 0 0 1 12 5c5 0 9 4 10.5 7-.6 1.2-1.6 2.6-3 3.9M6.5 6.5C4.6 7.7 3.1 9.4 1.5 12 3 15 7 19 12 19c1.2 0 2.4-.2 3.5-.6"/></svg>',
    upload: '<svg viewBox="0 0 24 24"><path d="M12 3 6.5 8.5 8 10l3-3v9h2V7l3 3 1.5-1.5L12 3ZM5 19v2h14v-2H5Z"/></svg>',
    error: '<svg viewBox="0 0 24 24"><path d="M12 2 1 21h22L12 2Zm0 6.5 5.5 9.5h-11L12 8.5ZM11 11v4h2v-4h-2Zm0 5.5v2h2v-2h-2Z"/></svg>',
    spinner: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'
  };

  // -----------------------------------------------------------------------
  // Field value coercion helpers
  // -----------------------------------------------------------------------

  function defaultValueFor(field) {
    if (field.defaultValue !== undefined) return field.defaultValue;
    if (field.type === 'checkbox' || field.type === 'switch') return false;
    if (field.type === 'checkbox-group') return [];
    if (field.type === 'select' && field.multiple) return [];
    return '';
  }

  // -----------------------------------------------------------------------
  // Validation
  // -----------------------------------------------------------------------

  function validateFieldValue(field, value, allValues, t) {
    var required = !!field.required;

    if (field.type === 'checkbox' || field.type === 'switch') {
      if (required && !value) return t('validation.required');
      return null;
    }

    if (isEmpty(value)) {
      if (required) return t('validation.required');
      return null;
    }

    if (field.type === 'email' && !EMAIL_RE.test(value)) return t('validation.email');
    if (field.type === 'url' && !URL_RE.test(value)) return t('validation.url');
    if (field.type === 'tel' && !TEL_RE.test(value)) return t('validation.tel');
    if (field.type === 'number' || field.type === 'range') {
      if (value !== '' && isNaN(Number(value))) return t('validation.number');
    }

    if (field.pattern) {
      try {
        var re = new RegExp(field.pattern);
        if (!re.test(value)) return t('validation.pattern');
      } catch (err) { /* ignore malformed pattern */ }
    }

    if (field.minLength != null && typeof value === 'string' && value.length < field.minLength) {
      return t('validation.minLength', { min: field.minLength });
    }
    if (field.maxLength != null && typeof value === 'string' && value.length > field.maxLength) {
      return t('validation.maxLength', { max: field.maxLength });
    }
    if (field.min != null && (field.type === 'number' || field.type === 'range') && Number(value) < Number(field.min)) {
      return t('validation.min', { min: field.min });
    }
    if (field.max != null && (field.type === 'number' || field.type === 'range') && Number(value) > Number(field.max)) {
      return t('validation.max', { max: field.max });
    }

    if (field.match) {
      var other = allValues[field.match];
      if (value !== other) return t('validation.match', { field: field.matchLabel || field.match });
    }

    if (typeof field.validate === 'function') {
      var result = field.validate(value, allValues);
      if (result === false) return t('validation.invalid');
      if (typeof result === 'string') return result;
    }

    return null;
  }

  // -----------------------------------------------------------------------
  // Embedded CSS (replaced by minify.py at build time)
  // -----------------------------------------------------------------------

  var EMBEDDED_CSS = '';

  var sharedSheet = null;
  var sharedSheetFailed = false;

  function getSharedSheet(cssText) {
    if (sharedSheet || sharedSheetFailed) return sharedSheet;
    if (typeof CSSStyleSheet === 'undefined' || !('adoptedStyleSheets' in Document.prototype)) {
      sharedSheetFailed = true;
      return null;
    }
    try {
      sharedSheet = new CSSStyleSheet();
      sharedSheet.replaceSync(cssText);
    } catch (err) {
      sharedSheet = null;
      sharedSheetFailed = true;
    }
    return sharedSheet;
  }

  var TEMPLATE = document.createElement('template');
  TEMPLATE.innerHTML =
    '<div class="nff-root" part="root">' +
      '<nav class="nff-steps" part="steps" hidden></nav>' +
      '<form class="nff-form" part="form" novalidate>' +
        '<div class="nff-fields" part="fields"></div>' +
        '<div class="nff-status" part="status" role="alert" aria-live="polite" hidden></div>' +
        '<div class="nff-nav" part="nav">' +
          '<button type="button" class="nff-btn nff-btn--ghost nff-back-btn" part="button" hidden></button>' +
          '<span class="nff-nav-spacer"></span>' +
          '<button type="reset" class="nff-btn nff-btn--ghost nff-reset-btn" part="button" hidden></button>' +
          '<button type="button" class="nff-btn nff-btn--primary nff-next-btn" part="button" hidden></button>' +
          '<button type="submit" class="nff-btn nff-btn--primary nff-submit-btn" part="button" hidden></button>' +
        '</div>' +
      '</form>' +
    '</div>';

  class NeikiForms extends HTMLElement {
    constructor() {
      super();
      this._init();
    }
  }

  NeikiForms.observedAttributes = ['theme', 'accent', 'lang', 'action', 'method', 'novalidate'];

  NeikiForms.prototype._init = function () {
    this._config = Object.assign({}, DEFAULT_CONFIG);
    this._steps = [{ id: 'step-1', fields: [] }];
    this._isMultiStep = false;
    this._currentStep = 0;
    this._maxStepReached = 0;
    this._values = {};
    this._errors = {};
    this._touched = {};
    this._fieldIndex = {};
    this._submitting = false;
    this._ready = false;
    this._schemaMeta = {};

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
    this._injectStyles();

    var root = this.shadowRoot;
    this._root = root.querySelector('.nff-root');
    this._stepsEl = root.querySelector('.nff-steps');
    this._formEl = root.querySelector('.nff-form');
    this._fieldsEl = root.querySelector('.nff-fields');
    this._statusEl = root.querySelector('.nff-status');
    this._backBtn = root.querySelector('.nff-back-btn');
    this._nextBtn = root.querySelector('.nff-next-btn');
    this._submitBtn = root.querySelector('.nff-submit-btn');
    this._resetBtn = root.querySelector('.nff-reset-btn');

    this._bindStaticEvents();
  };

  NeikiForms.prototype._injectStyles = function () {
    if (EMBEDDED_CSS) {
      var sheet = getSharedSheet(EMBEDDED_CSS);
      if (sheet) {
        this.shadowRoot.adoptedStyleSheets = [sheet];
        return;
      }
      var style = document.createElement('style');
      style.textContent = EMBEDDED_CSS;
      this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
      return;
    }
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = this._resolveStylesheetUrl();
    this.shadowRoot.insertBefore(link, this.shadowRoot.firstChild);
  };

  NeikiForms.prototype._resolveStylesheetUrl = function () {
    var scriptEl = document.currentScript;
    if (!scriptEl) {
      var scripts = document.querySelectorAll('script[src]');
      for (var i = scripts.length - 1; i >= 0; i--) {
        if (/neiki-forms(\.min)?\.js/.test(scripts[i].src)) {
          scriptEl = scripts[i];
          break;
        }
      }
    }
    var src = scriptEl ? scriptEl.src : '';
    if (/\.min\.js(\?.*)?$/.test(src)) return src.replace(/\.min\.js(\?.*)?$/, '.min.css$1');
    if (/\.js(\?.*)?$/.test(src)) return src.replace(/\.js(\?.*)?$/, '.css$1');
    return 'neiki-forms.css';
  };

  // ---------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------

  NeikiForms.prototype.connectedCallback = function () {
    this._readAttributesIntoConfig();
    if (!this._ready) {
      this._maybeParseInlineSchema();
    }
    this._render();
    if (!this._ready) {
      this._ready = true;
      this._emit('ready', { config: this.getConfig() });
    }
  };

  NeikiForms.prototype.disconnectedCallback = function () {
    if (this._mediaQuery) {
      this._mediaQuery.removeEventListener('change', this._onMediaChangeBound);
      this._mediaQuery = null;
    }
  };

  NeikiForms.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this._readAttributesIntoConfig();
    if (this.isConnected) this._render();
  };

  NeikiForms.prototype._readAttributesIntoConfig = function () {
    var cfg = this._config;
    cfg.theme = oneOf(this.getAttribute('theme'), VALID_THEMES, cfg.theme || DEFAULT_CONFIG.theme);
    cfg.accent = oneOf(this.getAttribute('accent'), VALID_ACCENTS, cfg.accent || DEFAULT_CONFIG.accent);
    cfg.action = this.getAttribute('action') || cfg.action;
    cfg.method = oneOf((this.getAttribute('method') || '').toUpperCase(), VALID_METHODS, cfg.method || DEFAULT_CONFIG.method);
    cfg.novalidate = this.hasAttribute('novalidate') || cfg.novalidate;
    var lang = this.getAttribute('lang');
    if (lang) cfg.lang = lang;
  };

  NeikiForms.prototype._maybeParseInlineSchema = function () {
    var script = this.querySelector('script[type="application/json"], script[type="application/neiki-forms+json"]');
    if (!script) return;
    try {
      var schema = JSON.parse(script.textContent);
      this.setSchema(schema);
    } catch (err) {
      console.error('neiki-forms: could not parse inline schema JSON', err);
    }
  };

  // ---------------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------------

  NeikiForms.prototype._t = function (path, vars) {
    var lang = TRANSLATIONS[this._config.lang] ? this._config.lang : 'en';
    var dict = TRANSLATIONS[lang];
    var parts = path.split('.');
    var value = dict;
    for (var i = 0; i < parts.length; i++) {
      value = value && value[parts[i]];
    }
    if (value === undefined) {
      value = TRANSLATIONS.en;
      for (i = 0; i < parts.length; i++) value = value && value[parts[i]];
    }
    value = value || path;
    if (vars) {
      Object.keys(vars).forEach(function (key) {
        value = value.replace('{' + key + '}', vars[key]);
      });
    }
    return value;
  };

  NeikiForms.prototype.addTranslations = function (lang, dict) {
    if (!lang || !dict) return this;
    var existing = TRANSLATIONS[lang] || {};
    var merged = {};
    Object.keys(existing).concat(Object.keys(dict)).forEach(function (section) {
      merged[section] = Object.assign({}, existing[section], dict[section]);
    });
    TRANSLATIONS[lang] = merged;
    if (this.isConnected) this._render();
    return this;
  };

  NeikiForms.prototype.setLang = function (lang) {
    this._config.lang = lang;
    this.setAttribute('lang', lang);
    if (this.isConnected) this._render();
    return this;
  };

  // ---------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------

  NeikiForms.prototype._onMediaChange = function () {
    if (this._config.theme === 'auto') this._applyTheme();
  };

  NeikiForms.prototype._resolveTheme = function () {
    if (this._config.theme !== 'auto') return this._config.theme;
    if (!this._mediaQuery) {
      this._onMediaChangeBound = this._onMediaChange.bind(this);
      this._mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this._mediaQuery.addEventListener('change', this._onMediaChangeBound);
    }
    return this._mediaQuery.matches ? 'dark' : 'light';
  };

  NeikiForms.prototype._applyTheme = function () {
    this.setAttribute('resolved-theme', this._resolveTheme());
    this.setAttribute('accent', this._config.accent);
  };

  // ---------------------------------------------------------------------
  // Schema
  // ---------------------------------------------------------------------

  NeikiForms.prototype.setSchema = function (schema) {
    schema = schema || {};
    this._schemaMeta = {
      submitLabel: schema.submitLabel,
      backLabel: schema.backLabel,
      nextLabel: schema.nextLabel,
      showReset: !!schema.showReset,
      resetLabel: schema.resetLabel
    };

    if (Array.isArray(schema.steps) && schema.steps.length) {
      this._steps = schema.steps.map(function (step, index) {
        return {
          id: step.id || ('step-' + (index + 1)),
          title: step.title || '',
          description: step.description || '',
          fields: (step.fields || []).slice()
        };
      });
      this._isMultiStep = this._steps.length > 1;
    } else {
      this._steps = [{ id: 'step-1', title: '', description: '', fields: (schema.fields || []).slice() }];
      this._isMultiStep = false;
    }

    this._currentStep = 0;
    this._maxStepReached = 0;
    this._values = {};
    this._errors = {};
    this._touched = {};
    this._fieldIndex = {};

    var self = this;
    this._steps.forEach(function (step) {
      step.fields.forEach(function (field) {
        if (field.type === 'static') return;
        self._fieldIndex[field.name] = field;
        self._values[field.name] = defaultValueFor(field);
      });
    });

    if (this.isConnected) this._render();
    return this;
  };

  NeikiForms.prototype.getSchema = function () {
    return { steps: this._steps.map(function (s) { return Object.assign({}, s, { fields: s.fields.slice() }); }) };
  };

  // ---------------------------------------------------------------------
  // Config
  // ---------------------------------------------------------------------

  NeikiForms.prototype.setConfig = function (config) {
    config = config || {};
    var cfg = this._config;
    if (config.theme !== undefined) cfg.theme = oneOf(config.theme, VALID_THEMES, cfg.theme);
    if (config.accent !== undefined) cfg.accent = oneOf(config.accent, VALID_ACCENTS, cfg.accent);
    if (config.lang !== undefined) cfg.lang = config.lang;
    if (config.action !== undefined) cfg.action = config.action;
    if (config.method !== undefined) cfg.method = oneOf(String(config.method).toUpperCase(), VALID_METHODS, cfg.method);
    if (config.novalidate !== undefined) cfg.novalidate = !!config.novalidate;
    if (this.isConnected) this._render();
    return this;
  };

  NeikiForms.prototype.getConfig = function () {
    return Object.assign({}, this._config);
  };

  // ---------------------------------------------------------------------
  // Static event bindings (bound once)
  // ---------------------------------------------------------------------

  NeikiForms.prototype._bindStaticEvents = function () {
    var self = this;

    this._fieldsEl.addEventListener('input', function (event) {
      self._onFieldEvent(event, false);
    });
    this._fieldsEl.addEventListener('change', function (event) {
      self._onFieldEvent(event, true);
    });
    this._fieldsEl.addEventListener('focusout', function (event) {
      var name = self._nameFromEvent(event);
      if (!name) return;
      self._touched[name] = true;
      self._validateAndRenderField(name);
    });

    this._fieldsEl.addEventListener('click', function (event) {
      var toggle = event.target.closest('.nff-password-toggle');
      if (toggle) {
        self._togglePasswordVisibility(toggle);
      }
    });

    this._backBtn.addEventListener('click', function () { self.prevStep(); });
    this._nextBtn.addEventListener('click', function () { self.nextStep(); });
    this._resetBtn.addEventListener('click', function () {
      window.setTimeout(function () { self.reset(); }, 0);
    });

    this._formEl.addEventListener('submit', function (event) {
      event.preventDefault();
      self._handleSubmit();
    });
  };

  NeikiForms.prototype._nameFromEvent = function (event) {
    var el = event.target.closest('[name]');
    return el ? el.getAttribute('name').replace(/\[\]$/, '') : null;
  };

  NeikiForms.prototype._onFieldEvent = function (event, isChange) {
    var el = event.target;
    if (!el || !el.matches) return;
    if (!el.matches('input, select, textarea')) return;
    var name = this._nameFromEvent(event);
    if (!name) return;
    var field = this._fieldIndex[name];
    if (!field) return;

    if (field.type === 'range') {
      var out = this._fieldsEl.querySelector('.nff-range-value[data-for="' + cssEscape(name) + '"]');
      if (out) out.textContent = el.value;
    }

    var isDelegatedGroupEvent = (field.type === 'checkbox-group' || field.type === 'radio' || (field.type === 'select' && field.multiple));
    if (!isChange && isDelegatedGroupEvent) return;

    this._values[name] = this._readFieldValue(field);
    this._emit('input', { name: name, value: this._values[name], values: this.getValues() });

    if (isChange) {
      this._emit('change', { name: name, value: this._values[name], values: this.getValues() });
    }

    if (this._touched[name]) {
      this._validateAndRenderField(name);
    }
  };

  NeikiForms.prototype._togglePasswordVisibility = function (toggle) {
    var wrap = toggle.closest('.nff-control-wrap');
    var input = wrap && wrap.querySelector('input');
    if (!input) return;
    var showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    toggle.innerHTML = showing ? ICONS.eye : ICONS.eyeOff;
    toggle.setAttribute('aria-label', this._t(showing ? 'password.show' : 'password.hide'));
    input.focus();
  };

  // ---------------------------------------------------------------------
  // Value reading
  // ---------------------------------------------------------------------

  NeikiForms.prototype._readFieldValue = function (field) {
    var root = this._fieldsEl;
    var name = field.name;

    if (field.type === 'checkbox' || field.type === 'switch') {
      var single = root.querySelector('input[name="' + cssEscape(name) + '"]');
      return single ? single.checked : false;
    }

    if (field.type === 'checkbox-group') {
      var boxes = root.querySelectorAll('input[name="' + cssEscape(name) + '[]"]:checked');
      return Array.prototype.map.call(boxes, function (b) { return b.value; });
    }

    if (field.type === 'radio') {
      var checked = root.querySelector('input[name="' + cssEscape(name) + '"]:checked');
      return checked ? checked.value : '';
    }

    if (field.type === 'select' && field.multiple) {
      var select = root.querySelector('select[name="' + cssEscape(name) + '"]');
      if (!select) return [];
      return Array.prototype.filter.call(select.options, function (o) { return o.selected; }).map(function (o) { return o.value; });
    }

    if (field.type === 'file') {
      var fileInput = root.querySelector('input[name="' + cssEscape(name) + '"]');
      return fileInput ? fileInput.files : null;
    }

    var el = root.querySelector('[name="' + cssEscape(name) + '"]');
    return el ? el.value : this._values[name];
  };

  function cssEscape(value) {
    return String(value).replace(/[^a-zA-Z0-9_-]/g, function (ch) { return '\\' + ch; });
  }

  // ---------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------

  NeikiForms.prototype._render = function () {
    this._applyTheme();
    this._renderSteps();
    this._renderFields();
    this._renderNav();
  };

  NeikiForms.prototype._renderSteps = function () {
    var self = this;
    if (!this._isMultiStep) {
      this._stepsEl.hidden = true;
      this._stepsEl.textContent = '';
      return;
    }

    this._stepsEl.hidden = false;
    this._stepsEl.textContent = '';
    this._stepsEl.setAttribute('aria-label', this._t('step.label', { current: this._currentStep + 1, total: this._steps.length }));

    this._steps.forEach(function (step, index) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nff-step';
      var isActive = index === self._currentStep;
      var isComplete = index < self._currentStep;
      var isClickable = index <= self._maxStepReached;
      btn.classList.toggle('is-active', isActive);
      btn.classList.toggle('is-complete', isComplete);
      btn.disabled = !isClickable;
      btn.setAttribute('aria-current', isActive ? 'step' : 'false');

      var dot = document.createElement('span');
      dot.className = 'nff-step-dot';
      dot.innerHTML = isComplete ? ICONS.check : String(index + 1);
      btn.appendChild(dot);

      if (step.title) {
        var label = document.createElement('span');
        label.className = 'nff-step-title';
        label.textContent = step.title;
        btn.appendChild(label);
      }

      btn.addEventListener('click', function () {
        if (isClickable) self.goToStep(index);
      });

      self._stepsEl.appendChild(btn);
    });
  };

  NeikiForms.prototype._renderFields = function () {
    var self = this;
    var step = this._steps[this._currentStep];
    this._fieldsEl.textContent = '';
    if (!step) return;

    if (step.description) {
      var desc = document.createElement('p');
      desc.className = 'nff-step-description';
      desc.textContent = step.description;
      this._fieldsEl.appendChild(desc);
    }

    step.fields.forEach(function (field) {
      self._fieldsEl.appendChild(self._buildField(field));
    });
  };

  NeikiForms.prototype._fieldId = function (name) {
    return 'field-' + name;
  };

  NeikiForms.prototype._buildField = function (field) {
    if (field.type === 'static') return this._buildStaticField(field);
    if (field.type === 'hidden') return this._buildHiddenField(field);

    var wrapper = document.createElement('div');
    wrapper.className = 'nff-field nff-field--' + (field.width || 'full') + ' nff-field--' + field.type;
    if (field.disabled) wrapper.classList.add('is-disabled');

    var isChoiceOnly = field.type === 'checkbox' || field.type === 'switch';

    if (!isChoiceOnly && field.label) {
      var label = document.createElement('label');
      label.className = 'nff-label';
      label.setAttribute('for', this._fieldId(field.name));
      label.textContent = field.label;
      if (field.required) {
        var mark = document.createElement('span');
        mark.className = 'nff-required-mark';
        mark.textContent = ' *';
        mark.setAttribute('aria-hidden', 'true');
        label.appendChild(mark);
      } else if (field.showOptional !== false) {
        var optional = document.createElement('span');
        optional.className = 'nff-optional-mark';
        optional.textContent = ' (' + this._t('misc.optional') + ')';
        label.appendChild(optional);
      }
      wrapper.appendChild(label);
    }

    var controlWrap = document.createElement('div');
    controlWrap.className = 'nff-control-wrap';
    controlWrap.appendChild(this._buildControl(field));
    wrapper.appendChild(controlWrap);

    if (field.help) {
      var help = document.createElement('p');
      help.className = 'nff-help';
      help.id = this._fieldId(field.name) + '-help';
      help.textContent = field.help;
      wrapper.appendChild(help);
    }

    var error = document.createElement('p');
    error.className = 'nff-error';
    error.id = this._fieldId(field.name) + '-error';
    error.setAttribute('role', 'alert');
    var existingError = this._errors[field.name];
    if (existingError) {
      error.textContent = existingError;
      wrapper.classList.add('is-invalid');
    } else {
      error.hidden = true;
    }
    wrapper.appendChild(error);

    return wrapper;
  };

  NeikiForms.prototype._buildStaticField = function (field) {
    var wrapper = document.createElement('div');
    wrapper.className = 'nff-field nff-field--' + (field.width || 'full') + ' nff-field--static';
    if (field.heading) {
      var h = document.createElement(field.level || 'h3');
      h.className = 'nff-static-heading';
      h.textContent = field.heading;
      wrapper.appendChild(h);
    }
    if (field.text) {
      var p = document.createElement('p');
      p.className = 'nff-static-text';
      p.textContent = field.text;
      wrapper.appendChild(p);
    }
    return wrapper;
  };

  NeikiForms.prototype._buildHiddenField = function (field) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = field.name;
    input.value = this._values[field.name] != null ? this._values[field.name] : (field.defaultValue || '');
    return input;
  };

  NeikiForms.prototype._describedBy = function (field) {
    var ids = [];
    if (field.help) ids.push(this._fieldId(field.name) + '-help');
    ids.push(this._fieldId(field.name) + '-error');
    return ids.join(' ');
  };

  NeikiForms.prototype._buildControl = function (field) {
    var builders = {
      textarea: this._buildTextarea,
      select: this._buildSelect,
      checkbox: this._buildCheckbox,
      switch: this._buildSwitch,
      radio: this._buildRadioGroup,
      'checkbox-group': this._buildCheckboxGroup,
      range: this._buildRange,
      file: this._buildFile,
      password: this._buildPassword
    };
    var builder = builders[field.type];
    if (builder) return builder.call(this, field);
    if (TEXT_TYPES.indexOf(field.type) !== -1) return this._buildInput(field);
    return this._buildInput(Object.assign({}, field, { type: 'text' }));
  };

  NeikiForms.prototype._applyCommonAttrs = function (el, field) {
    el.id = this._fieldId(field.name);
    el.name = field.name;
    if (field.disabled) el.disabled = true;
    if (field.readonly) el.readOnly = true;
    if (field.autocomplete) el.setAttribute('autocomplete', field.autocomplete);
    if (field.placeholder) el.setAttribute('placeholder', field.placeholder);
    el.setAttribute('aria-describedby', this._describedBy(field));
    if (field.required) el.setAttribute('aria-required', 'true');
    if (this._errors[field.name]) el.setAttribute('aria-invalid', 'true');
  };

  NeikiForms.prototype._buildInput = function (field) {
    var input = document.createElement('input');
    input.type = field.type;
    this._applyCommonAttrs(input, field);
    input.className = 'nff-input';
    if (field.min != null) input.min = field.min;
    if (field.max != null) input.max = field.max;
    if (field.step != null) input.step = field.step;
    input.value = this._values[field.name] != null ? this._values[field.name] : '';
    return input;
  };

  NeikiForms.prototype._buildPassword = function (field) {
    var wrap = document.createElement('div');
    wrap.className = 'nff-password-wrap';
    var input = document.createElement('input');
    input.type = 'password';
    this._applyCommonAttrs(input, field);
    input.className = 'nff-input nff-input--password';
    input.value = this._values[field.name] != null ? this._values[field.name] : '';
    wrap.appendChild(input);

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nff-password-toggle';
    toggle.innerHTML = ICONS.eye;
    toggle.setAttribute('aria-label', this._t('password.show'));
    wrap.appendChild(toggle);

    return wrap;
  };

  NeikiForms.prototype._buildTextarea = function (field) {
    var textarea = document.createElement('textarea');
    this._applyCommonAttrs(textarea, field);
    textarea.className = 'nff-textarea';
    if (field.rows) textarea.rows = field.rows;
    textarea.value = this._values[field.name] != null ? this._values[field.name] : '';
    return textarea;
  };

  NeikiForms.prototype._buildSelect = function (field) {
    var select = document.createElement('select');
    this._applyCommonAttrs(select, field);
    select.className = 'nff-select';
    if (field.multiple) select.multiple = true;

    var currentValue = this._values[field.name];
    if (!field.multiple && field.placeholder) {
      var placeholderOpt = document.createElement('option');
      placeholderOpt.value = '';
      placeholderOpt.textContent = field.placeholder;
      placeholderOpt.disabled = true;
      placeholderOpt.selected = isEmpty(currentValue);
      select.appendChild(placeholderOpt);
    }

    (field.options || []).forEach(function (opt) {
      var option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label != null ? opt.label : opt.value;
      if (field.multiple) {
        option.selected = Array.isArray(currentValue) && currentValue.indexOf(opt.value) !== -1;
      } else {
        option.selected = currentValue === opt.value;
      }
      select.appendChild(option);
    });

    return select;
  };

  NeikiForms.prototype._buildCheckbox = function (field) {
    var row = document.createElement('label');
    row.className = 'nff-checkbox-row';
    var input = document.createElement('input');
    input.type = 'checkbox';
    this._applyCommonAttrs(input, field);
    input.className = 'nff-checkbox';
    input.checked = !!this._values[field.name];
    row.appendChild(input);
    var text = document.createElement('span');
    text.className = 'nff-checkbox-label';
    text.textContent = field.label || '';
    if (field.required) text.appendChild(document.createTextNode(' *'));
    row.appendChild(text);
    return row;
  };

  NeikiForms.prototype._buildSwitch = function (field) {
    var row = document.createElement('label');
    row.className = 'nff-switch-row';
    var input = document.createElement('input');
    input.type = 'checkbox';
    this._applyCommonAttrs(input, field);
    input.className = 'nff-switch-input';
    input.checked = !!this._values[field.name];
    row.appendChild(input);
    var track = document.createElement('span');
    track.className = 'nff-switch';
    track.setAttribute('aria-hidden', 'true');
    row.appendChild(track);
    var text = document.createElement('span');
    text.className = 'nff-switch-label';
    text.textContent = field.label || '';
    row.appendChild(text);
    return row;
  };

  NeikiForms.prototype._buildRadioGroup = function (field) {
    var self = this;
    var group = document.createElement('div');
    group.className = 'nff-radio-group';
    group.setAttribute('role', 'radiogroup');
    if (field.required) group.setAttribute('aria-required', 'true');
    group.setAttribute('aria-describedby', this._describedBy(field));
    var currentValue = this._values[field.name];

    (field.options || []).forEach(function (opt, index) {
      var row = document.createElement('label');
      row.className = 'nff-radio-row';
      var input = document.createElement('input');
      input.type = 'radio';
      input.name = field.name;
      input.id = self._fieldId(field.name) + '-' + index;
      input.value = opt.value;
      input.className = 'nff-radio';
      input.checked = currentValue === opt.value;
      if (field.disabled || opt.disabled) input.disabled = true;
      row.appendChild(input);
      var text = document.createElement('span');
      text.textContent = opt.label != null ? opt.label : opt.value;
      row.appendChild(text);
      group.appendChild(row);
    });

    return group;
  };

  NeikiForms.prototype._buildCheckboxGroup = function (field) {
    var self = this;
    var group = document.createElement('div');
    group.className = 'nff-checkbox-group-wrap';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-describedby', this._describedBy(field));
    var currentValue = Array.isArray(this._values[field.name]) ? this._values[field.name] : [];

    (field.options || []).forEach(function (opt, index) {
      var row = document.createElement('label');
      row.className = 'nff-checkbox-row';
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.name = field.name + '[]';
      input.id = self._fieldId(field.name) + '-' + index;
      input.value = opt.value;
      input.className = 'nff-checkbox';
      input.checked = currentValue.indexOf(opt.value) !== -1;
      if (field.disabled || opt.disabled) input.disabled = true;
      row.appendChild(input);
      var text = document.createElement('span');
      text.className = 'nff-checkbox-label';
      text.textContent = opt.label != null ? opt.label : opt.value;
      row.appendChild(text);
      group.appendChild(row);
    });

    return group;
  };

  NeikiForms.prototype._buildRange = function (field) {
    var wrap = document.createElement('div');
    wrap.className = 'nff-range-wrap';
    var input = document.createElement('input');
    input.type = 'range';
    this._applyCommonAttrs(input, field);
    input.className = 'nff-range';
    input.min = field.min != null ? field.min : 0;
    input.max = field.max != null ? field.max : 100;
    if (field.step != null) input.step = field.step;
    input.value = this._values[field.name] != null && this._values[field.name] !== '' ? this._values[field.name] : input.min;
    wrap.appendChild(input);
    var output = document.createElement('output');
    output.className = 'nff-range-value';
    output.setAttribute('data-for', field.name);
    output.textContent = input.value;
    wrap.appendChild(output);
    return wrap;
  };

  NeikiForms.prototype._buildFile = function (field) {
    var self = this;
    var wrap = document.createElement('div');
    wrap.className = 'nff-file-wrap';
    var input = document.createElement('input');
    input.type = 'file';
    this._applyCommonAttrs(input, field);
    input.className = 'nff-file-input';
    if (field.multiple) input.multiple = true;
    if (field.accept) input.accept = field.accept;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nff-file-btn';
    btn.innerHTML = ICONS.upload + '<span>' + escapeHtml(this._t(field.multiple ? 'file.chooseMultiple' : 'file.choose')) + '</span>';
    btn.addEventListener('click', function () { input.click(); });

    var nameEl = document.createElement('span');
    nameEl.className = 'nff-file-name';
    nameEl.textContent = this._t('file.noFileChosen');

    input.addEventListener('change', function () {
      if (input.files && input.files.length) {
        nameEl.textContent = input.files.length === 1 ? input.files[0].name : self._t('file.filesChosen', { count: input.files.length });
      } else {
        nameEl.textContent = self._t('file.noFileChosen');
      }
    });

    wrap.appendChild(input);
    wrap.appendChild(btn);
    wrap.appendChild(nameEl);
    return wrap;
  };

  // ---------------------------------------------------------------------
  // Nav rendering
  // ---------------------------------------------------------------------

  NeikiForms.prototype._renderNav = function () {
    var isFirst = this._currentStep === 0;
    var isLast = this._currentStep === this._steps.length - 1;

    this._backBtn.hidden = !this._isMultiStep || isFirst;
    this._backBtn.textContent = this._schemaMeta.backLabel || this._t('nav.back');

    this._nextBtn.hidden = !this._isMultiStep || isLast;
    this._nextBtn.textContent = this._schemaMeta.nextLabel || this._t('nav.next');

    this._submitBtn.hidden = this._isMultiStep && !isLast;
    this._submitBtn.textContent = this._submitting ? this._t('nav.submitting') : (this._schemaMeta.submitLabel || this._t('nav.submit'));
    this._submitBtn.disabled = this._submitting;
    this._submitBtn.classList.toggle('is-loading', this._submitting);

    this._resetBtn.hidden = !this._schemaMeta.showReset;
    this._resetBtn.textContent = this._schemaMeta.resetLabel || this._t('nav.reset');
  };

  // ---------------------------------------------------------------------
  // Validation
  // ---------------------------------------------------------------------

  NeikiForms.prototype._allFields = function () {
    var fields = [];
    this._steps.forEach(function (step) {
      step.fields.forEach(function (field) {
        if (field.type !== 'static') fields.push(field);
      });
    });
    return fields;
  };

  NeikiForms.prototype.validateField = function (name) {
    var field = this._fieldIndex[name];
    if (!field) return true;
    var self = this;
    var message = validateFieldValue(field, this._values[name], this._values, function (path, vars) { return self._t(path, vars); });
    if (message) {
      this._errors[name] = message;
      return false;
    }
    delete this._errors[name];
    return true;
  };

  NeikiForms.prototype._validateAndRenderField = function (name) {
    var valid = this.validateField(name);
    this._renderFieldError(name);
    this._emit('validate', { name: name, valid: valid, error: this._errors[name] || null });
    return valid;
  };

  NeikiForms.prototype._renderFieldError = function (name) {
    var errorEl = this._fieldsEl.querySelector('#' + cssEscape(this._fieldId(name) + '-error'));
    var fieldWrapper = errorEl ? errorEl.closest('.nff-field') : null;
    var message = this._errors[name];

    if (errorEl) {
      errorEl.textContent = message || '';
      errorEl.hidden = !message;
    }
    if (fieldWrapper) {
      fieldWrapper.classList.toggle('is-invalid', !!message);
    }
    var control = this._fieldsEl.querySelector('#' + cssEscape(this._fieldId(name)));
    if (control) {
      if (message) control.setAttribute('aria-invalid', 'true');
      else control.removeAttribute('aria-invalid');
    }
  };

  NeikiForms.prototype.validate = function () {
    var self = this;
    var allValid = true;
    this._allFields().forEach(function (field) {
      var valid = self.validateField(field.name);
      self._touched[field.name] = true;
      if (!valid) allValid = false;
    });
    this._renderFields();
    return allValid;
  };

  NeikiForms.prototype._validateStep = function (stepIndex) {
    var self = this;
    var step = this._steps[stepIndex];
    if (!step) return true;
    var valid = true;
    step.fields.forEach(function (field) {
      if (field.type === 'static') return;
      self._touched[field.name] = true;
      if (!self.validateField(field.name)) valid = false;
    });
    this._renderFields();
    return valid;
  };

  NeikiForms.prototype._firstInvalidStep = function () {
    for (var i = 0; i < this._steps.length; i++) {
      var fields = this._steps[i].fields;
      for (var j = 0; j < fields.length; j++) {
        if (this._errors[fields[j].name]) return i;
      }
    }
    return -1;
  };

  // ---------------------------------------------------------------------
  // Step navigation
  // ---------------------------------------------------------------------

  NeikiForms.prototype.nextStep = function () {
    if (!this._validateStep(this._currentStep)) {
      this._focusFirstError();
      return this;
    }
    if (this._currentStep < this._steps.length - 1) {
      this._currentStep++;
      if (this._currentStep > this._maxStepReached) this._maxStepReached = this._currentStep;
      this._render();
      this._emit('step-change', { step: this._currentStep, stepId: this._steps[this._currentStep].id });
    }
    return this;
  };

  NeikiForms.prototype.prevStep = function () {
    if (this._currentStep > 0) {
      this._currentStep--;
      this._render();
      this._emit('step-change', { step: this._currentStep, stepId: this._steps[this._currentStep].id });
    }
    return this;
  };

  NeikiForms.prototype.goToStep = function (index) {
    if (index < 0 || index >= this._steps.length) return this;
    if (index > this._maxStepReached) return this;
    this._currentStep = index;
    this._render();
    this._emit('step-change', { step: this._currentStep, stepId: this._steps[this._currentStep].id });
    return this;
  };

  NeikiForms.prototype.getStep = function () {
    return this._currentStep;
  };

  NeikiForms.prototype._focusFirstError = function () {
    var firstErrorName = null;
    var step = this._steps[this._currentStep];
    for (var i = 0; i < step.fields.length; i++) {
      if (this._errors[step.fields[i].name]) { firstErrorName = step.fields[i].name; break; }
    }
    if (firstErrorName) this.focusField(firstErrorName);
  };

  NeikiForms.prototype.focusField = function (name) {
    var control = this._fieldsEl.querySelector('#' + cssEscape(this._fieldId(name)) + ', [name="' + cssEscape(name) + '"], [name="' + cssEscape(name) + '[]"]');
    if (control) control.focus();
    return this;
  };

  // ---------------------------------------------------------------------
  // Submit
  // ---------------------------------------------------------------------

  NeikiForms.prototype._handleSubmit = function () {
    var self = this;
    if (this._submitting) return;

    if (!this._config.novalidate && !this.validate()) {
      var invalidStep = this._firstInvalidStep();
      if (invalidStep !== -1 && invalidStep !== this._currentStep) {
        this._currentStep = invalidStep;
        if (invalidStep > this._maxStepReached) this._maxStepReached = invalidStep;
        this._render();
      }
      this._focusFirstError();
      this._emit('invalid', { errors: Object.assign({}, this._errors) });
      return;
    }

    var values = this.getValues();
    var formData = this._buildFormData(values);
    var submitEvent = this._emit('submit', { values: values, formData: formData, form: this }, { cancelable: true });
    if (submitEvent.defaultPrevented) return;

    if (this._config.action) {
      this._submitToAction(values, formData);
    } else {
      this._emit('success', { values: values });
    }
  };

  NeikiForms.prototype._buildFormData = function (values) {
    var formData = new FormData();
    Object.keys(values).forEach(function (key) {
      var value = values[key];
      if (value instanceof FileList) {
        Array.prototype.forEach.call(value, function (file) { formData.append(key, file); });
      } else if (Array.isArray(value)) {
        value.forEach(function (item) { formData.append(key + '[]', item); });
      } else if (value != null) {
        formData.append(key, value);
      }
    });
    return formData;
  };

  NeikiForms.prototype._submitToAction = function (values, formData) {
    var self = this;
    this.setBusy(true);
    var hasFiles = Object.keys(values).some(function (key) { return values[key] instanceof FileList; });
    var options = { method: this._config.method };
    if (hasFiles || this._config.method === 'GET') {
      options.body = this._config.method === 'GET' ? undefined : formData;
    } else {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(values);
    }
    var url = this._config.action;
    if (this._config.method === 'GET') {
      var params = new URLSearchParams();
      Object.keys(values).forEach(function (key) {
        var value = values[key];
        if (Array.isArray(value)) value.forEach(function (v) { params.append(key + '[]', v); });
        else if (value != null) params.append(key, value);
      });
      url += (url.indexOf('?') === -1 ? '?' : '&') + params.toString();
    }

    fetch(url, options).then(function (response) {
      self.setBusy(false);
      if (!response.ok) {
        return response.text().then(function (text) {
          throw new Error(text || ('HTTP ' + response.status));
        });
      }
      return response.json().catch(function () { return null; });
    }).then(function (data) {
      self._emit('success', { values: values, response: data });
    }).catch(function (err) {
      self.setBusy(false);
      self._emit('error', { values: values, error: err });
    });
  };

  NeikiForms.prototype.setBusy = function (busy) {
    this._submitting = !!busy;
    this._renderNav();
    return this;
  };

  NeikiForms.prototype.submit = function () {
    this._handleSubmit();
    return this;
  };

  NeikiForms.prototype.reset = function () {
    var self = this;
    this._values = {};
    this._errors = {};
    this._touched = {};
    this._allFields().forEach(function (field) {
      self._values[field.name] = defaultValueFor(field);
    });
    this._currentStep = 0;
    this._maxStepReached = 0;
    this._submitting = false;
    this._render();
    this._emit('reset', {});
    return this;
  };

  // ---------------------------------------------------------------------
  // Values API
  // ---------------------------------------------------------------------

  NeikiForms.prototype.getValues = function () {
    var copy = {};
    Object.keys(this._values).forEach(function (key) {
      copy[key] = this._values[key];
    }, this);
    return copy;
  };

  NeikiForms.prototype.getValue = function (name) {
    return this._values[name];
  };

  NeikiForms.prototype.setValue = function (name, value) {
    this._values[name] = value;
    if (this.isConnected) this._renderFields();
    return this;
  };

  NeikiForms.prototype.setValues = function (values) {
    var self = this;
    values = values || {};
    Object.keys(values).forEach(function (key) {
      if (self._fieldIndex[key]) self._values[key] = values[key];
    });
    if (this.isConnected) this._renderFields();
    return this;
  };

  // ---------------------------------------------------------------------
  // Emit
  // ---------------------------------------------------------------------

  NeikiForms.prototype._emit = function (name, detail, opts) {
    var event = new CustomEvent('neiki-forms:' + name, {
      detail: detail,
      bubbles: true,
      composed: true,
      cancelable: !!(opts && opts.cancelable)
    });
    this.dispatchEvent(event);
    return event;
  };

  customElements.define('neiki-forms', NeikiForms);
})();
