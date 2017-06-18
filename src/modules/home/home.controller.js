class HomeCtrl {
  constructor(AppConstants) {
    this.appName = AppConstants.appName;
  }
}

HomeCtrl.$inject = ['AppConstants'];
export default HomeCtrl;
