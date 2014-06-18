var app = angular.module('index', [])
.controller('IndexController', function($scope){
     $scope.types = [{
        "name": "体育",
        "status": "",
        "show": false,
        "programs": [{
            "name": "世界杯 巴西 vs 克罗地亚",
            "time": "正在直播",
            "img": "img/sport/soccer.jpg",
            "type": "live"
        }, {
            "name": "NBA总决赛",
            "time": "8:00",
            "img": "img/sport//nba.jpg",
            "type": "big"
        }, {
            "name": "游泳世锦赛",
            "time": "19:00",
            "img": "img/sport//swim.jpg",
            "type": "small"
        }, {
            "name": "法国网球公开赛",
            "time": "21:00",
            "img": "img/sport/tennis.jpg",
            "type": "small"
        }, {
            "name": "NBA总决赛",
            "time": "8:00",
            "img": "img/sport//nba.jpg",
            "type": "big"
        }, {
            "name": "游泳世锦赛",
            "time": "19:00",
            "img": "img/sport//swim.jpg",
            "type": "small"
        }, {
            "name": "法国网球公开赛",
            "time": "21:00",
            "img": "img/sport/tennis.jpg",
            "type": "small"
        }]
    }, {
        "name": "综艺",
        "status": "",
        "show": false,
        "programs": [{
            "name": "世界杯 巴西 vs 克罗地亚",
            "time": "正在直播",
            "img": "img/sport/soccer.jpg",
            "type": "big"
        }, {
            "name": "NBA总决赛",
            "time": "8:00",
            "img": "img/sport//nba.jpg",
            "type": "small"
        }, {
            "name": "游泳世锦赛",
            "time": "19:00",
            "img": "img/sport//swim.jpg",
            "type": "small"
        }, {
            "name": "法国网球公开赛",
            "time": "21:00",
            "img": "img/sport/tennis.jpg",
            "type": "big"
        }, {
            "name": "NBA总决赛",
            "time": "8:00",
            "img": "img/sport//nba.jpg",
            "type": "big"
        }, {
            "name": "游泳世锦赛",
            "time": "19:00",
            "img": "img/sport//swim.jpg",
            "type": "small"
        }, {
            "name": "法国网球公开赛",
            "time": "21:00",
            "img": "img/sport/tennis.jpg",
            "type": "small"
        }, {
            "name": "世界杯 巴西 vs 克罗地亚",
            "time": "正在直播",
            "img": "img/sport/soccer.jpg",
            "type": "big"
        }]
    }, {
        "name": "游戏",
        "status": "",
        "show": false,
        "programs": [{
            "name": "世界杯 巴西 vs 克罗地亚",
            "time": "正在直播",
            "img": "img/sport/soccer.jpg",
            "type": "live"
        }, {
            "name": "NBA总决赛",
            "time": "8:00",
            "img": "img/sport//nba.jpg",
            "type": "big"
        }, {
            "name": "游泳世锦赛",
            "time": "19:00",
            "img": "img/sport//swim.jpg",
            "type": "small"
        }, {
            "name": "法国网球公开赛",
            "time": "21:00",
            "img": "img/sport/tennis.jpg",
            "type": "small"
        }, {
            "name": "NBA总决赛",
            "time": "8:00",
            "img": "img/sport//nba.jpg",
            "type": "big"
        }, {
            "name": "游泳世锦赛",
            "time": "19:00",
            "img": "img/sport//swim.jpg",
            "type": "small"
        }, {
            "name": "法国网球公开赛",
            "time": "21:00",
            "img": "img/sport/tennis.jpg",
            "type": "small"
        }]
    }]

    angular.forEach($scope.types, function(type){        
        angular.forEach(type.programs, function(program){
            program.color = ((Math.random() * 8) >> 0) + 1;
        })
    })

    $scope.click = function(tarType){        
        if(tarType.status === 'focus'){
            return;
        }

        angular.forEach($scope.types, function(type){
            if(type == tarType){
                type.status = 'focus';        
            }else{
                type.status = 'sub';
            }
        })
    }

    angular.element(document).ready(function(){
        angular.forEach(document.getElementsByClassName('type-wrap'), function(el, key){
            setTimeout(function(){
                angular.element(el).addClass('show');
            },100 * key);
        })
    })
})

function IndexController($scope) {   
    angular.element(document).ready(function(){
        angular.forEach($scope.types, function(type, key){
            setTimeout(function(){                
                type.show = true;
                console.log(type);
            },100 * key);
        })
    })
}


