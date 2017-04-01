var reg = angular.module("reg", ["globalApp"]);

reg.controller("mReg", ["$scope", "$http", "baseUrl", function($scope, $http, baseUrl) {

    mui.init();
    var settings = app.getSettings();
    var regButton = document.getElementById('reg');
    var accountBox = document.getElementById('account');
    var passwordBox = document.getElementById('password');
    var passwordConfirmBox = document.getElementById('password_confirm');
    var emailBox = document.getElementById('email');
    regButton.addEventListener('tap', function(event) {
        var name = accountBox.value;
        var password = passwordBox.value;
        var email = emailBox.value;
        //console.log(name,password,email);

        if(accountBox.value.length == 0 || passwordBox.value.length == 0 || passwordConfirmBox.value.length == 0 || emailBox.value.length == 0){
                alert("不能为空，请重新输入！");
        }else if (passwordConfirmBox.value != passwordBox.value) {
                alert('密码两次输入不一致');
            } else {
                $http({
                    url:baseUrl+'/reg',
                    data: {
                        userName: name,
                        passWord: password,
                        email: email
                    },
                    method:'post'
                }).success(function(data){
                    if(  data.length > 0){

                        alert(data);
                    }else{
                        alert("注册成功");
                        location.href = baseUrl+"/login/login.html";
                    }

                })
        }  
    });

}])
