myApp.factory('DataFactory', ['$http', function($http){
    var worldBankData = {};
    var worldBankTopics = {};

    var getData = function() {
        var promise = $http.get('/home').then(function(response) {
            worldBankData.list = response.data;
            console.log('Async data response:', worldBankData);
        });
        return promise;
    };

    var getTopics = function() {
        var promise = $http.get('/home/topics').then(function(response) {
            worldBankTopics.list = response.data;
            console.log('Async data response:', worldBankTopics);
        });
        return promise;
    };

    var getDataByTopicCode = function(topicCode) {
        console.log('factory topic code');
        var promise = $http.get('/home/topicCode/' + topicCode).then(function(response) {
            worldBankData.list = response.data;
            console.log('Async data response:', worldBankData);
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