# 📝 PureNotes

## Einfache, elegante und leistungsstarke Notizen-App

PureNotes ist eine minimalistische Notiz-App, die sich auf Einfachheit und Effizienz konzentriert. Mit einer klaren Benutzeroberfläche und leistungsstarken Funktionen bietet PureNotes alles, was du für das Erstellen, Verwalten und Organisieren deiner Notizen benötigst.

## Features

- 🌟 **Einfaches Erstellen und Verwalten von Notizen**
- 🚀 **Schnelle und intuitive Benutzeroberfläche**
- 🎨 **Unterstützung für Markdown**
- 🔍 **Inhaltsbasierte Suche**
- 🌈 **Benutzerdefinierte Themes und Anpassungen**
- ☁️ **Cloud-Synchronisation (bald verfügbar)**

## Installation

### Voraussetzungen

- Node.js
- npm

### Schritte zur Installation

1. **Repository klonen**

```bash
git clone https://github.com/jonas-is-coding/purenotes.git
cd purenotes
```

2. **Abhängigkeiten installieren**

```bash
yarn
```

3. **App starten**

```bash
yarn dev
```

## Tastenkombinationen

- **Neue Notiz erstellen**: `CommandOrControl+N`
- **Speichern**: `CommandOrControl+S`
- **Suchen**: `CommandOrControl+F`

## Architektur

PureNotes basiert auf [Electron](https://www.electronjs.org/), das es ermöglicht, plattformübergreifende Desktop-Apps mit Web-Technologien zu erstellen. Der Code ist in TypeScript geschrieben und verwendet moderne Web-Technologien und -Frameworks.

## Ordnerstruktur

```
PureNotes/
├── resources/         # Ressourcen wie Icons und Logos
├── src/
│   ├── main/          # Hauptprozess Code
│   ├── renderer/      # Rendererprozess Code
│   ├── preload/       # Preload Skripte
│   └── lib/           # Geschäftslogik und Helferfunktionen
├── package.json       # npm Konfigurationsdatei
└── README.md          # Diese Datei
```

## Mitwirken

Wir freuen uns über Beiträge! Bitte lese unsere [CONTRIBUTING.md](CONTRIBUTING.md) für weitere Informationen darüber, wie du beitragen kannst.

## Lizenz

Dieses Projekt steht unter der MIT Lizenz. Weitere Informationen findest du in der [LICENSE](LICENSE) Datei.

## Kontakt

- **Github**: [jonas-is-coding](https://github.com/jonas-is-coding)
- **Email**: jonasbrahmst@gmail.com