ngular
	.module('myApp')
	.factory('authService', authService);

authService.$inject = ['$cookies'];

function authService($cookies,$http,$location,$rootScope) {
		var service =  {
			setCookieData: setCookieData,
			clearCookieData: clearCookieData,
			getaccess_token:getaccess_token
		};

		return service;

		function setCookieData(data) {
				$cookies.put("group_id",data.group_id);
				$cookies.put("group_name",data.groupname);
				$cookies.put("access_token",data.token);
		}


		function getaccess_token() {
			var access_token=$cookies.get("access_token");
				return access_token;
		}

		function getgroup_id() {
			var group_id = $cookies.get("group_id");
			return group_id;
		}

		function getgroup_name(){
			var group_name = $cookies.get("group_name");
			return group_name;
		}

		function clearCookieData() {
				$cookies.remove("group_id");
				$cookies.remove("group_name");
				$cookies.remove("access_token");

		}



  }