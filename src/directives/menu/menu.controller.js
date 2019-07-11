import styles from './menu.module.css';

const menuController = ($scope) => {

    $scope.styles = styles;

    $scope.links = [
        {href: '/greeting.html', title: 'Greeting'},
        {href: '/customTable.html', title: 'Custom Table'}
    ];

};

export default menuController;