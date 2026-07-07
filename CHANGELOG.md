# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-07

### Added

- Initial release of Neiki's Forms.
- Web Component with Shadow DOM isolation for CSS-conflict-free embedding.
- Schema-driven forms via `setSchema()` — fields, labels, help text and layout are all described as plain JavaScript objects (or JSON, including a declarative `<script type="application/json">` child for pure-HTML pages).
- Built-in field types: `text`, `email`, `password` (with show/hide toggle), `tel`, `url`, `search`, `number`, `date`, `time`, `datetime-local`, `month`, `week`, `color`, `textarea`, `select` (single & multiple), `checkbox`, `checkbox-group`, `radio`, `switch`, `range`, `file`, `hidden` and `static` (headings/paragraphs for layout).
- Responsive field grid with per-field width (`full`, `half`, `third`).
- Built-in validation: `required`, `minLength`/`maxLength`, `min`/`max`, `pattern`, format checks for `email`/`url`/`tel`/`number`, cross-field `match` (e.g. confirm password), and custom `validate(value, values)` functions — with live re-validation on blur/change and accessible error messages (`aria-invalid`, `aria-describedby`, `role="alert"`).
- Multi-step mode: pass `steps` instead of `fields` to get a wizard with a clickable progress indicator, per-step validation before advancing, and full keyboard/focus handling.
- Cancelable `submit` event carrying both structured `values` and a `FormData` payload, so the component can be wired to any backend; when not canceled and an `action` attribute is set, it performs the request itself (`fetch`, JSON or multipart depending on whether file fields are present) and emits `success`/`error`.
- Full JavaScript API: `setSchema`, `getSchema`, `setValues`/`getValues`/`setValue`/`getValue`, `validate`/`validateField`, `nextStep`/`prevStep`/`goToStep`/`getStep`, `submit`, `reset`, `setBusy`, `focusField`, `setConfig`/`getConfig`, `setLang`/`addTranslations`.
- Built-in translations for English, Czech, German, Spanish, French, Polish, Slovak and Ukrainian, selectable via the `lang` attribute or `setLang()`, extensible with `addTranslations()`.
- Light, dark and auto (`prefers-color-scheme`) themes, combined with six accent presets (`blue`, `violet`, `emerald`, `rose`, `amber`, `slate`).
- Full keyboard support, visible focus states, `prefers-reduced-motion` awareness, and semantic markup (`<label>`, `<fieldset>`-equivalent grouping, `role="radiogroup"`) throughout.
- CSS variable customization with a consistent `--nff-*` prefix.
- `minify.py` build script that embeds the component's CSS directly into `dist/neiki-forms.js` and `dist/neiki-forms.min.js`, so a single script tag is enough at runtime; standalone `dist/neiki-forms.css` and `.min.css` are also produced for reference.

[1.0.0]: https://github.com/neikiri/neiki-forms/releases/tag/1.0.0
