app.service('BookService', function ($http) {

    var self = this;


    self.addBook = function (title, author, isbn) {
        return $http({
            method: 'POST',
            url:  'book/add_book',
            data: {
                'title': title,
                'author' : author,
                'isbn' : isbn
            },
            headers: {'Content-type': 'application/json'}
        });
    };


    self.allBooks = function () {
        return $http({
            method: 'GET',
            url:'book/all_books',
            headers: {'Content-type': 'application/json'}
        });
    };


    self.deleteBook = function (book) {
        return $http({
            method: 'DELETE',
            url:'book/delete_book',
            data:book,
            headers: {'Content-type': 'application/json'}
        });
    };

});