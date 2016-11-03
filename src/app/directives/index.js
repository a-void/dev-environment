'use strict';

var angular = require('angular');

// responsible for loading all app directives
angular.module('Dev-Environment')
  .directive('directiveX', require('./directiveX'))
  .directive('directiveY', require('./directiveY'));
