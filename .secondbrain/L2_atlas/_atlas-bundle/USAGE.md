# _atlas-bundle — Antigravity Connect AI 주입 가이드

## 목적

ATLAS의 11개 지식 카드를 Antigravity RAG 시스템에 주입하기 위한 번들 파일 모음.
각 번들은 원본 카드의 핵심 정보만 추출한 압축본 (각 16,000자 이하).

## 번들 파일 목록

| 파일 | 내용 | 크기 | 자료 수 |
|------|------|------|---------|
| `01_normal_development.md` | K-DST 5종 + 시리즈 메타 + 검진의사 매뉴얼 | ~6,000자 | 7건 |
| `02_parent_communication.md` | 양육 첫걸음 + 보호자 매뉴얼 _1/_2 + 요약본 | ~4,500자 | 4건 |
| `99_principles.md` | 운영 원칙 + 응답 안전 규칙 | ~1,500자 | — |
| `99_meta_analysis.md` | K-DST 메타 분석 + 48-53개월 상세 + 시스템 설계 | ~4,800자 | — |

## Antigravity 주입 절차

1. Antigravity Connect AI 대시보드 접속
2. 지식베이스(Knowledge Base) 또는 컨텍스트 섹션 진입
3. 파일 업로드 또는 텍스트 붙여넣기:
   - 기본 세트: `01_normal_development.md` + `02_parent_communication.md` + `99_principles.md`
   - 심화 분석 필요 시: `99_meta_analysis.md` 추가
4. 업로드 순서: 원칙(`99_principles.md`) → 도메인 번들 순 권장

## 갱신 주기

- 새 ATLAS 자료 승인 시: 해당 도메인 번들 재생성
- 거버넌스 정책 변경 시: `99_principles.md` 재생성
- 재생성 명령: `python3 /tmp/build_bundles.py` (또는 BriefingBot에 요청)

## 주의사항

- 번들은 원본 카드의 요약본. 상세 내용은 `~/family-vault/knowledge/` 원본 카드 참조.
- C등급 자료(보호자용 요약본)는 번들에 포함되어 있으나 ⚠️ 표시됨. 참고용으로만 활용.
- 번들 파일 직접 편집 금지 — 항상 스크립트를 통해 재생성할 것.

## 원본 ATLAS 경로

- 정상 발달: `~/family-vault/knowledge/normal_development/`
- 양육 커뮤니케이션: `~/family-vault/knowledge/parent_communication/`
