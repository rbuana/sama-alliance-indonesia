/* SAMA Alliance Indonesia — shared page chrome (nav + footer + tweaks bridge) */
(function () {
  const CURRENT = (document.body.dataset.page || 'home').toLowerCase();

  const isHome = CURRENT === 'home';
  const navLogo = isHome ? 'assets/sama-logo.svg' : 'assets/sama-logo-light.svg';
  const chapterClass = isHome ? 'brand-chapter' : 'brand-chapter on-ink';

  const navHTML = `
    <nav class="nav">
      <div class="wrap nav-inner">
        <a href="/" class="brand" aria-label="SAMA Alliance Indonesia">
          <img src="${navLogo}" alt="SAMA — Strategic Asia Marketing Alliance" class="brand-logo" />
          <span class="${chapterClass}">Indonesia<br /><em>Region</em></span>
        </a>
        <ul class="nav-links">
          <li><a href="/" data-page="home">Home</a></li>
          <li><a href="/about" data-page="about">About</a></li>
          <li><a href="/members" data-page="members">Members</a></li>
          <li><a href="/capabilities" data-page="capabilities">Capabilities</a></li>
          <li><a href="/insights" data-page="insights">Insights</a></li>
        </ul>
        <div class="nav-right">
          <a href="/contact" class="btn btn-primary btn-sm">Start a Conversation</a>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a href="/" class="brand" style="margin-bottom: 20px;">
              <img src="assets/sama-logo-light.svg" alt="SAMA — Strategic Asia Marketing Alliance" class="brand-logo" />
              <span class="brand-chapter on-ink">Indonesia<br /><em>Region</em></span>
            </a>
            <p style="max-width: 36ch; color: var(--muted-on-ink); font-size: 14px; margin: 16px 0 0;">
              The Indonesia region of the Strategic Asia Marketing Alliance — uniting independent marketing &amp; technology agencies to serve brands beyond boundaries.
            </p>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/members">Members</a></li>
              <li><a href="/capabilities">Capabilities</a></li>
              <li><a href="/insights">Insights &amp; Events</a></li>
            </ul>
          </div>
          <div>
            <h5>For Brands</h5>
            <ul>
              <li><a href="/contact">Find an agency partner</a></li>
              <li><a href="/contact">Brief the alliance</a></li>
              <li><a href="/contact">Regional expansion</a></li>
            </ul>
          </div>
          <div>
            <h5>For Agencies</h5>
            <ul>
              <li><a href="/contact">Apply for membership</a></li>
              <li><a href="/contact">Partnership inquiries</a></li>
              <li><a href="/contact">Press &amp; media</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-meta">
          <span>© 2026 SAMA Alliance Indonesia · A region of Strategic Asia Marketing Alliance</span>
          <div class="footer-socials">
            <a href="#">LinkedIn ↗</a>
            <a href="#">Instagram ↗</a>
            <a href="#">YouTube ↗</a>
          </div>
        </div>
      </div>
    </footer>
    <div class="footer-credit">
      <div class="wrap">
        <span>Proudly made with ♥ by <a href="https://www.omeoo.com" target="_blank" rel="noopener">Omeoo Creative</a> — Where creativity meets strategy.</span>
      </div>
    </div>
    <style>
      .footer-credit {
        background: #030b17;
        border-top: 1px solid rgba(245,241,234,0.06);
        padding: 14px 0;
        text-align: center;
        font-family: var(--font-mono);
        font-size: 11px;
        letter-spacing: 0.08em;
        color: rgba(245,241,234,0.45);
      }
      .footer-credit a {
        color: var(--fire-glow);
        opacity: 1;
        font-weight: 500;
      }
      .footer-credit a:hover { text-decoration: underline; }
    </style>
  `;

  function inject() {
    const navSlot = document.getElementById('site-nav');
    const footSlot = document.getElementById('site-footer');
    if (navSlot) navSlot.outerHTML = navHTML;
    if (footSlot) footSlot.outerHTML = footerHTML;

    // mark active link
    document.querySelectorAll('.nav-links a').forEach(a => {
      if ((a.dataset.page || '') === CURRENT) a.classList.add('active');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
