class AppHeaderCtrl {
  constructor(AppConstants) {
    this.appName = AppConstants.appName;
  }
}

const AppHeader = {
  controller: AppHeaderCtrl,
  template: require('html-loader?-attrs!./header.html')
};

AppHeaderCtrl.$inject = ['AppConstants'];
export default AppHeader;
