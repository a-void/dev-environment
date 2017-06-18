import angular from 'angular';

import AppFooter from './footer.component';
import AppHeader from './header.component';

const layoutModule = angular.module('app.layout', [])
  .component('appHeader', AppHeader)
  .component('appFooter', AppFooter);

export default layoutModule;
