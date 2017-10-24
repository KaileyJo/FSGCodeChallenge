myApp.controller('worldBankDataController', ['$scope', 'DataFactory', function($scope, dataFactory) {
    $scope.message = 'Data Controller';
    $scope.worldBankData = [];
    $scope.dataFactory = dataFactory;

    dataFactory.retrieveData().then(function() {
        $scope.worldBankData = dataFactory.worldBankData();
    });
}]);