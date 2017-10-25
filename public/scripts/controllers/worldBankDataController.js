myApp.controller('worldBankDataController', ['$scope', 'DataFactory', function($scope, dataFactory) {
    $scope.worldBankData = {};
    $scope.dataFactory = dataFactory;

    //Request all World Bank data from factory
    var getData = function() {
        dataFactory.retrieveData().then(function() {
            $scope.worldBankData = dataFactory.worldBankData;
        });
    };

    //Request World Bank indicator topics from factory
    var getTopics = function() {
        dataFactory.retrieveTopics().then(function() {
            $scope.worldBankTopics = dataFactory.worldBankTopics;
        });
    };

    //Request only World Bank indicators in the selected topic category from factory
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