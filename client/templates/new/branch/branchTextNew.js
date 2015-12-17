Template.branchTextNew.onCreated(function() {

  var instance = this;
  $('select').material_select();

  this.showBranches = new ReactiveVar(false);
  this.newBranchLabel = new ReactiveVar(false);

  //instance.autorun(function() {
    var branchSub = instance.subscribe('branches');
    var treeSub = instance.subscribe('trees');

    if (treeSub.ready()) {
      console.log("tree sub ready");
    }
  //});
  

  // instance.branches = function() { 
  //   return Branches.find();
  // }

  // instance.subBranches = function() {
  //   //maybe do this in a helper of branches
  // }

  instance.trees = function() {
    return Trees.find();
  }

});

Template.branchTextNew.onRendered(function() {
  //$('select').material_select();
  //$('textarea#branchName').characterCounter();

});

Template.branchTextNew.helpers({
  showBranches: function() {
    return Template.instance().showBranches.get();
  },

  trees: function() {
    console.log("trees:");
    return Template.instance().trees();
  },

  branch: function() {
    console.log("branches:");
    console.log(Template.instance().branches());
    return Template.instance().branches();
  },

  subBranch: function() {
    return Template.instance().branches().subBranches();
  },

  runUpdateSelect: function() {
    Meteor.setTimeout(function(){
        $('select').material_select();
        console.log("ran run update select");
    }, 20);
  },

  newBranchLabel: function() {
    var text = Template.instance().newBranchLabel.get() ? "New Top Branch Name" : "New Lower Branch Name";
    return text;
  }

});

Template.branchTextNew.events({

  'click [data-action=submit]': function(event, template) {
    event.preventDefault();
    var params = {};
    params.name = $("#branch").val().trim();
    console.log(params.name);
    if (params.name) {
      Meteor.call('branch.insert', params, function(error) {
        if (!error) {
          $("#branch").val("");
        }
      });

    }
    else
      console.log("no tree name entered");
    //Router.go("/");
  },

  'click [data-action=showBranches]': function(event, template) {
    event.preventDefault();
    console.log(template);
    console.log(template.showBranches.get());
    if(template.showBranches.get())
      template.showBranches.set(0);
    else
      template.showBranches.set(1);
  },

  'change #newBranch': function(event, template) {
    console.log(event);
    console.log(event.target.value);
    if (event.target.value == "1") {
      Template.instance().newBranchLabel.set(false);
    }
    else {
      Template.instance().newBranchLabel.set(true);
    }
  }


});
