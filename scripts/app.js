(function(module) {
  function Project (obj) {
    for (properties in obj) {
      this[properties] = obj[properties];
    }
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var $source = $('#article-template').html();
    var template = Handlebars.compile($source);
    return template(this);
  };

  Project.populateAll = function (dataPassedIn) {
    console.log(dataPassedIn);
    dataPassedIn.forEach(function(obj) {
      Project.all.push(new Project(obj));
    });
  };

  Project.loadAll = function(next) {
    $.getJSON('data/listOfProj.json', function(responseData) {
      Project.loadAll(responseData);
      localStorage.localData = JSON.stringify(responseData);
      next();
    });
  };

  Project.fetchAll = function(next) {
    if (localStorage.listOfProj) {
      $.ajax({
        type: 'HEAD',
        url: 'data/listOfProj.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (eTag !== localStorage.eTag || !localStorage.eTag) {
            eTag = localStorage.eTag;
            Project.getAll(next);
          } else {
            Project.loadAll(JSON.parse(localStorage.listOfProj));
            next();
          }
        }
      });
    } else {
      Project.loadAll (next);
    }
  };
  module.Project = Project;
})(window);
