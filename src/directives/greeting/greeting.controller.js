const greetingController = ($scope) => {

    $scope.changeName = () => {
        $scope.name = 'world';
    };

};

export default greetingController;