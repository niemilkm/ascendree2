Trees = new Mongo.Collection('trees');

Trees.helpers({

});

Trees.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Trees.before.update(function (userId, doc) {
  doc.updatedAt = moment().toDate();
});

Trees.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200,
    label: "Tree Name"
  },
  description: {
    type: String,
    optional: true,
    max: 1000,
    label: "Tree Description"
  },
  userId: {
    type: String,
    max: 50,
    label: "User Id"
  },
  published: {
    type: Boolean,
    label: "Published"
  },
  rating: {
    type: Number,
    optional: true,
    allowedValues: [1,2,3,4,5],
    defaultValue: 5,
    label: "Rating"
  }
}));

if (Meteor.isServer)
{
  Meteor.methods({
    'tree.insert': function(params) {
      check(params, {
        name: String,
        published: Boolean
      });
      params.userId = Meteor.userId();
      console.log(params);
      Trees.insert(params);
    },


  });

  Meteor.publish("trees", function() {
    console.log("meteor publish trees ran");
    return Trees.find({userId: this.userId});
  });

}

// check(params, {
//         tree: String
//       });
