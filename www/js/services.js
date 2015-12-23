'use strict';

/* Services */
var vanavaniServices = angular.module('vanavaniServices', ['ngResource']);

vanavaniServices.factory('Teacher', ['$resource',
  function($resource){
    return $resource('jsondata/teachersList.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

vanavaniServices.factory('User', [function() {
	var sdo = {
		isLogged: false,
		username: ''
	};
	return sdo;
}]);