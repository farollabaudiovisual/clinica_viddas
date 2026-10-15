const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
  }
});

document.querySelector('[data-current-year]').textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
  const message = 'Olá! Gostaria de receber informações sobre os serviços e agendamentos da Clínica Viddas.';
  const url = new URL(link.href);
  url.searchParams.set('text', message);
  link.href = url.toString();
});

document.addEventListener('click', (event) => {
  if (menuToggle.getAttribute('aria-expanded') === 'true'
    && !event.target.closest('[data-navigation], [data-menu-toggle]')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});

window.matchMedia('(min-width: 851px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const categoryTriggers = [...document.querySelectorAll('[data-category]')];
const categoryCards = categoryTriggers.map((trigger) => trigger.closest('.service-category-card'));

const serviceCategories = {
  consultas: {
    label: 'Consultas e Especialidades',
    services: ['Clínica Geral', 'Cardiologia', 'Ginecologia e Obstetrícia', 'Pediatria', 'Odontologia', 'Ortopedia', 'Psiquiatria', 'Neurologia', 'Nutrição', 'Fisioterapia'],
  },
  imagem: {
    label: 'Diagnóstico por Imagem',
    services: ['Ultrassonografia', 'Radiografia', 'Tomografia Computadorizada', 'Ressonância Magnética', 'Densitometria Óssea', 'Mamografia', 'Exames Contrastados'],
  },
  cardiologia: {
    label: 'Exames Cardiológicos',
    services: ['Eletrocardiograma', 'Holter 24 horas', 'MAPA 24 horas', 'Teste Ergométrico', 'Ecodopplercardiograma'],
  },
  outros: {
    label: 'Outros Exames',
    services: ['Endoscopia Digestiva Alta', 'Colonoscopia', 'Análises Laboratoriais'],
  },
};

const serviceGlyph = '<span class="service-list-mark" aria-hidden="true"></span>';

function populateServiceLists() {
  document.querySelectorAll('[data-service-list]').forEach((list) => {
    const { services } = serviceCategories[list.dataset.serviceList];
    list.innerHTML = services.map((name, index) => (
      `<div class="service-item" role="listitem" style="animation-delay:${Math.min(index * 22, 140)}ms">${serviceGlyph}<span>${name}</span></div>`
    )).join('');
  });
}

function selectServiceCategory(selectedTrigger) {
  const shouldExpand = selectedTrigger.getAttribute('aria-expanded') !== 'true';

  categoryTriggers.forEach((trigger, index) => {
    const isActive = shouldExpand && trigger === selectedTrigger;
    const card = categoryCards[index];
    const panel = card.querySelector('[data-category-panel]');
    trigger.setAttribute('aria-expanded', String(isActive));
    card.classList.toggle('is-expanded', isActive);
    panel.setAttribute('aria-hidden', String(!isActive));
    panel.inert = !isActive;
  });
}

categoryTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => selectServiceCategory(trigger));

  trigger.addEventListener('keydown', (event) => {
    const currentIndex = categoryTriggers.indexOf(trigger);
    let nextIndex = currentIndex;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % categoryTriggers.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + categoryTriggers.length) % categoryTriggers.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = categoryTriggers.length - 1;
    else return;
    event.preventDefault();
    categoryTriggers[nextIndex].focus();
  });
});

populateServiceLists();

