# TANGO MAGENTA Agent Protocol

> Claude Code agent guide for the tango-magenta repository.

---

## 1. Project Overview

### Purpose
4-Layer Broadcasting Content Factory (CAVE UI Architecture)

### Tech Stack
- Pure static site (HTML/CSS/JS)
- GitHub Pages hosting
- CAVE UI Design System
- Mobile-Only (430px max-width)

### Architecture
parksy.kr 방송국 구조를 그대로 카피한 템플릿.
4-Layer Showroom + Content Factory Pipeline.

---

## 2. HQ Integration

| Item | Value |
|------|-------|
| **HQ Repo** | dtslib1979/dtslib-branch |
| **Branch ID** | tango-magenta |
| **Status** | active |
| **Visibility** | public |
| **Established** | 2026.01.23 |

---

## 3. Folder Structure

```
tango-magenta/
├── index.html              # Layer 1: Public Portal
├── inner/
│   └── index.html          # Layer 2: Gate (password)
├── zone/
│   ├── alpha/index.html    # Layer 3: Zone A (raw/entity)
│   ├── beta/index.html     # Layer 3: Zone B (structured/identity)
│   └── gamma/index.html    # Layer 3: Zone C (published/company)
│
├── design/
│   ├── cave.css            # CAVE UI stylesheet
│   ├── cave.js             # Mobile touch interactions
│   └── meaning-layer.yaml  # Semantic element definitions
│
├── specs/
│   └── layers.yaml         # 4-Layer architecture spec
│
├── api/
│   └── content.json        # Content data endpoint
│
├── assets/
│   ├── icons/
│   ├── og/
│   └── audio/
│
├── scripts/                # Build/deploy scripts
├── docs/                   # Documentation
├── platform/               # Platform extensions
│
├── FACTORY.json            # Core factory configuration
├── branch.json             # Franchise OS identity
├── manifest.webmanifest    # PWA
├── sitemap.xml
├── robots.txt
└── .nojekyll
```

---

## 4. Content Variables ({{PLACEHOLDER}})

이 레포는 템플릿입니다. 아래 변수들을 실제 값으로 교체해야 합니다:

| Variable | Description | Location |
|----------|-------------|----------|
| `{{TAGLINE}}` | 사이트 태그라인 | index.html, FACTORY.json, manifest |
| `{{DOMAIN}}` | 커스텀 도메인 | FACTORY.json, specs |
| `{{WHISPER_TOP}}` | 입구 상단 속삭임 텍스트 | index.html |
| `{{ZONE_A_TITLE}}` | Zone Alpha 제목 | index, inner, zone/alpha |
| `{{ZONE_A_DESC}}` | Zone Alpha 설명 | index, zone/alpha |
| `{{ZONE_B_TITLE}}` | Zone Beta 제목 | index, inner, zone/beta |
| `{{ZONE_B_DESC}}` | Zone Beta 설명 | index, zone/beta |
| `{{ZONE_C_TITLE}}` | Zone Gamma 제목 | index, inner, zone/gamma |
| `{{ZONE_C_DESC}}` | Zone Gamma 설명 | index, zone/gamma |
| `{{COLOR_PRIMARY}}` | 주 색상 | branch.json, FACTORY.json |
| `{{COLOR_ACCENT}}` | 보조 색상 | branch.json, FACTORY.json |
| `{{COLOR_BG}}` | 배경 색상 | FACTORY.json |
| `{{COLOR_GLOW}}` | 발광 색상 | FACTORY.json |
| `{{PHILOSOPHY_CORE}}` | 핵심 철학 | FACTORY.json |
| `{{HUMAN_ROLE}}` | 인간 역할 정의 | FACTORY.json |
| `{{PHILOSOPHY_RESULT}}` | 결과 정의 | FACTORY.json |
| `{{ZONE_A_KEYWORD}}` | Zone A 키워드 | FACTORY.json |
| `{{ZONE_A_ESSENCE}}` | Zone A 본질 | FACTORY.json |
| `{{ZONE_A_ONELINER}}` | Zone A 한줄 | FACTORY.json |
| `{{ZONE_B_KEYWORD}}` | Zone B 키워드 | FACTORY.json |
| `{{ZONE_B_ESSENCE}}` | Zone B 본질 | FACTORY.json |
| `{{ZONE_B_ONELINER}}` | Zone B 한줄 | FACTORY.json |
| `{{ZONE_C_KEYWORD}}` | Zone C 키워드 | FACTORY.json |
| `{{ZONE_C_ESSENCE}}` | Zone C 본질 | FACTORY.json |
| `{{ZONE_C_ONELINER}}` | Zone C 한줄 | FACTORY.json |

---

## 5. CAVE UI Principles

- 어둡고 (동굴)
- 여백 많고 (비어있음이 깊이)
- 텍스트 적고 (한 마디가 무겁게)
- 클릭 = 이동 (페이지가 아니라 장소)
- 스크롤 = 더 깊이

---

## 6. Gate Code

Inner Portal 비밀번호: `1126`
(inner/index.html의 data-gate-code 속성)

---

## 7. Commit Convention

```
feat: New feature
fix: Bug fix
design: CAVE UI changes
content: Content add/modify
arch: Architecture changes
```

---

*Last updated: 2026-01-23*
*Template source: parksy.kr*
*Affiliation: DTSLIB HQ*
