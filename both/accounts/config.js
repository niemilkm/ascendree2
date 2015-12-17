// AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
// AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
// AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

//AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configure({
  defaultLayout: 'appLayout',
  defaultLayoutRegions: {
    header: '_header',
    footer: '_footer',
    main: 'home'
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  enablePasswordChange: true,
  overrideLoginErrors: true,
  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
