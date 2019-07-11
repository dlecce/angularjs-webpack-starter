import styles from './customTable.module.css';

const customTableController = ($scope) => {

    $scope.styles = styles;

    $scope.rows = [];

    function getVendor() {
        return import(/* webpackChunkName: "faker" */ 'faker').then(({default: faker}) => {
            return faker;

        }).catch(error => 'An error occurred while loading the component');
    }

    getVendor().then(faker => {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(faker.helpers.createTransaction());
        }

        $scope.$apply(function(){
            $scope.rows = array;
        });
    });

};

export default customTableController;