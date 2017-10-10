class CitationHeatmapCtrl {
  constructor() {
    this.citations;
  }

  heat(citationCount) {
    // TODO use a more interesting heat function than a linear one.
    return 0.1 + (citationCount / this.citations.maxCitations) * 0.9;
  }
}

const CitationHeatmapComponent = {
  bindings: {
    citations: '<',
    onPageSelect: '&',
  },
  templateUrl: '/templates/citation-heatmap.html',
  controller: CitationHeatmapCtrl,
};
export default CitationHeatmapComponent;
