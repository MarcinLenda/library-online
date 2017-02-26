
app.controller('BookCtrl', ['$scope','$location','$route', 'BookService', function ($scope, $location,$route, BookService) {

    $scope.emptyList = false;
    $scope.valid = false;
    $scope.errorLetter = false;


    $scope.reloadRoute = function () {
        $route.reload();
    };


    $scope.addNewBook = function (title, author, isbn) {

        if(title.charAt(0) == title.charAt(0).toLowerCase() || author.charAt(0) == author.charAt(0).toLowerCase()){
            $scope.errorLetter = true;
        }else{
            $scope.valid = true;
        }

        if($scope.valid) {
            $scope.errorLetter = false;
            BookService.addBook(title, author, isbn)
                .then(function successCallback(response) {
                    console.log('Added new book');
                    $location.path("/all_books");
                }, function errorCallback(response) {
                    console.log('Error: added new book');
                });
        }
    };


    $scope.deleteBook = function (book) {

        BookService.deleteBook(book)
            .then(function successCallback(response) {
                console.log('Delete book');
                $scope.reloadRoute();

            }, function errorCallback(response) {
                console.log('Error: delete books');

            });
    };


    BookService.allBooks()
        .then(function successCallback(response) {
            $scope.books = response.data;

            if(response.data.length == 0){
                $scope.emptyList = true;
            }

        }, function errorCallback(response) {
            console.log('Error: all books');
        });

}]);
