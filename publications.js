// Fetch and render BibTeX entries from assets/publications.bib
(async () => {
  const list = document.getElementById('publications-list');
  if (!list) return;
  try {
    if (typeof bibtexParse === 'undefined') throw new Error('bibtex-parse-js not loaded');
    let bibText = '';
    try {
      const res = await fetch('assets/publications.bib');
      if (!res.ok) throw new Error('fetch failed');
      bibText = await res.text();
    } catch {
      const embed = document.getElementById('bibdata');
      if (!embed) throw new Error('Could not fetch assets/publications.bib and no embedded #bibdata found');
      bibText = embed.textContent.trim();
    }

    const entries = bibtexParse.toJSON(bibText) || [];
    if (!entries.length) { list.innerHTML = '<p>No publications found.</p>'; return; }

    list.innerHTML = '';
    entries.forEach(e => {
      const tags = e.entryTags || {};
      const title = tags.title || e.title || '(no title)';
      const author = tags.author || e.author || '';
      const year = tags.year || '';
      const url = tags.url || (tags.doi ? 'https://doi.org/' + tags.doi : '');
      const item = document.createElement('div');
      item.className = 'publication';
      item.innerHTML = '<p class="publication-details"><strong>' + title + '</strong><br>' +
                       author + (year ? ', ' + year : '') +
                       (url ? ' — <a class="doi-link" href="' + url + '" target="_blank" rel="noopener">link</a>' : '') +
                       '</p>';
      list.appendChild(item);
    });
  } catch (err) {
    console.error('Publications error:', err);
    list.innerHTML = '<p style="color:#c00">Error loading publications: ' + err.message + '</p>';
  }
})();