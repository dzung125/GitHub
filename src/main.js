import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page" id="top">
    <nav class="topbar" aria-label="주요 메뉴">
      <a class="logo" href="#top"><span class="logo-face">☺</span> little about me</a>
      <a class="nav-link" href="#about">나에 대해 <span>↘</span></a>
    </nav>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="sparkle">✳</span> 반가워요, 여기는 나를 소개하는 곳!</p>
        <h1 id="hero-title">안녕, 나는<br /><span class="name">[이름]</span><span class="wave" aria-hidden="true">👋</span></h1>
        <p class="hero-description">[나를 한 문장으로 소개해 보세요.]<br />좋아하는 것들을 차곡차곡 모으는 중이에요.</p>
        <a class="button" href="#about">나를 더 알아보기 <span>↓</span></a>
      </div>
      <div class="hero-art" aria-label="귀여운 해와 무지개 그림">
        <div class="sun">☀️</div>
        <div class="rainbow"><span></span><span></span><span></span><span></span></div>
        <span class="cloud cloud-one">☁️</span><span class="cloud cloud-two">☁️</span>
        <span class="art-caption">nice to meet you!</span>
        <span class="art-star star-one">✦</span><span class="art-star star-two">✧</span>
      </div>
    </section>

    <section class="quick-facts" aria-label="나를 한눈에 보기">
      <article class="fact fact-pink"><span class="fact-icon">💬</span><span class="fact-label">CALL ME</span><h2>[별명]</h2><p>이렇게 불러 주세요!</p><span class="fact-index">01</span></article>
      <article class="fact fact-blue"><span class="fact-icon">📍</span><span class="fact-label">BASED IN</span><h2>[사는 곳]</h2><p>나의 작은 동네</p><span class="fact-index">02</span></article>
      <article class="fact fact-yellow"><span class="fact-icon">🌱</span><span class="fact-label">NOW</span><h2>[요즘 관심사]</h2><p>요즘 푹 빠져 있어요</p><span class="fact-index">03</span></article>
    </section>

    <section class="details" id="about">
      <article class="card about-card">
        <div class="section-title"><span class="title-icon">🧸</span><div><p class="overline">A LITTLE ABOUT ME</p><h2>나는 이런 사람이에요</h2></div></div>
        <p class="body-copy">[나의 성격이나 요즘의 모습을 적어 보세요.]<br />천천히 알아가면 더 재미있는 사람일지도 몰라요!</p>
        <div class="tags"><span>✨ [키워드 1]</span><span>🎨 [키워드 2]</span><span>🌼 [키워드 3]</span></div>
        <span class="card-doodle">✿</span>
      </article>
      <article class="card joy-card">
        <div class="section-title"><span class="title-icon">🍓</span><div><p class="overline">MY SMALL JOYS</p><h2>나를 기분 좋게 하는 것</h2></div></div>
        <div class="joy-list"><p><span>☕</span><b>[좋아하는 음식]</b><i>냠냠!</i></p><p><span>🎧</span><b>[좋아하는 시간]</b><i>최고!</i></p><p><span>🌈</span><b>[요즘의 행복]</b><i>반짝</i></p></div>
        <div class="stamp">GOOD<br />VIBES<span>♡</span></div>
      </article>
    </section>

    <section class="quote"><span>“</span><p>[마음에 드는 문장이나 나만의 다짐을 적어 보세요.]</p><span>✧</span></section>
    <footer><span>오늘도 나답게, 반짝반짝 <b>✿</b></span><span>MADE WITH A LITTLE JOY <b>♥</b></span></footer>
  </main>
`
