
  let buttons = document.querySelectorAll('.buttons span');
  let images = document.querySelectorAll('.image-container img');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let category = button.getAttribute('data-category');

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      images.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
          img.style.display = 'inline';
        } else {
          img.style.display = 'none';
        }
      });
    });
  });

