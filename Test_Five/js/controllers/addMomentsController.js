app.controller('addMomentsController', function ($scope) {
   
    $scope.moment = {
        image: '',
        title: ''
    };

    $scope.moments = [];

    $scope.addMoment = function () {
        $scope.moments.push($scope.moment);
        $scope.save();
    };

    $scope.save = function () {
        requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);
    };

    var fsReceived = function (fileSystem) {
        fileSystem.root.getFile('moments.json', { create: true, exclusive, false}, feReceived, errorHandler);
    };

    var feReceived = function (fileEntry) {
        fileSystem.createWriter(fwReceived, errorHandler);
    };

    var fwReceived = function (fileWriter) {
        var momentsText = angular.toJson($scope.moments);
        fileWriter.write(momentsText);
    };

    var errorHandler = function (error) {
        print ("ERREUR ADDMOMENT CONTROLLER\n");
    };
});