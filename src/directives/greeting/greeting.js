import templateUrl from './greeting.template.html';
import controller from './greeting.controller';

const greeting = () => {
    return {
        restrict: 'E',
        scope: {
            name: '@'
        },
        templateUrl: templateUrl,
        controller: controller
    }
};

export default greeting;