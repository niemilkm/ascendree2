Leaves = new Mongo.Collection('leaves');

Leaves.helpers({

});

Leaves.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Leaves.before.update(function (userId, doc) {
  doc.updatedAt = moment().toDate();
});

Leaves.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  branchId: {
    type: String,
    max: 50
  }
}));
