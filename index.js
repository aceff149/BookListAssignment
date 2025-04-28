const books = [ 
    { 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      image: "https://ia600100.us.archive.org/view_archive.php?archive=/5/items/l_covers_0012/l_covers_0012_36.zip&file=0012364437-L.jpg"
    }, 
    { 
      title: "1984", 
      author: "George Orwell", 
      image: "https://covers.openlibrary.org/b/id/14845126-L.jpg" 
    }, 
    { 
      title: "Pride and Prejudice", 
      author: "Jane Austen", 
      image: "https://covers.openlibrary.org/b/id/14858485-L.jpg" 
    }, 
    { 
      title: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      image: "https://covers.openlibrary.org/b/id/14856323-M.jpg" 
    }, 
    { 
      title: "Moby Dick", 
      author: "Herman Melville", 
      image: "https://ia800505.us.archive.org/view_archive.php?archive=/5/items/m_covers_0012/m_covers_0012_62.zip&file=0012621992-M.jpg" 
    } 
  ]; 
  function fetchBooks () {
    let promiseFetchBooks = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve (books)
      }, 3000);  
    })
    return promiseFetchBooks
  }
  fetchBooks()
  .then((arrBooks)=>{
    arrBooks.forEach(book => {
      let newHeading = document.createElement ("h3")
      newHeading.innerText = book["title"]
      document.getElementById ("BookList").append (newHeading)

      let newParagraph = document.createElement ("p")
      newParagraph.innerText = book["author"]
      document.getElementByID ("BookList").append (newParagraph)
      
      let newImage = document.createElement ("img")
      newImage.src = book["image"]
      document.getElementByID ("BookList").append (newImage)
    });
  })

  .catch ((error)=>console.log (error))