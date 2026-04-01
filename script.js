document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

const guestList = document.getElementById('guest-list');
const addGuestBtn = document.getElementById('add-guest');

function createGuestRow(index) {
  const row = document.createElement('div');
  row.className = 'page-card';
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
