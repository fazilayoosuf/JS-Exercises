//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
  

    var sortedLibrary=library.sort();
    console.log(sortedLibrary)

   function display(library){
    for (var i = 0; i < library.length; i++) 
    {
     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
     if (library[i].readingStatus) {
       console.log("Already read " + book);
     } else
     {
      console.log("You still need to read " + book);
     }
    }
   }
   display(library);