Template.rightSidePanel.rendered = function() {
  $(".button-collapse").sideNav({
    //menuWidth: 300,
    edge: 'right',
    closeOnClick: true
  });
};

Template.rightSidePanel.helpers({
  tree1: function()
  {
    return "tree1";
  }
});

Template.rightSidePanel.events({
  'click .topRight': function() {
    console.log("clicked rightSidePanel element");
  }
})
