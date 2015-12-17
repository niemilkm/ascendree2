
Template.new.onCreated(function() {
  this.tab = new ReactiveVar('leaf');
});

Template.new.rendered = function() {
  $('select').material_select();
  $('ul.tabs').tabs();

};

Template.new.helpers({
  tab: function() {
    var tab = {leaf:0, branch:0, tree:0};
    var tabIndex = Template.instance().tab.get();
    switch(tabIndex) {
      case 'leaf':
        tab.leaf = 1;
        break;
      case 'branch':
        tab.branch = 1;
        break;
      case 'tree':
        tab.tree = 1;
        break;
      default:
        tab.leaf = 1;
    }
    return tab;
  }

});

Template.new.events({
  'click [name=leaf]': function(event, template) {
    event.preventDefault();
    template.tab.set('leaf');
  },

  'click [name=branch]': function(event, template) {
    event.preventDefault();
    template.tab.set('branch');
  },

  'click [name=tree]': function(event, template) {
    event.preventDefault();
    template.tab.set('tree');
  },

})