/**
 * This is the main controller for the app, used in index.html.
 *
 * @author  https://github.com/lukemcfarlane
 * @date    June 2014
 */
app.controller('mainCtrl', function($scope, $timeout) {
	// $scope.images = [
	// 	'http://metservice.com/IcePics/ob/249a-1467013bc00-1467016a2c9.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-146701a24a0-146701dcee6.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-146702177a0-1467024996b.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-1467027e040-146702b2949.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-146702f3340-14670325565.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-14670359be0-14670391fea.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-146703ceee0-146703ffde7.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-14670435780-1467046dbe5.ImgPlayerCHRISTCHURCH.jpeg',
	// 	'http://metservice.com/IcePics/ob/249a-146704aaa80-146704df433.ImgPlayerCHRISTCHURCH.jpeg'
	// ];

	$scope.images = [];

	$timeout(function() {
		$scope.images = [{
			url: 'http://metservice.com/IcePics/ob/249a-1467013bc00-1467016a2c9.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 1'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-146701a24a0-146701dcee6.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 2'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-146702177a0-1467024996b.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 3'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-1467027e040-146702b2949.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 4'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-146702f3340-14670325565.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 5'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-14670359be0-14670391fea.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 6'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-146703ceee0-146703ffde7.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 7'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-14670435780-1467046dbe5.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 8'
		}, {
			url: 'http://metservice.com/IcePics/ob/249a-146704aaa80-146704df433.ImgPlayerCHRISTCHURCH.jpeg',
			label: 'Img 9'
		}];
	}, 2000);
	// $scope.images = [];
});