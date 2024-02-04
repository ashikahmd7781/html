const movies = require('../db/models/movies');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;         

//post

async function createMovie(req, res) {
    try {
        let moviename = req.body.moviename;
        let movietype = req.body.movietype;
        
        
        //validate
        let movieFound = await movies.findOne({moviename});

        if(movieFound) {
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        //Hashing password
        // let salt = await bcrypt.genSalt(10);
        // console.log("salt : ", salt);

        // let hashed_passed = bcrypt.hashSync(password, salt);
        // console.log("hashed password : ", hashed_passed);

        
        let new_movie = await movies.create({
            moviename,
            movietype,
        });

        if (new_movie) {
            let response_datas = {
                _id : new_movie.id,
                moviename : new_movie.moviename,
                movietype : new_movie.movietype,
            }
            console.log("new_movie : ", new_movie);
            let response = success_function({
                statusCode : 201,
                data : response_datas,
                message : "User created successfully",
            })
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode : 400,
                message : "User creation failed",
            })
            res.status(response.statusCode).send(response);
            return;
        }

    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : "Something went wrong",
        })
        res.status(response.statusCode).send(response);
        return;
    }

}

//get

async function getMovieData(req, res) {
    try {
        // Fetch all users from the database
        let allMovies = await movies.find({});

        if (allMovies.length > 0) {
            // Users found, send success response
            let response = success_function({
                statusCode: 200,
                data: allMovies,
                message: "All users retrieved successfully",
            });
            res.status(response.statusCode).send(response);
        } else {
            // No users found, send appropriate response
            let response = error_function({
                statusCode: 404,
                message: "No users found",
            });
            res.status(response.statusCode).send(response);
        }
    } catch (error) {
        console.log("error : ", error);
        // Handle any unexpected errors
        let response = error_function({
            statusCode: 500,
            message: "Internal server error",
        });
        res.status(response.statusCode).send(response);
    }
}


module.exports = {
    createMovie,
    getMovieData
}