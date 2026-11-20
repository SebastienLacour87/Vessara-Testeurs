// Affiche les entrées de devlog-data.js. Tout passe par textContent : aucune entrée ne peut injecter de HTML.
(function () {
  var root = document.getElementById('entries');
  var entries = window.DEVLOG || [];
  var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  function frDate(iso) {
    var p = String(iso).split('-');
    if (p.length !== 3) return iso;
    return parseInt(p[2], 10) + ' ' + months[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }

  function el(tag, text, cls) {
    var n = document.createElement(tag);
    if (text) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  }

  if (!entries.length) { root.textContent = 'Aucune entrée pour le moment.'; return; }

  entries.forEach(function (e) {
    var box = el('article', '', 'entry');
    box.appendChild(el('h3', e.titre));
    box.appendChild(el('p', 'Version ' + e.version + ' · ' + frDate(e.date), 'meta'));
    var ul = el('ul');
    (e.points || []).forEach(function (t) { ul.appendChild(el('li', t)); });
    box.appendChild(ul);
    root.appendChild(box);
  });

  var last = document.getElementById('lastversion');
  if (last) last.textContent = entries[0].version;
})();
