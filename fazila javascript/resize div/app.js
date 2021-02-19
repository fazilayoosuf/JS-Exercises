function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const resizers = document.querySelectorAll(div + ' .resizer')
    for (let i = 0;i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function(e) {
        currentResizer.addEventListener('mousemove', resize)
      })
      
      function resize(e) {
        if (currentResizer.classList.contains('bottom-right')) {
          element.style.width = e.pageX - element.getBoundingClientRect().left + 'px';
        }
      }
    }
  }
  
  makeResizableDiv('.resizable')
  