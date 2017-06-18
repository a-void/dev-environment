import angular from 'angular';

import ProfileConfig from './profile.config';
import ProfileCtrl from './profile.controller';

const profileModule = angular.module('app.profile', [])
  .config(ProfileConfig)
  .controller('ProfileCtrl', ProfileCtrl);

export default profileModule;
