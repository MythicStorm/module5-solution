(function () {
    "use strict";
    
    angular.module('public')
    .service('UsersService', UsersService);
    
    
    UsersService.$inject = ['$http', 'ApiPath'];
    function UsersService($http, ApiPath) {
      var service = this;
      service.firstName;
      service.lastName;
      service.address;
      service.phone;
      service.favorate;
      service.userCreated = false;
      
      service.getMenuItems = function (favorate) {
        
        return $http.get(ApiPath + '/menu_items.json').then(function (response) {
          var menuItem = [];

          for(var i = 0; i < response.data.menu_items.length; i++)
          {        
            if(response.data.menu_items[i].short_name == favorate)
            {
             menuItem.push(response.data.menu_items[i]);
            }              
          }

          return menuItem;
        })
      };

      service.saveUserInformation = function (firstName, lastName, address, phone, favorate) {
        service.firstName = firstName;
        service.lastName = lastName;
        service.address = address;
        service.phone = phone;
        service.favorate = favorate;
        service.userCreated = true;
      };
    }
    
    
  })();
    