import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {appDirective} from './app.directive';
import {home} from './components/home/home';
import {war} from './components/clanwars/wars';
import {common} from './components/common/common';

angular.module('app', [
    uiRouter,
    home.name,
    war.name
])
.directive('app', appDirective);
