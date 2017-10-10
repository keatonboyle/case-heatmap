export default class CitationsStats {
  constructor(citationsMap) {
    this.citationsMap = citationsMap;

    this.maxCitations = 1;
    this.pages = 1;
    Object.keys(this.citationsMap).forEach((page) => {
      this.maxCitations = Math.max(this.maxCitations, this.citationsMap[page]);
      this.pages = Math.max(this.pages, page);
    });

    // asArray is a list of citation counts per page.  Note that page 1 is at
    // index 0 in the array.
    //
    // TODO account for uncited pages at the end.
    this.asArray = Array.from(
      new Array(this.pages),
      (v, i) => {
        const count = this.citationsMap[i + 1];
        if (count === undefined) {
          return 0;
        }
        return count;
      });
  }
}
