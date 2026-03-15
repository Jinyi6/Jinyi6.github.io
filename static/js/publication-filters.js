document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.querySelectorAll('[data-pub-filter]'));
  const cards = Array.from(document.querySelectorAll('.pub-card'));

  if (!buttons.length || !cards.length) {
    return;
  }

  const setActive = (activeSlug) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.pubFilter === activeSlug;
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    cards.forEach((card) => {
      if (activeSlug === 'all') {
        card.classList.remove('hidden');
        return;
      }

      const tags = (card.dataset.tagSlugs || '').split(' ').filter(Boolean);
      card.classList.toggle('hidden', !tags.includes(activeSlug));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setActive(button.dataset.pubFilter);
    });
  });

  setActive('all');
});
