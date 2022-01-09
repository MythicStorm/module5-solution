(function () {
    "use strict";
    
    angular.module('common')
    .controller('InfoController', InfoController);
    
    InfoController.$inject = ['UsersService', 'ApiPath'];
    function InfoController(UsersService, ApiPath) {
      var $ctrl = this;
      $ctrl.firstName = UsersService.firstName;
      $ctrl.lastName = UsersService.lastName;
      $ctrl.address = UsersService.address;
      $ctrl.phone = UsersService.phone;
      $ctrl.userCreated = UsersService.userCreated;
      $ctrl.menuItem = UsersService.favorate;
      $ctrl.basePath = ApiPath;
    }
    
    })();
    