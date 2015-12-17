Template.filterOptions.created = function() {
  this.filterTree = new ReactiveVar(true);
  this.filterBranch1 = new ReactiveVar(true);
  this.filterBranch2 = new ReactiveVar(true);
  this.filterDateAfter = new ReactiveVar(true);

  $('.datepicker').pickadate({
    //selectMonths: true, // Creates a dropdown to control month
    //selectYears: 15 // Creates a dropdown of 15 years to control year
  });
};

Template.filterOptions.rendered = function() {
  // $(".button-collapse").sideNav();
};

Template.filterOptions.helpers({

  filterTree: function() {
    return Template.instance().filterTree.get();
  },

  filterBranch1: function() {
    return Template.instance().filterBranch1.get();
  },

  filterBranch2: function() {
    return Template.instance().filterBranch2.get();
  },

  filterDateAfter: function() {
    return Template.instance().filterDateAfter.get();
  },

});

Template.filterOptions.events({

  'click [name=filterTree]': function(e) {
    e.preventDefault();
    if (Template.instance().filterTree.get())
      Template.instance().filterTree.set(false);
    else
      Template.instance().filterTree.set(true);
  },

  'click [name=filterBranch1]': function(e) {
    e.preventDefault();
    if (Template.instance().filterBranch1.get())
      Template.instance().filterBranch1.set(false);
    else
      Template.instance().filterBranch1.set(true);
  },

  'click [name=filterBranch2]': function(e) {
    e.preventDefault();
    if (Template.instance().filterBranch2.get())
      Template.instance().filterBranch2.set(false);
    else
      Template.instance().filterBranch2.set(true);
  },

  'click [name=filterDateAfter]': function(e) {
    e.preventDefault();
    if (Template.instance().filterDateAfter.get())
      Template.instance().filterDateAfter.set(false);
    else
      Template.instance().filterDateAfter.set(true);
  },

});
