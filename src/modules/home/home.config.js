HomeConfig.$inject = ['$stateProvider'];
function HomeConfig($stateProvider) {
  const homeState = {
    name: 'app.home',
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    template: require('html-loader?-attrs!./home.html'),
    title: 'Home'
  }

  $stateProvider.state(homeState);
};

export default HomeConfig;
