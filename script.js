// ===== Gauge needle sweep (home hero) =====
document.addEventListener('DOMContentLoaded', () => {
  const needle = document.querySelector('.gauge-needle');
  if(needle){
    const targetAngle = needle.dataset.angle || '-40';
    needle.style.transform = 'rotate(-140deg)';
    requestAnimationFrame(()=>{
      setTimeout(()=>{
        needle.style.transition = 'transform 1.6s cubic-bezier(.2,1.4,.3,1)';
        needle.style.transform = `rotate(${targetAngle}deg)`;
      }, 200);
    });
  }

  // mark active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a=>{
    if(a.getAttribute('href') === here) a.classList.add('active');
  });

  // ===== Exam Q&A filter chips =====
  const chips = document.querySelectorAll('.chip');
  const qas = document.querySelectorAll('.qa');
  if(chips.length){
    chips.forEach(chip=>{
      chip.addEventListener('click', ()=>{
        chips.forEach(c=>c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.cat;
        qas.forEach(qa=>{
          qa.style.display = (cat === 'all' || qa.dataset.cat === cat) ? '' : 'none';
        });
      });
    });
  }
});
