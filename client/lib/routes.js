
//Main Headers\Pages

FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render('appLayout', {
      main: 'home',
      header: '_header',
      footer: '_footer',
      leftSide: 'leftSidePanel',
      rightSide: 'rightSidePanel'
    });
  }
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render('appLayout', {
      main: 'dashboard',
      header: '_header',
      footer: '_footer',
      leftSide: 'leftSidePanel',
      rightSide: 'rightSidePanel'
    });
  }
});

FlowRouter.route('/settings', {
  name: 'settings',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render('appLayout', {
      main: 'settings',
      header: '_header',
      footer: '_footer'
    });
  }
});

FlowRouter.route('/subscribe', {
  name: 'subscribe',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render('appLayout', {
      main: 'subscribe',
      header: '_header',
      footer: '_footer'
    });
  }
});

//Leafs
FlowRouter.route('/new', {
  name: 'new',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render('appLayout', {
      main: 'new',
      header: '_header',
      footer: '_footer'
    });
  }
});
