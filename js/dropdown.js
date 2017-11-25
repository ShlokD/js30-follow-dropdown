const triggers = document.querySelectorAll('.cool > li');
const dropdown = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


const handleEnter = (ev) => {
  ev.target.classList.add('trigger-enter');
  setTimeout(() => ev.target.classList.add('trigger-enter-active'), 150)
  dropdown.classList.add('open');

  const bg = ev.target.querySelector('.dropdown');
  const bgCoords = bg.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: bgCoords.height,
    width: bgCoords.width,
    left: bgCoords.left - navCoords.left,
    top: bgCoords.top - navCoords.top
  };

  dropdown.style.setProperty('width', `${coords.width}px`);
  dropdown.style.setProperty('height', `${coords.height}px`);
  dropdown.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);  
};

const handleLeave = (ev) => {
  ev.target.classList.remove('trigger-enter');
  ev.target.classList.remove('trigger-enter-active');
  dropdown.classList.remove('open');
}


triggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', handleEnter);
  trigger.addEventListener('mouseleave', handleLeave);
})