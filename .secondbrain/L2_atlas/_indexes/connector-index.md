---
title: "ATLAS 체크리스트 커넥터 인덱스"
generated_at: 2026-05-05
purpose: GraphRAG 기반 — 체크리스트 간 자료 연결 매핑
---

# ATLAS 커넥터 인덱스 (GraphRAG 토대)

> 각 체크리스트가 어느 ATLAS 자료·K-DST 영역·연령대와 연결되는지 매핑.
> 동일 행동이 여러 자료에 등장할 때 교차 인용 구조를 형성.

---

## 1. 자조 영역 연결 맵 (만 4세 우선, 48-53개월)

| 체크리스트 항목 | 출처 자료 | K-DST 영역 | 연령 | 권위tier | 우려/정상 | 연결 ATLAS 자료 |
|--------------|---------|-----------|------|---------|---------|--------------|
| (48개월) 옷 입기, 잠자리, 화장실 사용에 어려움이 있어요. | 양육첫걸음 | 자조,소근육 | 만 4세(48개월) | tier2 | ✓정상 | 검진의사매뉴얼, 보호자전체본1 |

---

## 2. 핵심 행동 교차 매핑

### 혼자 옷 입기 (자조 #1 — 세현이 D-170 최우선)
| 자료 | 관련 내용 | K-DST 절단점 참조 |
|------|---------|----------------|
| 양육첫걸음 | 48개월: 옷 입기, 화장실 사용에 어려움 (우려신호) | 48-53개월 자조 가:15, 나:20 |
| 검진의사매뉴얼 | 대소변 가리기·혼자 바지 내리기 문진 항목 | tier1 공식 임상 기준 |
| 보호자전체본1 | 발달단계별 양육지침(독립성 촉진) | tier2 보완 참조 |
| K-DST 메타 분석 | 자조 48-59개월 피크 패턴 — 가장 엄격한 구간 | authority_tier 3 합성 |

### 연필 잡기·가위질 (소근육 #1 — 54개월 급상승 대비)
| 자료 | 관련 내용 | K-DST 절단점 참조 |
|------|---------|----------------|
| 양육첫걸음 | 연필 세 손가락으로 잡지 못하고 주먹 쥐듯 잡아요 | 48-53개월 소근육 나:18 |
| K-DST 메타 분석 | 소근육 54-65개월 급상승 패턴 A (나:18→20→21) | 지금 기반 다져야 |
| 검진의사매뉴얼 | 소근육 발달 관련 진찰 항목 | tier1 임상 기준 |

### 또래와 놀기 / 차례 기다리기 (사회성 — 42-48개월 검진 핵심)
| 자료 | 관련 내용 | K-DST 절단점 참조 |
|------|---------|----------------|
| 검진의사매뉴얼 | 표 71-74: 42-48개월 또래관계·차례기다리기 문진 | tier1 ★ |
| 양육첫걸음 | 또래와 어울려 놀지 않거나 상호작용이 거의 없어요 | tier2 확인 |
| K-DST 시리즈 | 사회성 나절단 17→16 (48개월 구간 소폭 완화) | 절단점 맥락 |

---

## 3. 거버넌스 메타데이터 인용 규칙

| 자료 | authority_tier | publication_date | expected_lifetime | 충돌 우선순위 |
|------|--------------|-----------------|-----------------|------------|
| 양육첫걸음 | tier2 | 2026-01-01 | 5년 | 2순위 |
| 검진의사매뉴얼 | tier1 | 2024-01-01 | 7년 | 1순위 |
| 보호자전체본1 | tier2 | 2025-01-01 | 5년 | 2순위 |
| 보호자전체본2 | tier2 | 2025-01-01 | 5년 | 2순위 |

> 동일 행동에 대해 tier1 자료(검진의사매뉴얼)와 tier2 자료(양육첫걸음)가 상충할 경우 tier1 우선 인용.

---

## 4. 미매핑 체크리스트 현황

미분류(K-DST 영역 불명확): **318개**

주요 이유:
- 일반 안전 수칙 (카시트, 익수 예방 등) — K-DST 직접 대응 영역 없음
- 환경 조성 가이드 (놀이 환경, 언어 환경 등) — 간접 지원 항목
- 수유·영양 관련 — K-DST 범위 외

처리 방침: 미분류 항목은 '양육환경' 보조 카테고리로 별도 관리 (향후 개선 사이클).


