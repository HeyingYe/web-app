var login = angular.module("login",["globalApp"]);

login.controller("mLogin",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
    $http.get(baseUrl + "/login").success(function(res){
        $scope.data = res;//存储数据
        //console.log($scope.data)
        mui.init();
        var loginButton = document.getElementById('login');
        var accountBox = document.getElementById('account');
        var passwordBox = document.getElementById('password');
        var autoLoginButton = document.getElementById("autoLogin");
        var regButton = document.getElementById('reg');
        var forgetButton = document.getElementById('forgetPassword');
        loginButton.addEventListener('tap', function(event) {
            var loginInfo = {
                account: accountBox.value,
                password: passwordBox.value
            };
            //console.log(loginInfo)
            //console.log(loginInfo.account)
            if ((loginInfo.account.length==0) || (loginInfo.password.length ==0)) {
                alert('帐号和密码不能为空');
            }else{
                for(var i=0;i<$scope.data.users.length;i++){
                    if ($scope.data.users[i].name == accountBox.value && $scope.data.users[i].psw == passwordBox.value) {
                        alert('登录成功');
                        break;
                    }else if (($scope.data.users[i].name != accountBox.value || $scope.data.users[i].psw != passwordBox.value) && i==$scope.data.users.length-1) {
                        alert('帐号或密码错误');
                    }
                }
            }
        })
        forgetButton.addEventListener('tap',function(event){
            location.href = baseUrl+"/reg/reg.html";
        })
        regButton.addEventListener('tap',function(event){
            location.href = baseUrl+"/reg/reg.html";
        })
    })
}])