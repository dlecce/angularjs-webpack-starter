import angular from 'angular';
import greeting from './greeting/greeting';

export default angular.module('directives', [])
    .directive('greeting', greeting)
    .name;