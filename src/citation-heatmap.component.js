class CitationHeatmapCtrl {
  constructor() {
    this.citations;
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
