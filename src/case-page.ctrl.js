export default class CasePageCtrl {
  constructor(assetService, $routeParams) {
    this.assetService = assetService;

    this.caseText;
    this.assetService.getCase($routeParams.slug).then(
      (html) => {
        this.caseText = html;
      });

    this.citationsMap;
    this.assetService.getCitations($routeParams.slug).then(
      (citationsMap) => {
        this.citationsMap = citationsMap;
      });
  }

  scrollToPage(page) {
    console.log(page);
  }
}
