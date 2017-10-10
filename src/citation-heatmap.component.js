import './citation-heatmap.css';

class CitationHeatmapCtrl {
  constructor() {
    this.citations;
  }

  // Calculates a 'heat' score to use for sizing and coloring the heatmap blip
  // for a page with the given citationCount
  //
  // citationCount: number
  // returns: number
  heat(citationCount) {
    // TODO use a more interesting heat function than this linear one.
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
