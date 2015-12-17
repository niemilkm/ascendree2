Schedule = new Mongo.Collection('schedule');

Schedule.helpers({

});

Schedule.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Schedule.before.update(function (userId, doc) {
  doc.updatedAt = moment().toDate();
});

Schedule.attachSchema(new SimpleSchema({
  treeId: {
    type: String,
    max: 50,
    label: "Schedule Tree Id"
  },
  monday: {
    label: "Schedule Monday",
    type: Boolean
  },
  tuesday: {
    label: "Schedule Tuesday",
    type: Boolean
  },
  wednesday: {
    label: "Schedule Wednesday",
    type: Boolean
  },
  thursday: {
    label: "Schedule Thursday",
    type: Boolean
  },
  friday: {
    label: "Schedule Friday",
    type: Boolean
  },
  saturday: {
    label: "Schedule Saturday",
    type: Boolean
  },
  sunday: {
    label: "Schedule Sunday",
    type: Boolean
  },
  time1: {
    label: "Time1",
    type: Boolean
  },
  time2: {
    label: "Time2",
    type: Boolean
  },
  time3: {
    label: "Time3",
    type: Boolean
  },
  userId: { //this is the user who has this tree scheduled
    label: "Schedule User Id",
    type: String,
    max: 50
  }
}));
