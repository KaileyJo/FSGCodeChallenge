myApp.factory('DataFactory', ['$http', function($http){
    var worldBankData = {};

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/home').then(function(response) {
            worldBankData.list = response.data;
            console.log('Async data response:', worldBankData);
        });
        return promise;
    };

    var publicApi = {
        retrieveData: function() {
            return getData();
        },
        worldBankData: function(){
            return worldBankData;
        }
    };

    return publicApi;
}]);