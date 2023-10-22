(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyListItems = this;

        toBuyListItems.list = ShoppingListCheckOffService.getToBuyList();

        toBuyListItems.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }


 
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.list = ShoppingListCheckOffService.getBoughtList();
    }

   
    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyListItems = [
            {name: "cookies", quantity: 10},
            {name: "coffee", quantity: 6},
            {name: "juse", quantity: 10},
            {name: "cholcte", quantity: 7},
            {name: "milke", quantity: 9}
        ];

        var boughtList = [];

        service.buyItem = function (itemIndex) {
            var item = {
                name: toBuyListItems[itemIndex].name,
                quantity: toBuyListItems[itemIndex].quantity
            };
            boughtList.push(item);
            toBuyListItems.splice(itemIndex, 1);
        };

        service.getToBuyList = function () {
            return toBuyListItems;
        };

        service.getBoughtList = function () {
            return boughtList;
        };
    }

})();
