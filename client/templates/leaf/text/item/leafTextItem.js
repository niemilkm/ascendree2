Template.leafTextItem.created = function() {
  console.log("in created");
  $('.modal-trigger').leanModal({
    dismissible: false
  });
}

// Template.leafTextItem.events({
//   'click [name=modalTest]': function() {
//     console.log("in event");
//     $('#modal1').openModal();
//   }
// });
