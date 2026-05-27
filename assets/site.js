/* SAMA Alliance Indonesia — shared page chrome (nav + footer + tweaks bridge) */
(function () {
  const CURRENT = (document.body.dataset.page || 'home').toLowerCase();

  const navHTML = `
    <nav class="nav">
      <div class="wrap nav-inner">
        <a href="index.html" class="brand" aria-label="SAMA Alliance Indonesia">
          <img src="assets/sama-logo.svg" alt="SAMA — Strategic Asia Marketing Alliance" class="brand-logo" />
          <span class="brand-chapter">Indonesia<br /><em>Chapter</em></span>
        </a>
        <ul class="nav-links">
          <li><a href="index.html" data-page="home">Home</a></li>
          <li><a href="about.html" data-page="about">About</a></li>
          <li><a href="members.html" data-page="members">Members</a></li>
          <li><a href="index.html#capabilities" data-page="capabilities">Capabilities</a></li>
          <li><a href="index.html#insights" data-page="insights">Insights</a></li>
        </ul>
        <div class="nav-right">
          <a href="contact.html" class="btn btn-primary btn-sm">Start a Conversation</a>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="brand" style="margin-bottom: 20px;">
              <img src="assets/sama-logo-light.svg" alt="SAMA — Strategic Asia Marketing Alliance" class="brand-logo" />
              <span class="brand-chapter on-ink">Indonesia<br /><em>Chapter</em></span>
            </a>
            <p style="max-width: 36ch; color: var(--muted-on-ink); font-size: 14px; margin: 16px 0 0;">
              The Indonesia chapter of the Strategic Asia Marketing Alliance — uniting independent marketing &amp; technology agencies to serve brands beyond boundaries.
            </p>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="members.html">Members</a></li>
              <li><a href="index.html#capabilities">Capabilities</a></li>
              <li><a href="index.html#insights">Insights &amp; Events</a></li>
            </ul>
          </div>
          <div>
            <h5>For Brands</h5>
            <ul>
              <li><a href="contact.html">Find an agency partner</a></li>
              <li><a href="contact.html">Brief the alliance</a></li>
              <li><a href="contact.html">Regional expansion</a></li>
            </ul>
          </div>
          <div>
            <h5>For Agencies</h5>
            <ul>
              <li><a href="contact.html">Apply for membership</a></li>
              <li><a href="contact.html">Partnership inquiries</a></li>
              <li><a href="contact.html">Press &amp; media</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-meta">
          <span>© 2026 SAMA Alliance Indonesia · A chapter of Strategic Asia Marketing Alliance</span>
          <div class="footer-socials">
            <a href="#">LinkedIn ↗</a>
            <a href="#">Instagram ↗</a>
            <a href="#">YouTube ↗</a>
          </div>
        </div>
      </div>
    </footer>
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
