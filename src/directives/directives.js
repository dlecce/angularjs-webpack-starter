import angular from 'angular';
import greeting from './greeting/greeting';
import customTable from './customTable/customTable';
import menu from './menu/menu';

export default angular.module('directives', [])
    .directive('greeting', greeting)
    .directive('customTable', customTable)
    .directive('menu', menu)
    .name;