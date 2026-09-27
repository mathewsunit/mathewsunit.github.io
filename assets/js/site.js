// Oppam — progressive enhancement only; the page works without JavaScript.
document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  if (btn && nav) {
    const setOpen = (open) => {
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    };
    btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Contact form: submit in place instead of navigating to Formspree
  const form = document.querySelector('form.form');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = 'Sending…';
    submit.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.classList.add('ok');
      status.textContent = 'Thank you — your message has been sent. I will be in touch soon.';
    } catch {
      status.classList.add('err');
      status.textContent = 'Sorry, something went wrong. Please try again in a moment.';
    } finally {
      submit.disabled = false;
    }
  });
});
