myApp.controller('worldBankDataController', ['$scope', 'DataFactory', function($scope, dataFactory) {
    $scope.worldBankData = {};
    $scope.dataFactory = dataFactory;

    var getData = function() {
        dataFactory.retrieveData().then(function() {
            $scope.worldBankData = dataFactory.worldBankData;
        });
    };

    var getTopics = function() {
        dataFactory.retrieveTopics().then(function() {
            $scope.worldBankTopics = dataFactory.worldBankTopics;
        });
    };

    $scope.getDataByTopicCode = function() {
        if($scope.selectedTopic == null) {
            getData();
        } else {
            dataFactory.retrieveDataByTopicCode($scope.selectedTopic.code).then(function () {
                $scope.worldBankData = dataFactory.worldBankData;
            });
        }
    };

    getData();
    getTopics();
}]);