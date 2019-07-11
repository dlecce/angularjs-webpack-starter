import templateUrl from './menu.template.html';
import controller from './menu.controller';

const menu = () => {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: templateUrl,
        controller: controller
    }
};

export default menu;