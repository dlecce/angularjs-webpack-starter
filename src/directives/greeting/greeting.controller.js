import styles from './greeting.module.css';

const greetingController = ($scope) => {

    $scope.styles = styles;

    $scope.changeName = () => {
        $scope.name = 'world';
    };

};

export default greetingController;