## 관련 문서
- [[2021_검진의사매뉴얼_structured_chunk_report]] — 공유 엔티티: 검진의사매뉴얼
- [[2026-05-04_보호자용_설명서-요약본_최종]] — 공유 컨셉: authority_tier
- [[2026-05-05_보호자용_설명서-전체본_최종_1]] — 공유 컨셉: authority_tier
- [[2026-05-05_양육자용_부모교육_자료_양육_첫걸음]] — 공유 컨셉: authority_tier
- [[99_principles]] — 공유 컨셉: authority_tier
- [[EB-015_selfrag_atlas]] — 공유 컨셉: 사회성 발달
- [[ED-064]] — 공유 컨셉: 데이터 연결
- [[ED-064_chunk_025]] — 공유 컨셉: 데이터 연결
- [[GS-045_atlas]] — 공유 엔티티: ATLAS
- [[GS-045_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[GS-055_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[GraphRAG]] — 컨셉
- [[ND-012_atlas]] — 공유 엔티티: 검진의사매뉴얼
- [[authority_tier]] — 컨셉
- [[checklist-master-index]] — 공유 엔티티: ATLAS
- [[checklist-master-index]] — 공유 엔티티: K-DST
- [[checklist-master-index]] — 공유 엔티티: 검진의사매뉴얼
- [[checklist-master-index]] — 공유 엔티티: 보호자전체본1
- [[checklist-master-index]] — 공유 엔티티: 보호자전체본2
- [[checklist-master-index]] — 공유 엔티티: 양육첫걸음
- [[checklist-master-index]] — 공유 컨셉: 자조 영역
- [[chunk_001]] — 공유 엔티티: ATLAS
- [[chunk_003]] — 공유 컨셉: 사회성 발달
- [[chunk_012]] — 공유 컨셉: 소근육 발달
- [[chunk_019]] — 공유 컨셉: 소근육 발달
- [[chunk_033]] — 공유 컨셉: 사회성 발달
- [[chunk_043]] — 공유 컨셉: 사회성 발달
- [[chunk_046]] — 공유 컨셉: 소근육 발달
- [[chunk_048]] — 공유 컨셉: 소근육 발달
- [[chunk_053]] — 공유 컨셉: 소근육 발달
- [[chunk_1]] — 공유 컨셉: 사회성 발달
- [[chunk_21]] — 공유 엔티티: K-DST
- [[chunk_21]] — 공유 컨셉: 자조 영역
- [[chunk_2]] — 공유 컨셉: 자조 영역
- [[chunk_54]] — 공유 컨셉: 자조 영역
- [[chunk_60]] — 공유 컨셉: 자조 영역
- [[chunk_6]] — 공유 엔티티: K-DST
- [[chunk_9]] — 공유 엔티티: K-DST
- [[emotion-coaching-5steps-framework]] — 공유 엔티티: K-DST
- [[emotion-coaching-5steps-framework]] — 공유 컨셉: authority_tier
- [[교차 인용 구조]] — 컨셉
- [[데이터 연결]] — 컨셉
- [[미매핑 체크리스트]] — 컨셉
- [[사회성 발달]] — 컨셉
- [[소근육 발달]] — 컨셉
- [[자조 영역]] — 컨셉
- [[체크리스트 연결 매핑]] — 컨셉
- [[BR-218_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[DN-155_selfrag_atlas]] — 공유 엔티티: ...
- [[EC-174_selfrag_atlas]] — 공유 엔티티: list
- [[ED-099_selfrag_atlas]] — 공유 엔티티: ...
- [[ED-111_selfrag_atlas]] — 공유 엔티티: ...
- [[EF-224_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[ER-175_selfrag_atlas]] — 공유 엔티티: ...
- [[ER-176_selfrag_atlas]] — 공유 엔티티: ...
- [[FI-169_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[IC-208_selfrag_atlas]] — 공유 엔티티: ...
- [[NP-202_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[NS-124_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[OX-149_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[RS-120_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[GS-190_selfrag_atlas]] — 공유 엔티티: ...
- [[EF-223_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[ND-023_selfrag_atlas]] — 공유 엔티티: ...
- [[ND-041_selfrag_atlas]] — 공유 엔티티: ...
- [[ND-053_selfrag_atlas]] — 공유 엔티티: ND-041
- [[ND-109_selfrag_atlas]] — 공유 엔티티: ATLAS
- [[ND-114_selfrag_atlas]] — 공유 엔티티: list
- [[SL-186_selfrag_atlas]] — 공유 엔티티: ...
- [[SL-187_selfrag_atlas]] — 공유 엔티티: ...
- [[PC-054_selfrag_atlas]] — 공유 엔티티: RS-120_selfrag_atlas
- [[PC-080_selfrag_atlas]] — 공유 엔티티: ...
- [[PC-085_selfrag_atlas]] — 공유 엔티티: ...
- [[PC-096_selfrag_atlas]] — 공유 엔티티: ...
- [[PC-097_selfrag_atlas]] — 공유 엔티티: list
- [[SD-034_selfrag_atlas]] — 공유 엔티티: ...
- [[SD-045_selfrag_atlas]] — 공유 엔티티: SD-034
- [[SD-092_selfrag_atlas]] — 공유 엔티티: ...
- [[SEL-233_selfrag_atlas]] — 공유 엔티티: ...
- [[AI-232_selfrag_atlas]] — 공유 엔티티: ...
- [[PP-254_selfrag_atlas]] — 공유 엔티티: list
- [[BL-270_selfrag_atlas]] — 공유 엔티티: ...
- [[BL-273_selfrag_atlas]] — 공유 엔티티: ...
- [[FE-278_selfrag_atlas]] — 공유 엔티티: ...
- [[TT-281_selfrag_atlas]] — 공유 엔티티: ...
- [[PCE-297_selfrag_atlas]] — 공유 엔티티: ...
