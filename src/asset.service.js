const CASES_PATH = '/assets/cases';
const TEXT_FILENAME = 'text.html';
const CITATIONS_FILENAME = 'citations.json';

export default class AssetService {
  constructor($http, $sce) {
    this.$http = $http;
    this.$sce = $sce;
  }

  // slug: string identifying a case
  // returns: promise of an HTML string containing the text of a case
  //
  // TODO: add cache support, URL sanitization on slug, error handling.
  getCase(slug) {
    return this.$http.get(`${CASES_PATH}/${slug}/${TEXT_FILENAME}`).then(
      // TODO: trusting this as HTML might be unwise, but do it for now
      // to preserve the data-page attribute.
      (response) => this.$sce.trustAsHtml(response.data),
      (error) => {
        console.error(error);
      });

  }

  // slug: string identifying a case
  // returns: promise of a JSON object mapping page numbers to citation
  //   counts
  //
  // TODO: add cache support, URL sanitization on slug, error handling.
  getCitations(slug) {
    return this.$http.get(`${CASES_PATH}/${slug}/${CITATIONS_FILENAME}`).then(
      (response) => response.data,
      (error) => {
        console.error(error);
      });
  }
}
