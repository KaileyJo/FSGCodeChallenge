myApp.factory('DataFactory', ['$http', function($http){
    var worldBankData = {};
    var worldBankTopics = {};

    //Get all World Bank data
    var getData = function() {
        var promise = $http.get('/home').then(function(response) {
            worldBankData.list = response.data;
        });
        return promise;
    };

    //Get World Bank indicator topics
    var getTopics = function() {
        var promise = $http.get('/home/topics').then(function(response) {
            worldBankTopics.list = response.data;
            console.log('Async data response:', worldBankTopics);
        });
        return promise;
    };

    //Get only World Bank indicators in the selected topic category
    var getDataByTopicCode = function(topicCode) {
        var promise = $http.get('/home/topicCode/' + topicCode).then(function(response) {
            worldBankData.list = response.data;
        });
        return promise;
    };

    var publicApi = {
        retrieveData: function() {
            return getData();
        },
        retrieveTopics: function() {
            return getTopics();
        },
        retrieveDataByTopicCode: function(topicCode) {
            return getDataByTopicCode(topicCode);
        },
        worldBankData: worldBankData,
        worldBankTopics: worldBankTopics
    };

    return publicApi;
}]);