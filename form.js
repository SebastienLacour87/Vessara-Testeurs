(function () {
  var form = document.getElementById('form');
  var btn = document.getElementById('send');
  var status = document.getElementById('status');

  function say(text, cls) { status.textContent = text; status.className = cls || ''; }

  function showDone() {
    form.hidden = true;
    var intro = document.getElementById('intro');
    intro.textContent = '';
    var p = document.createElement('p');
    var s = document.createElement('strong');
    s.textContent = 'Merci !';
    p.appendChild(s);
    p.appendChild(document.createTextNode(' Ta demande est bien reçue. Je te réponds par mail avec le lien de la version de test. Pense à regarder tes courriers indésirables.'));
    intro.appendChild(p);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Champ piège rempli : on fait semblant que tout va bien, sans rien envoyer.
    if (form.website.value || form.botcheck.checked) { showDone(); return; }

    var email = form.email.value.trim();
    if (!form.name.value.trim()) { say('Indique ton pseudo ou ton prénom.', 'err'); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { say('Cette adresse mail n\'a pas l\'air valide.', 'err'); return; }
    if (!form.systeme.value) { say('Choisis ton ordinateur.', 'err'); return; }
    if (!document.getElementById('consent').checked) { say('Coche la case de consentement pour continuer.', 'err'); return; }
    if (form.access_key.value.indexOf('REMPLACER') === 0) { say('Le site n\'est pas encore configuré (clé manquante).', 'err'); return; }

    btn.disabled = true;
    say('Envoi en cours…');

    var data = {};
    new FormData(form).forEach(function (v, k) { if (k !== 'website' && k !== 'botcheck') data[k] = v; });

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function (r) { return r.json(); })
    .then(function (j) {
      if (j && j.success) { showDone(); }
      else { throw new Error((j && j.message) || 'Erreur'); }
    })
    .catch(function () {
      btn.disabled = false;
      say('L\'envoi a échoué. Réessaie dans un instant.', 'err');
    });
  });
})();
