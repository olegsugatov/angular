///////////////////// 18 http

var app = angular.module('app', []);
app.controller('mainCtrl', function ($http, $scope){
	// console.log('mainCtrl');
	$http.get('http://localhost:3001/books')
		.success(function (result) {
			console.log('sucess', result);
			$scope.books = result;
		})
		.error(function (result) {
			console.log('error');
		});

		$scope.addBook = function (book) {
			console.log(book);
			$http.post('http://localhost:3001/books', book)
				.success(function (result) {
					console.log('Book successfully saved to backend');
					$scope.books.push(book);
					$scope.book = null;
				})
				.error(function (result){
					console.log('Error in book post');
				});
		};
});

///////////////////// 17 transclude element

// var app = angular.module('app', []);

// app.directive('wrapIn', function () {
// 	return {
// 		transclude: 'element',
// 		link: function (scope, element, attrs, transclude) {
// 			var template = $templateCache.get(attrs.wrapIn);
// 			var templateElement = angular.element(template);
// 			console.log('wrapIn', templateElement);
			
// 			transclude(scope, function (clone) {
// 				element.after(templateElement.append(clone));
// 			});
// 		}
// 	};
// });



///////////////////// 16 isolated scope

/*var app = angular.module('app', []);

app.controller('firstCtrl', function($scope){
	$scope.name = 'Harry';
	$scope.color = '#333333';

	$scope.reverse = function (){
		$scope.name = $scope.name.split('').reverse('').join('');
	};
});

app.directive('fooBar', function(){
	return {
		scope: {
			name: '@',  	// read only
			color: '=', 	// bilateral data binding
			reverse: '&'	// make expression
		},
		template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>" + 
				  "<div>My color is {{color}} <input type='text' ng-model='color'></div>" +
				  "<button ng-click='reverse()'>Reverse</button>",
		link: function ($scope, $element, $attrs) {
			console.log('fooBar');
		}
	};
});*/

///////////////////// 15 scope: true

/*var app = angular.module('app', []);

app.controller('bookCtrl', function($scope) {
	$scope.name = 'Harry';
	console.log('scope from controller', $scope);
});
		// objects available in proto inheritance
		scope: true,
		template: "<div>My name is {{name}} <input type='text' ng-model='name'></div>",
		link: function(scope, element, attrs) {
			console.log('scope from directive', scope);
			console.log(scope.name);
		}
	}
});




///////////////////// 14 scope: fal

/*var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope){
	console.log('ctrl scope', $scope);
	$scope.posts = [
		{
			name: "This is post about cats"
		},
		{
			name: "This is post about dogs"
		}
	];

	$scope.getPosts = function(){
		return $scope.posts;
	};
});

app.directive('post', function (){
	return {
		// scope: false = controller scope
		scope: false,
		template: "<div ng-repeat='post in getPosts()'>{{post.name}}</div>",
		link: function(scope, element, attrs) {
			console.log('scope', scope);
		}
	};
});*/


///////////////////// 13 templateCache

/*var app = angular.module('app', []);

// run - is a function each start when app start, template cached on start
app.run(function($templateCache) {
	$templateCache.put('bookmarks.html', '<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>');
});

app.directive('fooBar', function($templateCache) {
	var BOOKMARKS = [
		{
			id: 1,
			name: 'EmberJS'
		},
		{
			id: 2,
			name: 'AngularJS'
		},
		{
			id: 3,
			name: 'Spring'
		}
	];
	return {
		restrict: 'E',
		templateUrl: 'bookmarks.html',
		link: function (scope, element, attrs) {
			console.log('directive');
			scope.bookmarks = BOOKMARKS;
			console.log($templateCache);
		}
	}
});



///////////////////// 12 TemplaterUrl in directives

/*var app = angular.module('app', []);

app.directive('fooBar', function() {
	var bookmarks = [
		{
			id: 1,
			name: 'EmberJS'
		},
		{
			id: 2,
			name: 'AngularJS'
		},
		{
			id: 3,
			name: 'Spring'
		}
	];
	return {
		restrict: 'E',
		templateUrl: 'bookmarks.html',
		link: function (scope, element, attrs) {
			console.log('directive');
			scope.bookmarks = bookmarks;
		}
	}
});*/



///////////////////// 11 Transclude in directives

