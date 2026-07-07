# Security Policy

## Supported Versions

Only the latest published release of Neiki's Forms receives security fixes.

| Version | Supported |
| --- | --- |
| 1.x | ✅ |
| < 1.0 | ❌ |

## Reporting a Vulnerability

Please do not open a public GitHub issue for security vulnerabilities.

Instead, report it privately by emailing **neikiri@neikiri.dev** with:

- A description of the vulnerability and its potential impact
- Steps to reproduce it, including a minimal example if possible
- The affected version(s)

You should receive an initial response within **72 hours**. We will keep you updated as the issue is investigated and fixed, and will credit you in the release notes unless you prefer to stay anonymous.

## Scope

This policy covers the code in this repository (`src/`, `dist/`, `demo/`, `minify.py`). It does not cover:

- Data your own backend chooses to accept, store, or process through a form's `submit` event or `action` attribute.
- Third-party CDNs or package registries used to distribute the built files.

## Security Design Notes

- The component renders inside a Shadow DOM, isolating its markup and styles from the host page.
- All dynamic text (labels, options, help/error messages, translations) is inserted via `textContent` or DOM APIs rather than raw HTML concatenation — user-supplied schema strings cannot inject markup into the DOM.
- The component performs no network requests of its own unless you explicitly set the `action` attribute (or `config.action`); without it, submitting a form only ever dispatches a cancelable `submit` event with the collected values, so nothing leaves the browser unless your own code — or the built-in `action`-based `fetch()` — sends it.
- Client-side validation (`required`, `pattern`, length/range checks, custom validators) is a UX convenience only. It is not a substitute for server-side validation; always re-validate and sanitize submitted data on the backend.
- File inputs expose the native `File`/`FileList` objects from `getValues()`; the component does not read, upload or otherwise process file contents on its own.

See [README.md](README.md#security) for more details on the security model.
