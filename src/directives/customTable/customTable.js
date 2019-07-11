import templateUrl from './customTable.template.html';
import controller from './customTable.controller';

const customTable = () => {
    return {
        restrict: 'E',
        scope: {
            title: '@'
        },
        templateUrl: templateUrl,
        controller: controller
    }
};

export default customTable;