// Fetch and render BibTeX entries from assets/publications.bib
(async () => {
  try {
    const res = await fetch('assets/publications.bib');
    if (!res.ok) throw new Error('Could not load assets/publications.bib');
    const bib = await res.text();
    const entries = bibtexParse.toJSON(bib);
    const list = document.getElementById('publications-list');
    if (!list) return;
    entries.forEach(e => {
      const tags = e.entryTags || {};
      const title = tags.title || e.title || '(no title)';
      const author = tags.author || e.author || '';
      const year = tags.year || '';
      const doi = tags.doi || tags.url || '';
      const url = tags.url || (tags.doi ? `https://doi.org/${tags.doi}` : '');
      const item = document.createElement('div');
      item.className = 'publication';
      item.innerHTML = `<p class="publication-details">
        <strong>${title}</strong><br>
        ${author}${year ? ', ' + year : ''}${url ? ` — <a class="doi-link" href="${url}" target="_blank" rel="noopener">link</a>` : ''}
      </p>`;
      list.appendChild(item);
    });
  } catch (err) {
    console.error(err);
  }
})();