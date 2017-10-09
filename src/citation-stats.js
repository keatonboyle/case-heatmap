export default class CitationsStats {
  constructor(citationsMap) {
    this.citationsMap = citationsMap;

    this.maxCitations = 1;
    this.pages = 1;
    Object.keys(this.citationsMap).forEach((page) => {
      this.maxCitations = Math.max(this.maxCitations, this.citationsMap[page]);
      this.pages = Math.max(this.pages, page);
    });

    // TODO: account for uncited pages at the end.
    this.asHeatArray = Array.from(
      new Array(this.pages),
      (v, i) => {
        const count = this.citationsMap[i];
        if (count === undefined) {
          return 0;
        }
        // TODO: use a non-linear function for more fun.
        return count / this.maxCitations;
      });
  }
}
