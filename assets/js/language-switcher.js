document.addEventListener('DOMContentLoaded', function() {
  // Get language from URL parameter
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Get current language from URL or localStorage
  var lang = getUrlParameter('lang');
  if (!lang) {
    lang = localStorage.getItem('preferredLang') || '{{ site.lang }}';
  }

  // Update language switcher button text
  var switcherButton = document.querySelector('.nav-link.dropdown-toggle[href="#"]');
  if (switcherButton) {
    switcherButton.textContent = lang === 'zh-CN' ? '中文' : 'EN';
  }

  // Store language preference
  localStorage.setItem('preferredLang', lang);

  // Add click handlers to language dropdown items
  var langLinks = document.querySelectorAll('.dropdown-item[href*="lang="]');
  langLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var newLang = href.split('=')[1];
      localStorage.setItem('preferredLang', newLang);
      
      // Reload page with new language parameter
      var url = new URL(window.location);
      url.searchParams.set('lang', newLang);
      window.location.href = url.toString();
    });
  });
});
