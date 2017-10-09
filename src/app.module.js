import './style.css';
import angular from 'angular';
import ngRoute from 'angular-route';
import AssetService from './asset.service.js';
import CasePageCtrl from './case-page.ctrl.js';
import CitationHeatmapComponent from './citation-heatmap.component.js';

const app = angular.module('caseHeatmap', [ngRoute])
  .service('assetService', AssetService)
  .component('citationHeatmap', CitationHeatmapComponent)
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/case/:slug', {
        templateUrl: '/templates/case-page.html',
        controller: CasePageCtrl,
        controllerAs: '$ctrl', // Match default component behavior.
      })
      .otherwise({
        templateUrl: '/templates/index.html',
      });
    $locationProvider.html5Mode(true);
  });
