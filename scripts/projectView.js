(function(module) {
  var projectsView = {};

  projectsView.handleMainNav = function() {
    $('.main-nav').on('click', '.nav-li', function(e) {
      e.preventDefault();
      $('.page-content').hide();
      var $clickEvent = $(this);
      $('[id="' + $clickEvent.attr('data-content') + '"]').show();
      $('.top-menu').removeClass('expand');
    });
    $('.main-nav .nav-li:first').click();
  };

  projectsView.initProjectContent = function() {
    Project.all.forEach(function (data) {
      $('#articles').append(data.toHtml($('#article-template')));
    });
  };

  $(document).ready(function() {
    projectsView.handleMainNav();
    $('.nav-li').click(function() {
      $('.top-menu').toggleClass('expand');
    });
  });
  module.projectsView = projectsView;
})(window);
