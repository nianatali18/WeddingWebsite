const revealables = document.querySelectorAll('[data-reveal], .page-card, .faq-item');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  },
  { threshold: 0.18 }
);

revealables.forEach((item) => {
  if (!item.hasAttribute('data-reveal')) item.setAttribute('data-reveal', '');
  revealObserver.observe(item);
});

document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (event) => {
    const { left, top, width, height } = hero.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    hero.style.transform = `rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
  });
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

const petalLayer = document.getElementById('petal-layer');
if (petalLayer) {
  const count = 18;
  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${10 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.opacity = `${0.15 + Math.random() * 0.35}`;
    petalLayer.appendChild(petal);
  }
}

const guestList = document.getElementById('guest-list');
const addGuestBtn = document.getElementById('add-guest');

function createGuestRow(index) {
  const row = document.createElement('div');
  row.className = 'page-card revealed';
  row.innerHTML = `
    <div class="form-row">
      <label>Guest name
        <input name="guest_name_${index}" required />
      </label>
      <label>Attendance
        <select name="attendance_${index}">
          <option value="attending">Attending</option>
          <option value="not_attending">Not attending</option>
        </select>
      </label>
      <label>Meal preference
        <input name="meal_${index}" placeholder="Optional" />
      </label>
    </div>`;
  return row;
}

if (guestList && addGuestBtn) {
  let guestCount = 1;
  guestList.appendChild(createGuestRow(guestCount));

  addGuestBtn.addEventListener('click', () => {
    guestCount += 1;
    guestList.appendChild(createGuestRow(guestCount));
  });
}

const staySelect = document.getElementById('stay-option');
const villaFields = document.getElementById('villa-fields');

if (staySelect && villaFields) {
  const toggleVillaFields = () => {
    villaFields.classList.toggle('hidden', staySelect.value !== 'villa');
  };
  staySelect.addEventListener('change', toggleVillaFields);
  toggleVillaFields();
}
