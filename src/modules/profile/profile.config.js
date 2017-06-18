ProfileConfig.$inject = ['$stateProvider'];
function ProfileConfig($stateProvider) {
  const profileState = {
    name: 'app.profile',
    url: '/profile',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    template: require('html-loader?-attrs!./profile.html'),
    title: 'Profile'
  }

  $stateProvider.state(profileState);
};

export default ProfileConfig;
