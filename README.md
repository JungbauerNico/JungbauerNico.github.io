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
├── .github/workflows/deploy.yml
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

## Kostenlos unter jungbauernico.github.io veröffentlichen

1. Auf GitHub ein **öffentliches, leeres Repository** mit dem exakten Namen `JungbauerNico.github.io` erstellen. Beim Erstellen kein README, keine Lizenz und keine `.gitignore` hinzufügen.
2. Diesen Ordner lokal öffnen und die Dateien auf den `main`-Branch übertragen:

   ```bash
   git init -b main
   git add .
   git commit -m "Create bilingual portfolio website"
   git remote add origin https://github.com/JungbauerNico/JungbauerNico.github.io.git
   git push -u origin main
   ```

3. Im Repository **Settings → Pages** öffnen. Unter **Build and deployment** als Quelle **GitHub Actions** wählen.
4. Der Workflow `Deploy static website to GitHub Pages` startet bei jedem Push auf `main`. Nach erfolgreichem Lauf ist die Seite unter `https://jungbauernico.github.io/` erreichbar.
5. Unter **Settings → Pages** die Option **Enforce HTTPS** aktivieren, sobald sie verfügbar ist.

## Spätere eigene .de-Domain

Die Domain zuerst im GitHub-Konto verifizieren und anschließend unter **Settings → Pages → Custom domain** eintragen. Erst danach die DNS-Einträge beim Registrar setzen.

Für die Hauptdomain `beispiel.de` vier A-Records anlegen:

| Typ | Name | Wert |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Für `www.beispiel.de` zusätzlich:

| Typ | Name | Wert |
| --- | --- | --- |
| CNAME | `www` | `JungbauerNico.github.io` |

Optional können die von GitHub dokumentierten AAAA-Records ergänzt werden. Keine Wildcard-DNS-Einträge wie `*.beispiel.de` verwenden. DNS-Änderungen können bis zu 24 Stunden benötigen. Danach in GitHub **Enforce HTTPS** aktivieren.

Bei der hier verwendeten Veröffentlichung per GitHub Actions wird eine `CNAME`-Datei im Repository nicht benötigt; maßgeblich ist die Domain-Einstellung unter **Settings → Pages**.

## Lokale Vorschau

Die Website benötigt keinen Build-Schritt. Für eine zuverlässige Vorschau einen kleinen lokalen Webserver im Projektordner starten, zum Beispiel:

```bash
python -m http.server 8080
```

Danach `http://localhost:8080/` öffnen.

## Lokale Schrift

Die Website enthält Inter 4.1 (Regular und Bold) unter der SIL Open Font License 1.1. Die Lizenz liegt unter `assets/fonts/OFL.txt`.
