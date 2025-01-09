document.getElementById('refresh-btn').addEventListener('click', function() {
    // 사이드 카드들 숨기기
    const sideCards = document.querySelectorAll('.card-side');
    sideCards.forEach(card => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    });

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.style.gap = '0';

    const mainCard = document.querySelector('.card-main .card-inner');
    mainCard.style.transform = 'rotateY(180deg)';
    
    // Flask 서버 대신 직접 topics 배열에서 랜덤 선택
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    setTimeout(() => {
        document.getElementById('topic').textContent = randomTopic;
        mainCard.style.transform = 'rotateY(360deg)';
    }, 300);
});

document.querySelector('.card-main').addEventListener('click', function() {
    document.getElementById('refresh-btn').click();
});