var projectsView = {};

projectsView.handleMainNav = function() {
  $('.main-nav').on('click', '.nav-li', function(e) {
    e.preventDefault();
    $('.page-content').hide();
    var $clickEvent = $(this);
    console.log($clickEvent);
    $('[id="' + $clickEvent.attr('data-content') + '"]').show();
    $('.top-menu').removeClass('expand');
  });
  $('.main-nav .nav-li:first').click();
};

$(document).ready(function() {
  projectsView.handleMainNav();
  $('.hamburger-icon').click(function() {
    $('.top-menu').toggleClass('expand');
  });
});