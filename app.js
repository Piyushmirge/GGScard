function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function validateDate(dateInput, dateObj) {
  const today = new Date();
  
  if (!dateInput) {
    alert("❌ Please select a joining date.");
    return false;
  }
  
  if (isNaN(dateObj.getTime())) {
    alert("❌ Invalid date selected. Please select a valid date.");
    return false;
  }
  
  if (dateObj > today) {
    alert("❌ Joining date cannot be in the future. Please select a past or today's date.");
    return false;
  }
  
  const minYear = 1900;
  if (dateObj.getFullYear() < minYear) {
    alert(`❌ Joining date cannot be before ${minYear}. Please select a more recent date.`);
    return false;
  }
  
  return true;
}

function handleBackgroundUpload(input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const card = document.getElementById('card');
      card.style.backgroundImage = `url(${e.target.result})`;
      card.classList.add('custom-bg');
      
      // Store the background for future card generations
      window.customBackground = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function resetBackground() {
  const card = document.getElementById('card');
  card.style.backgroundImage = '';
  card.classList.remove('custom-bg');
  
  // Clear stored background
  window.customBackground = null;
  
  // Reset file input
  const backgroundInput = document.getElementById('backgroundInput');
  backgroundInput.value = '';
  
  alert('Background reset to default!');
}