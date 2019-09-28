function clickHandler(element) {
  document.querySelectorAll('.content').forEach(function(page) {
    page.style.display = 'none';
  });
  const content = document.querySelector(element);
  content.style.display = 'block';
}

const buttonEvents = document.querySelector('button#Events');
buttonEvents.addEventListener('click', function(event) {
  clickHandler('div#Events');
})

const buttonProfile = document.querySelector('button#Profile');
buttonProfile.addEventListener('click', function(event) {
  clickHandler('div#Profile');
})


const buttonChat = document.querySelector('button#Chat');
buttonChat.addEventListener('click', function(event) {
  clickHandler('div#Chat');
})

