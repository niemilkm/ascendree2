SubscribedTo = new Mongo.Collection('subscribedTo');

SubscribedTo.helpers({

});

SubscribedTo.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

SubscribedTo.before.update(function (userId, doc) {
  doc.updatedAt = moment().toDate();
});

SubscribedTo.attachSchema(new SimpleSchema({
  treeId: {
    type: String,
    max: 50,
    label: "Subscribed To Tree Id"
  },
  userId: {
    type: String,
    max: 50,
    label: "Subscribed To User Id"
  }
}));
