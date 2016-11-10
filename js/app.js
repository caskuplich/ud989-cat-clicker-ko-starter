var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

  this.level = ko.computed(function() {
    var clickCount = this.clickCount();
    var level = '';
    if (clickCount < 10) {
      level = 'Newborn';
    } else if (clickCount < 50) {
      level = 'Infant';
    } else if (clickCount < 150) {
      level = 'Teen';
    } else if (clickCount < 300) {
      level = 'Adult';
    } else {
      level = 'Elder';
    }
    return level;
  }, this);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
