const inputs = document.querySelectorAll('.controls input');
function updateStyle() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};
inputs.forEach(input => input.addEventListener('change', updateStyle));
inputs.forEach(input => input.addEventListener('mousemove', updateStyle));
