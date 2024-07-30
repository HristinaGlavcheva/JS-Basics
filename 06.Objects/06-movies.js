function showMovies(inputLines){
   
    let movies = [];

    for(let commandLine of inputLines){
        let commandArgs = commandLine.split(' ');

        if(commandArgs.includes('addMovie')){
            let nameArray = commandArgs.slice(1, commandArgs.length);
            let name = nameArray.join(' ');
            let movie = {name};
            movies.push(movie);
        } else if (commandArgs.includes('directedBy')){
            let movieInfo = commandLine.split(' directedBy ');
            
            let movieName = movieInfo[0];
            let directedBy = movieInfo[1];

            let movie = movies.find(function(m){
                return m.name === movieName;
            })

            if(movie){
                movie.director = directedBy;
            }
        } else if (commandArgs.includes('onDate')){
            let movieInfo = commandLine.split(' onDate ');
            
            let movieName = movieInfo[0];
            let date = movieInfo[1];

            let movie = movies.find(function(m){
                return m.name === movieName;
            })

            if(movie){
                movie.date = date;
            }
        }
    }

    for(let movie of movies){
        if(movie.name !== undefined && movie.director !== undefined && movie.date !== undefined){
            let movieAsJson = JSON.stringify(movie);
            console.log(movieAsJson);
        }
    }
}

showMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);