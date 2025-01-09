const topics = [
    // # 의외의 경험 계열
    "절대 예상 못할 곳에서 만난 사람",
    "믿기 힘든 우연",
    "나만의 특별한 장소",
    "인스타 돋보기 세 번째 게시물",

    // # 망한 썰 계열
    "인생에서 가장 망했던 순간",
    "되돌릴 수 없는 선택들",
    "모두가 말렸던 선택",
    "가장 후회하는 선택",
    "가장 부끄러웠던 순간",

    // # 일탈/극한 경험 계열
    "범죄자가 될 뻔한 경험",
    "나만의 일탈",
    "한계에 도전한 경험",
    "도덕적으로 하지 말아야 했던 일",
    "무모했던 경험",
    "나만의 외박 거짓말",

    // # 꿈/상상 계열
    "기억에 남는 데자뷰",

    // # 특별한 만남/경험 계열
    "세상에서 가장 특이한 만남",
    "믿기 어려운 경험",

    // # 극한의 상황 계열
    "죽을 뻔한 순간",
    "무모한 도전",
    "나만의 낭만적인 이야기",
    "기적 같은 경험",
    "절대 말할 수 없는 비밀",

    // # 기타 파격적 주제
    "법적 한계를 넘은 이야기",
    "어릴 땐 정말 숨기고 싶었던 비밀",
    "모두를 놀라게 할 나만의 이야기",

    // # 기타 파격적 주제
    "지금도 만족하는 선택",
    "어릴 때 집착했던 것",
    "누군가를 좋아했던 이유",
    "눈물 나게 고마웠던 일",
    "지인에게 있었던 수상했던 일",
    "좋아하는 의외의 브랜드",
    "기억에 남는 학창시절 급식 메뉴",
    "황당한 택시 기사님 이야기",
    "가장 후회되는 충동구매",
    "기억에 남는 소개팅 실패담",
    "경험한 오해",
    "가장 민망했던 순간",
    "기억에 남는 술자리 해프닝",
    "친구의 거짓말",
    "문화 충격 경험",
    "불효자 이야기",
    "이성에게 관심을 받았던 시기",
    "보거나 들은 술주정",
    "닮았다고 들은 동물",
    "아무도 모르는 나만의 루틴",
    "싫어하는 음식",
    "꼭 알려주고 싶은 맛집",
    "결혼에 대한 생각",
    "싫어하는 사람 타입",
    "가장 행복했던 시기",
    "아침에 가장 먼저 하는 일",
    "가장 키우고 싶은 동물",
    "가족 구성",
    "해본 적 있는 아르바이트",
    "절대 하기 싫은 헤어스타일",
    "상대가 하면 좋을 헤어스타일",

    // 사기/호구 계열
    "사기꾼이 된 경험",
    "돈을 가장 많이 날린 경험",
    "사기 당한 이야기",
    "중고거래에서 당한 이야기",
    "인터넷 배송 실수 경험",
    "가장 비싸게 산 쓸모없는 물건",
    "SNS 광고에 속아 산 물건",
    "친구에게 속은 경험",
    "배달음식 사고 경험",
    "후회되는 충동구매",
    "대형마트 할인으로 과소비한 경험",
    "중고거래 흥정 실패담",
    "악성 고객에게 당한 경험",
    "허위 광고에 낚인 경험",
    "보이스피싱 위기 모면한 경험",
    "보거나 들은 환불 싸움",
    "인터넷 이벤트 참여 경험",
    "중고거래 경험",
    "수리비 폭탄 맞은 경험",
    "테무 경험담",

    // 일상의 실수/망한 경험
    "면접장에서 실수한 경험",
    "잘못 보낸 카톡 이야기",
    "가장 민망했던 실수",
    "음식 조리 실패 경험",
    "길치 에피소드",
    "대중교통에서 민망했던 경험",
    "잠꼬대로 일어난 사고",
    "최악의 헤어스타일",
    "최악의 발표",
    "온라인 수업/업무 중 실수",
    "엘리베이터에서 있었던 실수",
    "가장 창피했던 경험",
    "회사에서 한 최악의 실수",
    "화장실에서 일어난 사고",
    "실수로 누른 좋아요",
    "잘못 걸린 전화로 생긴 일",
    "부끄러운 오타 경험",
    "실수로 보낸 문자",
    "엄청난 지각 사건",
    "식당에서 망신당한 경험",

    // 특이한 습관/취향
    "아무도 모르는 나만의 습관",
    "나만 좋아하는 이상한 음식 조합",
    "혼자 있을 때 하는 행동",
    "나만의 스트레스 해소법",
    "반복해서 보는 영상이나 콘텐츠",
    "나만의 취침 의식",
    "몰래하는 나만의 취미",
    "이상한 버릇이라고 지적받은 것",
    "특별한 음식 먹는 순서",
    "혼자만의 웃긴 상상",
    "특이한 아침 루틴",
    "독특한 공부 방법",
    "조금 다른 이상한 취미",
    "나만의 특별한 샤워 루틴",
    "귀신을 만난 경험",
    "밥 먹을 때 나만의 규칙",
    "나만의 독특한 산책 코스",
    "나만의 특이한 정리 방식",
    "특별한 날 혼자만의 기념 방식",
    "나만의 스트레스 해소법",

    // 인간관계 에피소드
    "가장 황당했던 고백",
    "친구랑 크게 싸운 이유",
    "가장 기억에 남는 인연",
    "SNS에서 일어난 재밌는 일",
    "단톡방 사고 이야기",
    "친구랑 한 가장 미친 짓",
    "가장 민망했던 술자리 기억",
    "첫인상과 달랐던 사람",
    "가장 인상 깊었던 이별",
    "우연히 마주친 전 애인",
    "소개팅/미팅 경험 썰",
    "이상한 단체 카톡방 초대",
    "모임에서 겪은 난처한 상황",
    "친구 생일선물 실패담",
    "최악의 생일선물",
    "남사친/여사친과의 에피소드",
    "알바생과의 재밌는 에피소드",
    "가장 기억에 남는 고백",

    // childhood/학창시절
    "어린 시절 가장 황당한 오해",
    "학창시절 가장 부끄러운 기억",
    "어릴 때 믿었던 웃긴 생각들",
    "전학 와서 겪은 일",
    "가장 기억에 남는 벌칙",
    "학창시절 가장 웃긴 별명",
    "어릴 때 한 거짓말",
    "미스터리",
    "가장 기억에 남는 학교 급식",
    "어릴 때 했던 가장 용감한 일",
    "수학여행에서 있었던 일",
    "학교 축제 이야기",
    "들켜서 민망했던 일",
    "가장 기억에 남는 선생님",
    "교복으로 생긴 에피소드",
    "짝사랑 이야기",
    "학교 해프닝",
    "체육대회 웃픈 사연",
    "수련회에서 있었던 일",
    "인생네컷은 바람이다? 아니다?",
    "나의 추구미",
    "내가 가장 사랑하는 OTT 서비스",
    "식당 볼 때 우선적으로 보는 거",
]; 