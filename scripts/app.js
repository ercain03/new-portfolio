var appendProjects = [];

function Project(obj) {
  this.title = obj.title;
  this.publishedOn = obj.publishedOn;
  this.imageUrl = obj.imageUrl;
  this.projectUrl = obj.projectUrl;
  this.category = obj.category;
  this.body = obj.body;
}

Project.prototype.toHtml = function() {
  var $source = $('#article-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

allProjects.forEach(function(obj) {
  appendProjects.push(new Project(obj));
});

appendProjects.forEach(function(obj) {
  $('#articles').append(obj.toHtml());
});
