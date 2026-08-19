## यादों की कैसेट — Yaado Ki Cassette 📻

A nostalgic Hindi retro-radio website — old Bollywood classics and yaadon bhari cassette-era songs, playing 24/7 in a warm, sunset-village themed player.

🔗 **Live site:** [nikhilsingh187.github.io/Yaado-ki-Cassette](https://nikhilsingh187.github.io/Yaado-ki-Cassette/)

---

## ✨ Features

- **Retro radio player** — custom-built player bar (play/pause, next/previous, seek, volume) powered by a hidden YouTube playlist, so it feels like a real radio, not a video embed.
- **Live album art** — cover image updates automatically to match whichever song is currently playing.
- **Atmosphere touches** — live clock, a gently drifting "online listeners" counter, and a full-screen sunset-village background.
- **Installable (PWA)** — can be added to your phone's home screen like an app, powered by `manifest.json` and a service worker.
- **WhatsApp community** — one-tap join link for the Yaado crew group.
- **Quick links** — jump straight to Spotify or YouTube Music search for the playlist.
- **Full-quality background** — tap/click the background image on any device to view it at full resolution.

---

## 🛠️ Tech Stack

- **HTML, CSS, JavaScript** — no frameworks, single-page site.
- **YouTube IFrame Player API** — drives playback in the background (audio-only experience, no visible video).
- **Web App Manifest + Service Worker** — enables "Install app" / add-to-home-screen behavior.
- **GitHub Pages** — free static hosting straight from this repo.

---

## 📁 Project Structure

```
Yaado-ki-Cassette/
├── index.html        # Main site — markup, styles, and player logic
├── manifest.json      # PWA manifest (app name, icons, theme color)
├── sw.js              # Service worker for offline/installable support
├── robots.txt         # Tells search engines the site is crawlable
├── sitemap.xml         # Sitemap submitted to Google Search Console
├── assets/
│   └── hero-bg.png    # Background artwork
└── README.md           # You are here
```

---

## 🚀 Running Locally

This is a static site — no build step needed.

1. Clone or download the repo.
2. Make sure `assets/hero-bg.png` exists.
3. Open `index.html` in a browser, or serve the folder with any static server (e.g. `python -m http.server`) so the service worker and YouTube embed behave like they would in production.

## 🌐 Deployment

Hosted via **GitHub Pages** directly from this repository. Any change pushed to `index.html` (or the other root files) goes live automatically after GitHub Pages rebuilds.

> Note: since the site is a PWA, browsers may cache old versions via the service worker. If a fresh deploy doesn't show up, clear the service worker / site data in DevTools → Application, then hard-refresh.

---

## 📬 Contact

**Nikhil Singh**
✉️ nikhilsingh.cse07@gmail.com

---

## 📄 License

This project is for personal/non-commercial use. Song playback is streamed via YouTube's official embeddable player — no audio files are hosted in this repository.
