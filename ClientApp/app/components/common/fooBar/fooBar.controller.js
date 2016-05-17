
export class FooBarController {
    constructor($scope){
        this.count = $scope.$parent.vm.count || 0;
    }

    controlClick(){
        this.count = this.count + 1;
    }
}


