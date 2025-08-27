document.querySelectorAll('.view-more').forEach(button => {
  button.addEventListener('click', () => {
    const fullDesc = button.nextElementSibling;
    fullDesc.classList.toggle('hidden');
  });
});