# TANGO MAGENTA Agent Protocol v2.0

> Claude Code agent guide for the tango-magenta repository.
> "El primer sistema que respira."

---

## 1. Project Overview

### Purpose
5-Layer Studio & Broadcast System (Body-as-Interface Architecture)

### Tech Stack
- Pure static site (HTML/CSS/JS)
- GitHub Pages hosting
- Tango UI Design System (BPM-based)
- Body Interaction Protocol v1.0
- Mobile-Only (430px max-width)
- No Service Worker
- Bing Read-Aloud & Translation Compatible

### Language
- Base: Argentine Spanish (es-AR, porteño)
- Vos form throughout
- Buenos Aires street tone

### Architecture
5-Layer broadcasting system where the body is the interface and tango is the protocol.

---

## 2. HQ Integration

| Item | Value |
|------|-------|
| **HQ Repo** | dtslib1979/dtslib-branch |
| **Branch ID** | tango-magenta |
| **Status** | active |
| **Visibility** | public |
| **Tier** | premium |
| **Established** | 2026.01.23 |

---

## 3. Folder Structure

```
tango-magenta/
├── index.html              # Entrada (Ritual + 5-Layer Navigation)
├── emisión/
│   └── index.html          # L1: Broadcast (Spotify/YouTube)
├── cuerpo/
│   └── index.html          # L2: Body Grammar (Body API docs)
├── laboratorio/
│   └── index.html          # L3: Gesture Engine (Motion rendering)
├── control/
│   └── index.html          # L4: Control Room (System metrics)
├── legado/
│   └── index.html          # L5: Legacy (Constitution + Archive)
├── inner/
│   └── index.html          # Gate (password: 1126)
│
├── design/
│   ├── tango.css           # Design System (BPM timing, dance curves)
│   ├── body-protocol.js    # Body Interaction Protocol
│   └── entrada.js          # Ritual entrance sequence
│
├── api/
│   ├── gestures.json       # Gesture database
│   ├── legacy.json         # Legacy archive data
│   └── content.json        # Content endpoint
│
├── specs/
│   ├── body-protocol.yaml  # Full protocol specification
│   ├── constitution.md     # World constitution
│   └── layers.yaml         # Architecture spec
│
├── .github/workflows/
│   ├── deploy.yml          # GitHub Pages deployment
│   ├── content-pipeline.yml # Content validation
│   └── lighthouse.yml      # Performance audits
│
├── assets/
│   ├── icons/
│   ├── og/
│   └── audio/
│
├── FACTORY.json            # Core system configuration v2.0
├── branch.json             # Franchise OS identity
├── manifest.webmanifest    # PWA manifest
├── .lighthouserc.json      # Lighthouse CI config
├── sitemap.xml
├── robots.txt
└── .nojekyll
```

---

## 4. Body Protocol (UI Events = Body Actions)

| Event | Spanish | English | Implementation |
|-------|---------|---------|----------------|
| Scroll | Acercarse | Approach | IntersectionObserver |
| Tap | Compromiso | Commit | click/touchend |
| Hold | Esperar | Wait/Sense | touchstart + 857ms |
| Swipe | Girar | Turn | touchstart/end diff |
| Idle 3s | Respirar | Breathe | body.respirando |
| Back | Soltar | Release | history.back() |

---

## 5. BPM Timing System (70 BPM Tango Lento)

| Token | Value | Use |
|-------|-------|-----|
| --beat | 857ms | Standard transition |
| --half-beat | 428ms | Quick response |
| --double-beat | 1714ms | Slow reveal |
| --breath | 2571ms | Full breath cycle |
| --phrase | 3428ms | 4-bar phrase |

---

## 6. Dance Motion Curves

| Curve | Values | Use |
|-------|--------|-----|
| --ease-approach | cubic-bezier(0.16, 1, 0.3, 1) | Entrance |
| --ease-retreat | cubic-bezier(0.7, 0, 0.84, 0) | Exit |
| --ease-embrace | cubic-bezier(0.34, 1.56, 0.64, 1) | Overshoot |
| --ease-release | cubic-bezier(0.25, 0, 0.5, 1) | Gentle end |

---

## 7. Gate Code

Inner Portal password: `1126`
(inner/index.html data-gate-code attribute)

---

## 8. Entrada Ritual

1. 3s absolute darkness
2. "Respirá despacio." appears (CSS animation-delay: 3s)
3. After breath + beat: ritual fades, system appears
4. sessionStorage skip on return visits

---

## 9. Audio Layer

- Spotify embed playlists (fixed bottom, 80px)
- YouTube embed for video sessions
- No service worker
- body.con-reproductor adds padding-bottom

---

## 10. Commit Convention

```
feat: New feature
fix: Bug fix
design: Tango UI changes
content: Content add/modify
arch: Architecture changes
body: Body Protocol changes
audio: Audio layer changes
```

---

*Last updated: 2026-01-23*
*Architecture: 5-Layer Studio & Broadcast*
*Affiliation: DTSLIB HQ*
