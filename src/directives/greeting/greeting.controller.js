import styles from './greeting.module.css';

const greetingController = ($scope) => {

    $scope.styles = styles;

    console.log(styles);

    $scope.changeName = () => {
        $scope.name = 'world';
    };

};

export default greetingController;