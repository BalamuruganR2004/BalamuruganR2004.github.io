(function () {
  const projectId = 'causalai-portfolio-card';

  function addProjectCard() {
    const grid = document.querySelector('#projects .project-grid');
    if (!grid || document.getElementById(projectId)) return;

    const slot = document.createElement('div');
    slot.className = 'project-slot';
    slot.id = projectId;
    slot.innerHTML = `
      <article class="project-card">
        <div class="project-visual portfolio-visual" aria-hidden="true">
          <div class="visual-caption mono">EVIDENCE → SIGNAL → ACTION</div>
          <div class="portfolio-composition">
            <div class="browser-shell">
              <div class="browser-bar"><i></i><i></i><i></i></div>
              <div class="browser-body"><strong>CAUSAL<span>AI</span></strong><small>EVIDENCE ATLAS</small></div>
            </div>
            <div class="quality-stack"><span>FASTAPI</span><span>AZURE</span></div>
          </div>
          <span class="visual-bottom mono">CAUSAL INVESTIGATION • DEPLOYED</span>
        </div>
        <div class="project-body">
          <p class="project-category mono"><span>06</span> AI / DATA PRODUCT</p>
          <h3>CausalAI — Evidence Atlas</h3>
          <p class="project-description">An evidence-grounded investigation platform that profiles CSV data, detects anomalies, ranks competing explanations, and keeps observational evidence separate from causal claims.</p>
          <div class="tech-list"><span>FastAPI</span><span>Python</span><span>Docker</span><span>Azure</span></div>
          <div class="project-actions">
            <a href="https://github.com/BalamuruganR2004/causalai-evidence-atlas" target="_blank" rel="noreferrer" class="text-action">GitHub</a>
            <a href="https://causalai-evidence-atlas.nicebay-fec83de0.eastasia.azurecontainerapps.io" target="_blank" rel="noreferrer" class="text-action accent">Live Demo</a>
          </div>
        </div>
      </article>`;
    grid.appendChild(slot);

    const count = document.querySelector('#projects .project-count');
    if (count) count.textContent = '6 PROJECTS';
    const allCount = document.querySelector('#projects .filters button:first-child span');
    if (allCount) allCount.textContent = '06';
  }

  const observer = new MutationObserver(addProjectCard);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  addProjectCard();
})();
