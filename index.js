document.addEventListener('DOMContentLoaded',function(){ 
   
    function currentMovie(movieData){
        console.log("loading in movie data")
          return `
          
          `
         
     }
   






   
    function renderMovies(movieArray){

        console.log("dedans la fonction << rendermovies")

        return movieHTML = movieArray.map(currentMovie).join('')
       
    }
});
console.log("l'exterieur de la fonction << rendermovies >>")

