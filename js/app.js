var Cat = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.nicknames = ['Tabtab', 'T-Bone', 'Mr. T'];

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
};

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
