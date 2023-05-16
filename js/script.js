// light youtube video embeds by @labnol
function labnolIframe(div) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '1');
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName('youtube-player');
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement('div');
    div.setAttribute('data-id', videoId);
    var thumbNode = document.createElement('img');
    thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
    div.appendChild(thumbNode);
    var playButton = document.createElement('div');
    playButton.setAttribute('class', 'play');
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}

function initHeroTabs() {
  const tabs = document.querySelectorAll('.tabs-desktop .tab');
  const tabsContents = document.querySelectorAll('.tab-content');
  const select = document.querySelector('#select-tabs')

  if (tabs.length > 0) {
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        const content = document.querySelector(`.tabs-content-container .content-${index + 1}`);

        tabs.forEach(tab => {
          tab.classList.remove('active');
        })

        tabsContents.forEach(tabContent => {
          tabContent.classList.remove('active');
        })

        tab.classList.add('active');
        content.classList.add('active');
        select.value = `content-${index + 1}`
      })
    });

    select.addEventListener('change', (e) => {
      const content = document.querySelector(`.tabs-content-container .${e.target.value}`);

      tabs.forEach(tab => {
        tab.classList.remove('active');
      })

      tabsContents.forEach(tabContent => {
        tabContent.classList.remove('active');
      })

      content.classList.add('active');
      tabs[e.target.selectedIndex].classList.add('active');
    })
  }
}

function initAll() {
  initHeroTabs();
  initYouTubeVideos();
}

document.addEventListener('DOMContentLoaded', initAll);
