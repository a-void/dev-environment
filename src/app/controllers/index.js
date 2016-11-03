'use strict';

var angular = require('angular');

// responsible for loading all app controllers
angular.module('Dev-Environment')
  .controller('controllerX', require('./controllerX'));
