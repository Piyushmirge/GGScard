let personCount = 0;

function addPersonInput() {
  const container = document.getElementById('personInputs');
  const id = `person-${personCount++}`;
  const div = document.createElement('div');
  div.classList.add("flex", "gap-4", "items-center");
  div.innerHTML = `
    <input type="text" placeholder="Enter Name" class="name-input w-1/2 p-2 border rounded" />
    <input type="file" accept="image/*" class="photo-input w-1/2 p-2 border rounded" />
    <button onclick="this.parentElement.remove()" class="text-red-600">🗑️</button>
  `;
  container.appendChild(div);
}