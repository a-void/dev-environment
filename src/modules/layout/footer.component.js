class AppFooterCtrl {
  constructor(AppConstants) {
    this.appName = AppConstants.appName;
    this.date = new Date();
  }
}

const AppFooter = {
  controller: AppFooterCtrl,
  template: require('html-loader?-attrs!./footer.html')
};

AppFooterCtrl.$inject = ['AppConstants'];
export default AppFooter;
