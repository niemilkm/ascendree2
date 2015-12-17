Template.treeTextNew.onCreated(function() {

  var instance = this;

  this.showTrees = new ReactiveVar(false);
  console.log("subscribe trees ran in treeTextNew");
  instance.subscribe('trees');

  instance.trees = function() { 
    return Trees.find();
  }

});

Template.treeTextNew.helpers({
  showTrees: function() {
    return Template.instance().showTrees.get();
  },

  tree: function() {
    console.log("trees in treeTextNew:");
    console.log(Template.instance().trees());
    return Template.instance().trees();
  }

});

Template.treeTextNew.events({

  'click [data-action=submit]': function(event, template) {
    event.preventDefault();
    var params = {};
    params.name = $("#tree").val().trim();
    console.log(params.name);
    params.published = $("#publish").prop('checked');
    if (params.name) {
      Meteor.call('tree.insert', params, function(error) {
        if (!error) {
          $("#tree").val("");
          $("#publish").attr("checked", false);
        }
      });

    }
    else
      console.log("no tree name entered");
    //Router.go("/");
  },

  'click [data-action=showTrees]': function(event, template) {
    event.preventDefault();
    console.log(template);
    console.log(template.showTrees.get());
    if(template.showTrees.get())
      template.showTrees.set(0);
    else
      template.showTrees.set(1);
  }


});
