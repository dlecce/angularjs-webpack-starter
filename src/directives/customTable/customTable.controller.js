import faker from 'faker';
import styles from './customTable.module.css';

const customTableController = ($scope) => {

    $scope.styles = styles;

    $scope.rows = [];

    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(faker.helpers.createTransaction());
    }

    $scope.rows = array;

};

export default customTableController;