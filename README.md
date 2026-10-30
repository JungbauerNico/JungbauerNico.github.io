# Nico Jungbauer – statische Portfolio-Website

Zweisprachige, responsive und barrierearme Website aus reinem HTML, CSS und Vanilla JavaScript. Alle Schriften, Bilder, Stylesheets und Skripte liegen lokal im Repository. Der Website-Code setzt keine Cookies und bindet keine Analyse-, Tracking- oder CDN-Dienste ein.

## Projektstruktur

```text
.
├── index.html
├── legal.html
├── en/
│   ├── index.html
│   └── legal.html
├── assets/
│   ├── css/styles.css
│   ├── fonts/
│   ├── images/
│   └── js/main.js
├── .nojekyll
├── 404.html
├── robots.txt
└── sitemap.xml
```

## Vor der Veröffentlichung prüfen

- Sind `jnico@hotmail.de` und `+49 173 820 3427` weiterhin aktuell und zur Veröffentlichung bestimmt?
- Tritt Nico Jungbauer als Privatperson auf? Falls eine Registereintragung, Umsatzsteuer-/Wirtschafts-ID, Aufsichtsbehörde oder ein reglementierter Beruf einschlägig ist, muss das Impressum ergänzt werden. Keine private Steuernummer veröffentlichen.
- Bleibt es bei einer statischen Website ohne Kontaktformular, Newsletter, externe Einbettungen, Tracking oder dauerhafte Sprachspeicherung?
- Bleibt Hotmail/Microsoft der tatsächlich genutzte E-Mail-Anbieter?
- Liegen die erforderlichen Nutzungsrechte an allen Bildern und Publikationsangaben vor?

## Veröffentlichung unter jungbauernico.de

Veröffentlicht wird aus dem bestehenden Repository `JungbauerNico/JungbauerNico.github.io`. Git-Remote: `https://github.com/JungbauerNico/JungbauerNico.github.io.git`.

1. Unter **Settings → Pages → Build and deployment** die Quelle **Deploy from a branch**, den Branch **main** und den Ordner **/(root)** verwenden.
2. GitHub Pages veröffentlicht Änderungen nach jedem Push auf `main` automatisch. Die Zieladresse nach abgeschlossener Domain-Einrichtung ist `https://jungbauernico.de/`.
3. Unter **Settings → Pages** die Option **Enforce HTTPS** aktivieren, sobald sie verfügbar ist.

## Eigene Domain jungbauernico.de

Die Domain `jungbauernico.de` zuerst im GitHub-Konto verifizieren und anschließend unter **Settings → Pages → Custom domain** eintragen. Erst danach die DNS-Einträge beim Registrar setzen.

Für die Hauptdomain `jungbauernico.de` vier A-Records anlegen:

| Typ | Name | Wert |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Für `www.jungbauernico.de` zusätzlich:

| Typ | Name | Wert |
| --- | --- | --- |
| CNAME | `www` | `JungbauerNico.github.io` |

Optional können die von GitHub dokumentierten AAAA-Records ergänzt werden. Keine Wildcard-DNS-Einträge wie `*.jungbauernico.de` verwenden. DNS-Änderungen können bis zu 24 Stunden benötigen. Danach in GitHub **Enforce HTTPS** aktivieren.

Bei der hier verwendeten Veröffentlichung aus dem `main`-Branch verwaltet GitHub die `CNAME`-Datei beim Speichern der Domain-Einstellung. Diese automatisch erzeugte Datei anschließend nicht löschen.

## Lokale Vorschau

Die Website benötigt keinen Build-Schritt. Für eine zuverlässige Vorschau einen kleinen lokalen Webserver im Projektordner starten, zum Beispiel:

```bash
python -m http.server 8080
```

Danach `http://localhost:8080/` öffnen.

## Lokale Schrift

Die Website enthält Inter 4.1 (Regular und Bold) unter der SIL Open Font License 1.1. Die Lizenz liegt unter `assets/fonts/OFL.txt`.
