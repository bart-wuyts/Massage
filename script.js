// Klein script voor formulier (frontend-only)
// Vervang of koppel aan backend wanneer je echte aanvragen wilt verwerken.

function submitForm(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = data.get('name') || 'Onbekend';
  // Voor demo: tonen we een eenvoudige bevestiging. In productie: POST naar server.
  alert(`Dank je ${name}. Je aanvraag is verzonden. We nemen binnen 24 uur contact op.`);
  form.reset();
}

// Smooth scrolling voor anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
