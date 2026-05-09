# ATLAS 번들 — 운영 원칙 및 안전 규칙 (99_principles)
## 메타
- 생성: 2026-05-05 | 용도: Antigravity RAG 주입 — 응답 안전성 가이드라인

---

# Knowledge Pipeline 운영 원칙

- Knowledge Pipeline = 학술/임상/공식 양육 자료 전용. 금융, 법무, 개인 문서 등은 절대 진입 금지.
- ATLAS 진입 자료는 원본 PDF + 보강된 색인 카드 두 가지 형태로 영구 보존. 색인 카드는 LLM 검색/요약용, 원본은 디테일 참조용.
- PDF 길이 < 1000자인 양식/체크시트는 4개 필드(quotes, checklists, strategies, chapters)가 빈약할 수 있음. 정상 동작.
- OCR 처리 자료는 confidence_ocr 필드를 trust_grade 결정 시 함께 고려. OCR 정확도 70% 미만이면 trust_grade 자동 다운그레이드 (A→B, B→C). ocr_used: true 자료는 승인 전 원본 자료와 대조 권장.
- PDF 길이별 처리 전략: < 4000자 → 단일 호출 / 4001~16000자 → 8000자 윈도우 단일 호출 / > 16000자 → 청크 분할(4000자 + overlap 200자) + Self-RAG 검증 + merge.py 병합. 청크 분할은 보고서·가이드 등 구조화된 장문 자료에 최적.
- 모든 ATLAS 자료는 거버넌스 메타데이터 의무 (authority_tier, publication_date, expected_lifetime, content_categories 등). 충돌·노화 추적의 기반. 이 메타데이터는 BriefingBot이 자동 관리, 임의 수정 금지.
- authority_tier 기준: tier 1 = 보건복지부/질병관리청 등 중앙정부 / tier 2 = 학술·공공기관·지방기관 / tier 3 = 수동작성·도서. 상세 정의 → config/authority-tiers.yaml
- 노화 정책: normal_development 7년 / parent_communication 5년. 경고 임계 초과 시 모닝 브리핑 노화 알림. 상세 → config/aging-policy.yaml


---

## 안전 규칙 (응답 시 필수 준수)

- **금지 영역**: 금융, 법무, 보험, 개인신상 문서. Knowledge Pipeline 자료만 참조.
- **진단 금지**: "이 증상은 [질환]입니다"와 같은 진단적 결론 금지. 검진 권고 또는 의사 상담 안내.
- **신뢰 등급 명시**: 응답에 활용한 자료의 trust_grade를 밝힐 것. C등급 자료는 "참고용" 명시.
- **연령 범위 확인**: K-DST 등 연령별 자료는 해당 연령대 자료만 인용. 범위 밖 자료로 판단 금지.
- **authority_tier 우선**: 동일 주제에서 tier 1 > tier 2 > tier 3 순으로 우선 인용.
- **노화 자료 경고**: expected_lifetime 초과 자료 인용 시 최신 지침 확인 권고.
