import $ from 'jquery';

export default class CasePageCtrl {
  constructor(assetService, $routeParams) {
    this.assetService = assetService;

    this.error = false;

    this.caseText;
    this.assetService.getCase($routeParams.slug).then(
      (html) => {
        // TODO handle internal links.
        this.caseText = html;
      },
      (error) => {
        console.error('Could not load case');
        this.error = true;
      });

    this.citationsMap;
    this.assetService.getCitations($routeParams.slug).then(
      (citationsMap) => {
        this.citationsMap = citationsMap;
      },
      (error) => {
        console.error('Could not load citations map');
      });
  }

  scrollToPage(page) {
    // TODO ease animation, account for body offset.
    const target = $(`[data-page="${page}"]`)[0];

    // Default to 0 for pages that aren't found (like 0 and 1).
    const scrollTo = target ? target.offsetTop : 0;
    $('.case-page-case').animate({
      'scrollTop': scrollTo,
    });
  }
}
