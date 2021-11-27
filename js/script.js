function openURL(url) {
  window.open(url, '_blank');
  return url;
}

function getURL() {
  return document.querySelector('#url').value;
}

function isURL(url) {
  return /^(http|https):\/\/[^ "]+$/.test(url);
}

function createDiv(element) {
  var div = document.createElement('div');
  div.className = 'link';
  div.appendChild(element);
  return div;
}

function createLink(url) {
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.innerHTML = '✅ ' + url;
  return a;
}

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var urls = getURL();

  try {
    var result = document.querySelector('#result');
    result.innerHTML = '';

    if (urls.length > 0) {
      urls.split(/\s|,|;|\\n/).forEach(function (url) {
        if (isURL(url)) {
          result.appendChild(createDiv(createLink(openURL(url))));
        } else if (url.length > 0) {
          alert('Digite uma URL válida (http ou https): ' + url);
        }
      });
    } else {
      alert('Digite uma URL');
    }
  } catch (error) {
    alert('Erro ao abrir a URL' + error);
  }
});