/*var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
	$scope.name = "Bob";
});

app.directive('fooBar', function(){
	return {
		restrict: 'E',
		transclude: true,
		// template: 'Rewrite <ng-transclude></ng-transclude>',
		template: 'Rewrite',
		link: function(scope, element, attrs, ctrl, transclude) {
			console.log('beep!');
			transclude(scope, function(clone, scope){
				console.log('!', clone, scope);
				element.append(clone);
			});
		}
	};
});






///////////////////// 10 directive templates

/*var app = angular.module('app', []);

app.directive('fooBar', function (){
	var bookmarks = [
		{
			id: 1,
			name: 'AngularJS'
		},
		{
			id: 2,
			name: 'EmberJS'
		},
		{
			id: 3,
			name: 'ReactJS'
		},
	];
	return {
		template: "<div ng-repeat='bookmark in myBookmarks'>{{bookmark.name}}</div>",
		link: function(scope, elements, attrs){
			console.log('fooBar');
			scope.name = "Oleg";
			scope.myBookmarks = bookmarks;
		}
	};
});





///////////////////// 09 restrictions

/*var app = angular.module('app', []);

app.directive('fooBar', function(){
	return {
		restrict: 'EACM', // E - Element, A - Atribute, C - Class, M - comment
		link: function(){
			console.log('fooBar');
		}
	};
});*/






///////////////////// 08 filters

/*var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
	$scope.money1 = "1.22$";
	$scope.money2 = "$1.33";
	$scope.money3 = "4.43";
});

app.filter('moneyFilter', function(){
	return function(str){
		var lastChar = str.slice(-1),
		 	firstChar = str.slice(0,1),
		 	slicedPart;
		 if(lastChar === '$') {
		 	slicedPart = str.slice(0, str.length-1);
		 	return '$' + slicedPart;
		 } else if (firstChar === '$') {
		 	return str;
		 } else {
		 	return '$' + str;
		 }
	};
});*/





///////////////////// 07 simple directive

/*var app = angular.module('app', []);

app.directive('foo', function(){
	return {
		link: function(scope, element, attrs){
		element.on('click', function(){
			if(element.text()==="foo") {
				element.text('bar');
			} else {
				element.text('foo');
			}
		});
		  //console.log('This is my directive');
		  //console.log('scope', scope);
		  //console.log('element', element);
		  //console.log('attrs', attrs);
		  //element.text('This is my magic directive');
		}
	}
});

// short definition of directive
/*app.directive('foo', function(){
	return function(scope, elements, attrs){
		console.log('This is my directive');
	};
});*/





///////////////////// 06 controller as a syntax

/*var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
// app.controller('mainCtrl', function()
	this.myLesson = "Main_Lesson";

	this.addLesson = function () {
		console.log('addLesson');
	};
	// custom controller as syntax
	$scope.mainCtrl = this;
})

app.controller('firstCtrl', function(){
	this.myLesson = "First_Lesson";
})

app.controller('secondCtrl', function(){
	this.myLesson = "Second_Lesson";
})




///////////////////// 05 nested controllers

/*var app = angular.module('app', []); 

app.controller('myBooksCtrl', function($scope){
	$scope.showBook = function () {
		console.log('This is some book');
	};
});

app.controller('angularBookCtrl', function($scope){
	$scope.showBook = function () {
		console.log('This is angular book');
	};
});

app.controller('emberBookCtrl', function($scope){
	$scope.showBook = function () {
		console.log('This is ember book');
	};
});*/


//////////////// 04 custom methods in controller

/*var app = angular.module('app', []);
app.controller('methodCtrl', function($scope, myFactory) {
	$scope.method_hello = "Hello world!"; 

	$scope.myFactory = myFactory;

	$scope.getBookmark = function () {
		return "My bookmark";
	};
	
	$scope.setHello = function(text) {
		$scope.method_hello = text;
    };
});

// можно хранять функции фнутри фабрики и вызывать в любом контроллере
app.factory('myFactory', function () {
	return {
		hello: function () {
			return 'hello world!';       
		}
	}
});
*/


////////////////////// 03 sharing data b/ controller

/*var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
	console.log('firstCtrl');
	$scope.myFactory = myFactory;
	$scope.datas = 'hello world!';
});

app.controller('secondCtrl', function($scope, myFactory) {
	console.log('secondCtrl');
	$scope.myFactory = myFactory;
	$scope.datas = 'hello world!';
});

app.factory('myFactory', function() {
	return {
		datas: 'hello world!'
	};
});*/



//////////////////////// 02_controllers
/*var app = angular.module('app', []).controller('myCtrl', function ($scope) {
	$scope.hello = 55;
	$scope.myBook = 'AngularJS';
});*/
