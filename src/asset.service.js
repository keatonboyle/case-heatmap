import CitationStats from './citation-stats.js';

const CASES_PATH = '/assets/cases';
const TEXT_FILENAME = 'text.html';
const CITATIONS_FILENAME = 'citations.json';

export default class AssetService {
  constructor($http, $sce) {
    this.$http = $http;
    this.$sce = $sce;
  }

  // slug: string. String identifying a case
  // returns: Promise<TrustedString>
  //
  // TODO: add cache support, URL sanitization on slug, better error handling.
  getCase(slug) {
    return this.$http.get(`${CASES_PATH}/${slug}/${TEXT_FILENAME}`).then(
      // TODO: trusting this as HTML might be unwise, but do it for now
      // to preserve the data-page attribute.
      (response) => this.$sce.trustAsHtml(response.data));

  }

  // slug: string. String identifying a case
  // returns: Promise<Object>. Promise of a JSON object mapping page numbers to
  //   citation counts
  //
  // TODO: add cache support, URL sanitization on slug, better error handling.
  getCitations(slug) {
    return this.$http.get(`${CASES_PATH}/${slug}/${CITATIONS_FILENAME}`).then(
      (response) => new CitationStats(response.data));
  }
}
