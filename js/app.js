var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
  },
  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: ['Tigger']
  },
  {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: ['Casper']
  },
  {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: ['Shooby']
  },
  {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    nicknames: ['Zzzzz']
  }
];

var Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = data.nicknames;

  this.level = ko.computed(function() {
    var clickCount = this.clickCount();
    var level = '';
    if (clickCount < 10) {
      level = 'Newborn';
    } else if (clickCount < 50) {
      level = 'Infant';
    } else if (clickCount < 100) {
      level = 'Child';
    } else if (clickCount < 200) {
      level = 'Teen';
    } else if (clickCount < 500) {
      level = 'Adult';
    } else {
      level = 'Ninja';
    }
    return level;
  }, this);
};

var ViewModel = function() {
  var self = this;

  self.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  self.currentCat = ko.observable(self.catList()[0]);

  self.selectCat = function(cat) {
    self.currentCat(cat);
  };

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
