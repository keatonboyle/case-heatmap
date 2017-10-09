import './style.css';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';
import AssetService from './asset.service.js';
import CasePageCtrl from './case-page.ctrl.js';

const app = angular.module('caseHeatmap', [ngRoute, ngSanitize])
  .service('assetService', AssetService)
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


app.run([
  '$rootScope',
  function($rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // next is an object that is the route that we are starting to go to
      // current is an object that is the route where we are currently
      var currentPath = current.originalPath;
      var nextPath = next.originalPath;

      console.log('Starting to leave %s to go to %s', currentPath, nextPath);
    });
    // see what's going on when the route tries to change
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
      // both newUrl and oldUrl are strings
      console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
    });
  }
]);
