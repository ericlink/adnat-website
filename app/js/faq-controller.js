'use strict';

function FaqCtrl($scope, Faq) {
    $scope.faqs = Faq.query();
}

function FaqCtrlEdit($scope, $location, $routeParams, Faq) {
    console.log('faq edit');
    console.log($routeParams.faqId);
    var self = this;

    $scope.faq = Faq.get({id: $routeParams.faqId}, function(faq) {
        self.original = faq;
        $scope.faq = new Faq(self.original);
    });


    $scope.isClean = function() {
        return angular.equals(self.original, $scope.faq);
    };

    $scope.destroy = function() {
        console.log('destroy');
        Faq.delete({id: $routeParams.faqId});
        $location.path('/faq');
// fixme callback?
//        self.original.destroy(function() {
//            $location.path('/faq');
//        });
    };
    $scope.save = function() {
        console.log('save');
        console.log($scope.faq);
        Faq.save($scope.faq);
        $location.path('/faq');
    };
}

function FaqCtrlNew($scope, $location, Faq) {
    console.log('faq new');
    $scope.save = function() {
        console.log('save');
        Faq.save($scope.faq);
        $location.path('/faq');
    };
}

//FaqCtrl.$inject = ['$scope', '$routeParams', 'Faq'];
