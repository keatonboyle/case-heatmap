import './style.css';
import angular from 'angular';
import ngRoute from 'angular-route';

angular.module('caseHeatmap', [ngRoute])
  .config(function($routeProvider) {
    $routeProvider.otherwise({
      templateUrl: 'templates/index.html',
    });
  });
