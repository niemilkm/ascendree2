Template.settings_trees.rendered = function() {
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Does Not activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true
       // Displays dropdown below the button
    }
  );
}
