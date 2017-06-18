AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function AppConfig($stateProvider, $urlRouterProvider) {
  const appState = {
    name: 'app',
    abstract: true,
    template: require('html-loader?-attrs!../modules/layout/app-view.html')
  }

  $stateProvider.state(appState);
  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
