import $ from 'jquery';

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
    // TODO ease animation, account for body offset
    const target = $(`[data-page="${page}"]`)[0].offsetTop;
    $('html, body').animate({
      'scrollTop': target,
    });
  }
}
