(function () {
    "use strict";
    
    angular.module('common')
    .controller('UserController', UserController);
    
    UserController.$inject = ['UsersService'];
    function UserController(UsersService) {
      var $ctrl = this;
      $ctrl.favorate;
      $ctrl.firstName;
      $ctrl.lastName;
      $ctrl.address;
      $ctrl.phone;
      $ctrl.notFound;
      $ctrl.menuItem;
      var menuItemID;

      $ctrl.submit = function () {
        $ctrl.menuItem = [];

        var promise = UsersService.getMenuItems($ctrl.favorate);
        promise.then(function (response){
          $ctrl.menuItem = response;

          if ($ctrl.menuItem.length > 0)
          {
            $ctrl.notFound = false;
            $ctrl.valid = true;

            UsersService.saveUserInformation($ctrl.firstName, $ctrl.lastName, $ctrl.address, $ctrl.phone, $ctrl.menuItem);
          }
          else
          {
            $ctrl.notFound = true;
            $ctrl.valid = false;
          }

        })
        .catch(function(error){

        }); 
      };
    }
    
    })();
    