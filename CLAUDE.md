# ESPÍRITU TANGO — Agent Protocol v1.0

---

## 헌법 제1조: 레포지토리는 소설이다

> **모든 레포지토리는 한 권의 소설책이다.**
> **커밋이 문장이고, 브랜치가 챕터이고, git log --reverse가 줄거리다.**

- 삽질, 실패, 방향 전환 전부 남긴다. squash로 뭉개지 않는다.
- 기능 구현 과정 = 플롯 (문제→시도→실패→전환→해결)
- 레포 서사 → 블로그/웹툰/방송 콘텐츠로 파생 (액자 구성)

### 서사 추출 명령

```bash
narrative-extract.py --repo .                    # 이 레포 줄거리
narrative-extract.py --repo . --format synopsis  # 시놉시스
narrative-extract.py --repo . --format blog      # 블로그 원고
narrative-extract.py --repo . --climax           # 전환점만
narrative-extract.py --all ~                     # 28개 레포 연작 인덱스
```

### 서사 분류

| 커밋 유형 | 서사 | 의미 |
|-----------|------|------|
| `feat:` / 기능 추가 | 시도 | 주인공이 무언가를 만든다 |
| `fix:` / 버그 수정 | 삽질 | 예상대로 안 됐다 |
| `migration` / 전환 | 전환 | 버리고 다른 길을 간다 |
| `rewrite` / v2 | 각성 | 처음부터 제대로 다시 한다 |
| `refactor:` | 성장 | 같은 일을 더 잘하게 됐다 |
| `docs:` | 정리 | 지나온 길을 돌아본다 |

---


> Physical Studio Protocol HQ
> 물성화된 공간의 프로토콜 본사

---

## 1. Identity

| 항목 | 값 |
|------|-----|
| **Tier** | 2 (Protocol HQ) |
| **Parent** | dtslib-papyrus (그룹 HQ) |
| **Type** | Studio Protocol HQ |
| **Domain** | dtslib1979.github.io/espiritu-tango |

### Purpose
물성화된 피지컬 스튜디오의 프로토콜 본사. 빵집이든, 방송국이든, 탱고 스튜디오든 — 물리적 공간이 있는 모든 브랜치의 보일러플레이트.

### What This Is
- ✅ Physical Studio Protocol (물성 스튜디오 프로토콜)
- ✅ Boilerplate for Tier 3 branches
- ✅ Design System 원본
- ✅ Body Protocol 정의

### What This Is NOT
- ❌ 실제 사업장 (Tier 3가 실사업)
- ❌ 콘텐츠 플랫폼
- ❌ 단순 웹사이트

---

## 2. Hierarchy

```
dtslib-papyrus (Tier 1 - 그룹 HQ)
    │
    ├── dtslib-branch (Tier 2 - 프랜차이즈 OS)
    │       └── koosy, gohsy, artrew, papafly, lotus
    │
    └── espiritu-tango (Tier 2 - Studio Protocol HQ) ← 현재 위치
            │
            ├── hoyadang.com (Tier 3 - 빵집)
            └── gohsy-production (Tier 3 - 방송 스튜디오)
```

---

## 3. Tier 3 Branches (하위 지점)

| Branch | Type | Domain | Status |
|--------|------|--------|--------|
| hoyadang.com | Restaurant | hoyadang.com | Active |
| gohsy-production | Broadcast | gohsy-production.com | Active |
| [Future] | ... | ... | Planned |

---

## 4. Core Files

| 파일 | 용도 |
|------|------|
| `index.html` | 프로토콜 쇼케이스 |
| `CLAUDE.md` | 에이전트 프로토콜 (이 파일) |
| `FACTORY.json` | 설정 메타데이터 |
| `design/tango.css` | 디자인 시스템 원본 |
| `design/body-protocol.js` | 인터랙션 프로토콜 |
| `specs/` | 프로토콜 명세 |

---

## 5. Design System (하위 브랜치 상속)

### BPM Timing (70 BPM)
| Token | Value | Use |
|-------|-------|-----|
| --beat | 857ms | Standard transition |
| --half | 428ms | Quick response |
| --double | 1714ms | Slow reveal |

### Body Protocol
| Event | Action |
|-------|--------|
| Scroll | Reveal animation |
| Tap | Commit/Navigate |
| Hold 857ms | Special action |
| Idle 3s | Breathing state |

---

## 6. Commit Convention

```
feat: 새 기능
fix: 버그 수정
design: 디자인 시스템 변경
protocol: 프로토콜 변경
branch: 하위 브랜치 관련
docs: 문서 변경
```

커밋 메시지 끝:
```
Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

## 7. Branch Creation Guide

새 Tier 3 브랜치 생성 시:

```bash
# 1. 레포 생성
gh repo create {name} --public

# 2. espiritu-tango 복사
cp -r ~/espiritu-tango/* ~/{name}/

# 3. 브랜딩 교체
find . -name "*.html" -exec sed -i 's/ESPÍRITU TANGO/{NAME}/g' {} \;

# 4. CLAUDE.md 수정 (Tier 3 템플릿 적용)

# 5. 커밋 & 푸시
git add -A && git commit -m "init: {name} branch" && git push
```

---

## 8. LLM Control Interface

이 레포는 GitHub 폐쇄 생태계 내에서 LLM으로 제어됨.

| Action | Method |
|--------|--------|
| READ | `git clone` / file read |
| WRITE | file write / `git commit` |
| EXECUTE | GitHub Actions |
| STATE | `git log` / file content |
| BRANCH | 하위 브랜치 생성/관리 |

---

*Last updated: 2026-01-26*
*Version: 1.0*
*Affiliation: DTSLIB HQ (Tier 2)*