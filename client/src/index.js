var angular = require('angular');
var helloCtl = require('./controllers/hello');


var folio = angular.module('folio', []);
folio.controller('HelloCtl', helloCtl);

