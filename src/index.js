import angular from 'angular';
import 'angular-ui-router';

// app configuration
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';

// app dependencies
import './components';
import './services';
import './modules/layout';
import './modules/home';
import './modules/profile';

const dependencies = [
  'ui.router',
  'app.components',
  'app.services',
  'app.layout',
  'app.home',
  'app.profile'
];

// create and bootstrap the app
angular.module('app', dependencies)
  .constant('AppConstants', constants)
  .config(appConfig)
  .run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
