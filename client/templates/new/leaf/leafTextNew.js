
Template.leafTextNew.rendered = function() {
  $('select').material_select();
  $('textarea#name').characterCounter();

};

Template.leafTextNew.helpers({

});

Template.leafTextNew.events({

  'click [data-action=submit]': function(event, template) {
    event.preventDefault();

    // var params = {
    //   name: Branch1,
    //   tree: 
    // }

    console.log("this worked");
    //Router.go("/");
  }


});
