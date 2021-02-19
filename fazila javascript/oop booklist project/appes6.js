class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{

    addBookToList(book){

         // add book to list
    
        const list = document.getElementById('book-list');
        // create tr element
        const row = document.createElement('tr');
        
        // insert cols
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>`;

        list.appendChild(row);
      
    
    }

    showAlert(message,className){

        // create div
        const div =document.createElement('div');
        // Add classes
        div.className =` alert ${className}` ;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get Parent
        const container =document.querySelector('.container');

        //get form
        const form = document.querySelector('#book-form');

        container.insertBefore(div,form);
        
        // timeout after 3 seconds

        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)


    

    }
    deleteBook(target){

        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }

    }
     clearFields(){

        document.getElementById('title').value="";
        document.getElementById('author').value="";
        document.getElementById('isbn').value="";
   
     }
}


//Local storage class

class Store{
    
     static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        } else {
            books=JSON.parse(localStorage.getItem('books'));
        }

        return books;

    }
   static  displayBooks(){

    const books = store.getBooks();

    books.forEach(function(book){

        const ui =new UI();

        ui.addBookToList(book);
    })

    }
    static addBooks(book){

        const books=Store.getBooks();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }
     static removeBooks(isbn){

        const books=Store.getBooks();
        bools.forEach(function(book){
        if(book.isbn === isbn){
            books.splice(index,1)

        }

    });
    localStorage.setItem('books',JSON.stringify(books));

    }
}

// DOM Load Event

document.addEventListener('DOMContentLoaded',Store.displayBooks)

// Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    // Get form Values
     const title = document.getElementById('title').value;
           author = document.getElementById('author').value;
           isbn =  document.getElementById('isbn').value;
    // instantiate book
     const book =new Book(title,author,isbn);
     
 
     // instantiate UI
 
     const ui =new UI();
 
     //validate 
 
     if(title==='' || author ==='' || isbn===''){
         ui.showAlert('please fill in all fields','error')
     }else{
 
     //Add book to list
 
     ui.addBookToList(book);

     // add book to LS

     Store.addBooks(book);
 
     ui.showAlert('Book Added Successfully','success');
     }
     // clear fields
 
     ui.clearFields();
 
         
           e.preventDefault();
 
 });
 
 
 // Event Listener for Delete
 
 document.getElementById('book-list').addEventListener('click',function(e){
 
     // Instantiate UI
 
     const ui = new UI();
 
     //delete book
 
     ui.deleteBook(e.target);

     // delete from LS

     Store.removeBooks(e.target.parentElement.previous)
 
     // show message 
 
     ui.showAlert("Book deleted succesfully",'success');
 
     e.preventDefault();
 })