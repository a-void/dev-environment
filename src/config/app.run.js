AppRun.$inject = ['$trace', '$transitions', '$rootScope'];
function AppRun($trace, $transitions, $rootScope) {
  $trace.enable('TRANSITION');

  $transitions.onEnter({}, function(trans, state) {
    $rootScope.pageTitle = state.title;
  });
}

export default AppRun;
