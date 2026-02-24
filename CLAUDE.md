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

## ⚙️ 헌법 제2조: 매트릭스 아키텍처

> **모든 레포지토리는 공장이다.**
> **가로축은 재무 원장(ERP)이고, 세로축은 제조 공정(FAB)이다.**

### 가로축: 재무 원장 (ERP 로직)

커밋은 전표다. 한번 기표하면 수정이 아니라 반대 분개로 정정한다.

| 회계 개념 | Git 대응 | 예시 |
|-----------|----------|------|
| 전표 (Journal Entry) | 커밋 | `feat: 새 기능 구현` |
| 원장 (General Ledger) | `git log --reverse` | 레포 전체 거래 이력 |
| 계정과목 (Account) | 디렉토리 | `tools/`, `scripts/`, `assets/` |
| 회계 인터페이스 | 크로스레포 동기화 | 명시적 스크립트/매니페스트 |
| 감사 추적 (Audit Trail) | Co-Authored-By | AI/Human 협업 기록 |

### 세로축: 제조 공정 (FAB 로직)

레포는 반도체 팹이다. 원자재(아이디어)가 들어와서 완제품(콘텐츠)이 나간다.

| 제조 개념 | 레포 대응 | 예시 |
|-----------|----------|------|
| BOM (자재 명세) | 의존성 + 에셋 목록 | `pubspec.yaml`, `package.json`, `assets/` |
| 라우팅 (공정 순서) | 파이프라인 스크립트 | 빌드→테스트→배포 순차 실행 |
| WIP (재공품) | 브랜치 + Queue | `claude/*` 브랜치, `_queue/` |
| 수율 (Yield) | 빌드 성공률 | CI 통과율, 테스트 커버리지 |
| MES (제조실행) | 자동화 스크립트 | 동기화, 추출, 배포 도구 |
| 검수 (QC) | 테스트 + 리뷰 | `tests/`, 체크리스트 |

### 4대 원칙

1. **삭제는 없다, 반대 분개만 있다** — `git revert`로 정정. `reset --hard` 금지.
2. **증빙 없는 거래는 없다** — 커밋 메시지에 이유와 맥락. 크로스레포 이동은 명시적 스크립트로.
3. **BOM 확인 후 착공한다** — 의존성/에셋 명세 먼저, 공정 순서 명시 후 실행.
4. **재공품을 방치하지 않는다** — WIP 브랜치와 큐는 정기적으로 소화한다.

### 교차점: JSON 매니페스트

가로축과 세로축이 만나는 곳에 JSON이 있다. 매니페스트는 공정 기록이자 거래 증빙이다.

```
app-meta.json      = 제품 사양서
state.json         = 공정 현황판
*.youtube.json     = 출하 전표
*-SOURCES.md       = 원자재 입고 대장
```

### Claude 자동 체크

| 트리거 | 체크 | 위반 시 |
|--------|------|---------|
| `git commit` 전 | 커밋 메시지에 이유/맥락 있는가 | "증빙 누락" 경고 |
| `reset --hard` 요청 | 반대 분개(revert) 가능한가 | 차단, revert 제안 |
| 새 파일/도구 추가 | BOM(package.json 등) 업데이트했는가 | "BOM 미갱신" 경고 |
| 세션 시작 | `git branch --no-merged main` WIP 확인 | 3개 이상이면 정리 권고 |
| 크로스레포 작업 | 동기화 스크립트/매니페스트 경유하는가 | "인터페이스 우회" 경고 |

> **코드를 짜는 게 아니라 공장을 돌리고 있다.**
> **다만 그 공장의 원장이 git이고, 라인이 파이프라인일 뿐이다.**

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