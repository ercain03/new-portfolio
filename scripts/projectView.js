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

$(document).ready(function() {
  projectsView.handleMainNav();
  $('.nav-li').click(function() {
    $('.top-menu').toggleClass('expand');
  });
});
