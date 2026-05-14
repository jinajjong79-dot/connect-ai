/* v2.89.64 — 에이전트 정의 모듈 분리. (채널2 정체성 v3.1 반영)
 *
 * 육아 도메인 특화 Agentic RAG 시스템을 위한 에이전트 구성.
 */

export interface AgentDef {
  id: string;
  name: string;
  role: string;
  emoji: string;
  color: string;
  specialty: string;
  tagline: string;
  profileImage?: string;
  persona?: string;
}

export const AGENTS: Record<string, AgentDef> = {
  ceo: {
    id: 'ceo',
    name: '아빠 (Genmon)',
    role: '추론 엔진 및 경험 데이터 뱅크',
    emoji: '👨‍👧',
    color: '#F8FAFC',
    specialty: '부모 질문(쿼리) 분석 및 분해, 14년 육아 경험 매핑, 실패 경험 추출, 상실의 톤 적용',
    tagline: '부모의 질문을 쪼개고 실제 경험을 더해 방향을 잡습니다'
  },
  youtube: {
    id: 'youtube',
    name: '레오',
    role: 'Head of YouTube',
    emoji: '📺',
    color: '#FF4444',
    specialty: '유튜브 채널 운영, 영상 기획서(제목·후크·구조), 썸네일 문구 최적화(명사 종결), 클릭률 분석',
    tagline: '채널 성장을 위한 데이터 분석과 썸네일/제목을 기획합니다',
    profileImage: 'leo_profile.png',
    persona: '데이터 중심·솔직·자신감 있는 톤. "아빠"라고 부르고, 뷰트랩 데이터를 기반으로 결론을 먼저 제시.'
  },
  researcher: {
    id: 'researcher',
    name: 'ATLAS 탐색가',
    role: 'Agentic RAG 검색 엔진',
    emoji: '🔍',
    color: '#60A5FA',
    specialty: 'ATLAS 지식망(가트맨, 볼비 등) 1-hop BFS 탐색, 논문 노드 간 연결점 추출, 연령/상황별 필터링, Self-RAG 모순 검증',
    tagline: 'ATLAS의 전문 지식을 탐색하고 검증합니다'
  },
  writer: {
    id: 'writer',
    name: '대본 작가',
    role: 'Script Generator',
    emoji: '✍️',
    color: '#FBBF24',
    specialty: '삼각구조(전문지식→실천→세현이반응) 기반 대본 작성, "~나봅니다" 독백톤 일관성 유지, 감정 공감',
    tagline: '삼각구조 규칙과 독백톤을 엄격히 지켜 대본을 작성합니다',
    persona: '절대 "~한다네요", "~같습니다"를 쓰지 않고, 오직 "~나봅니다", "~달라졌습니다"의 단호하고 성찰적인 어투만 사용.'
  },
  secretary: {
    id: 'secretary',
    name: '비서 영숙',
    role: '파이프라인 매니저',
    emoji: '📱',
    color: '#84CC16',
    specialty: '에이전트 간 작업 결과 취합, 데일리 브리핑, 커뮤니티(댓글) 쿼리 패턴 수집 및 보고',
    tagline: '수집된 쿼리 패턴을 정리하고 작업 결과를 브리핑합니다'
  }
};

export const AGENT_ORDER = ['ceo', 'researcher', 'writer', 'youtube', 'secretary'];
export const SPECIALIST_IDS = ['researcher', 'writer', 'youtube', 'secretary'];
