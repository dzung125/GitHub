import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="page-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="처음으로"><span class="brand-mark">✳</span> MY LITTLE PAGE</a>
      <span class="edition">자기소개 카드 <span>·</span> 2026</span>
    </header>

    <section class="intro" id="top" aria-labelledby="intro-title">
      <div class="intro-copy">
        <span class="eyebrow"><i></i> 반가워요, 저는</span>
        <h1 id="intro-title">[이름]<span class="wave">👋</span></h1>
        <p class="intro-lead">[나를 한 문장으로 소개해 보세요.]<br>작은 호기심을 모아 나만의 이야기를 만들어가요.</p>
        <div class="chips"><span>✨ curious mind</span><span>🌱 growing every day</span></div>
      </div>
      <div class="portrait-wrap">
        <div class="portrait" aria-label="프로필 사진 자리"><span class="portrait-sun">☼</span><span class="portrait-face">☺</span><small>사진을<br>넣어주세요</small></div>
        <span class="orbit orbit-one">✦</span><span class="orbit orbit-two">♡</span>
        <span class="portrait-note">nice to meet you!</span>
      </div>
      <span class="doodle doodle-star">✳</span>
    </section>

    <section class="facts" aria-label="나를 소개하는 정보">
      <article class="fact-card fact-peach"><span class="card-icon">🧸</span><span class="card-label">CALL ME</span><h2>[별명]</h2><p>편하게 이렇게 불러주세요</p><span class="card-number">01</span></article>
      <article class="fact-card fact-blue"><span class="card-icon">📍</span><span class="card-label">BASED IN</span><h2>[사는 곳]</h2><p>요즘 이곳에서 지내요</p><span class="card-number">02</span></article>
      <article class="fact-card fact-lime"><span class="card-icon">☕</span><span class="card-label">CURRENTLY</span><h2>[요즘 빠진 것]</h2><p>요즘 푹 빠져 있는 것</p><span class="card-number">03</span></article>
    </section>

    <section class="lower-grid">
      <article class="panel about-panel">
        <div class="section-heading"><span class="heading-icon">✿</span><div><span class="overline">A LITTLE ABOUT ME</span><h2>저는 이런 사람이에요</h2></div></div>
        <p class="about-copy">[나의 성격이나 요즘 관심사를 적어보세요.]<br>좋아하는 것, 잘하는 것, 새롭게 도전하고 싶은 것을 자유롭게 소개해 주세요.</p>
        <div class="interest-list"><span>🎨 [관심사 1]</span><span>🎧 [관심사 2]</span><span>📚 [관심사 3]</span></div>
        <div class="tiny-spark">✦</div>
      </article>
      <article class="panel mood-panel">
        <div class="section-heading"><span class="heading-icon mood-icon">☻</span><div><span class="overline">MY SMALL JOYS</span><h2>나를 기분 좋게 하는 것</h2></div></div>
        <div class="joys"><div><span>🍰</span><b>[좋아하는 음식]</b></div><div><span>🌿</span><b>[좋아하는 순간]</b></div><div><span>🐈</span><b>[요즘의 행복]</b></div></div>
        <div class="mood-stamp">GOOD<br>VIBES<br><span>only ☀</span></div>
      </article>
    </section>

    <section class="quote-card"><span class="quote-mark">“</span><p>[좋아하는 문장이나 나만의 다짐을 적어보세요.]</p><span class="quote-spark">✧</span></section>

    <footer><span>오늘도 나답게, 천천히 🌷</span><span>MADE WITH A LITTLE JOY <b>♥</b></span></footer>
  </main>
`
