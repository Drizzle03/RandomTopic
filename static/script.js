document.getElementById('refresh-btn').addEventListener('click', function() {
    // 사이드 카드들 숨기기
    const sideCards = document.querySelectorAll('.card-side');
    sideCards.forEach(card => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300); // 페이드 아웃 애니메이션 후 완전히 숨김
    });

    // 메인 카드 중앙 정렬을 위한 컨테이너 스타일 조정
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.style.gap = '0';

    const mainCard = document.querySelector('.card-main .card-inner');
    mainCard.style.transform = 'rotateY(180deg)';
    
    fetch('/get_topic')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                document.getElementById('topic').textContent = data.topic;
                mainCard.style.transform = 'rotateY(360deg)';
            }, 300);
        });
}); 