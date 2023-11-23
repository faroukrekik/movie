import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList";
import NavFilter from "./components/NavFilter";
import AddMovie from "./components/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

const films = [
  {
    id: Math.random(),
    imgUrl:
      "https://fr.web.img5.acsta.net/medias/nmedia/18/96/60/30/20478177.jpg",
    name: "Blue lAGOON",

    rating: 3,
    date: "2012",
    Description:
      "Participant à un projet humanitaire, Emma et Dean, deux lycéens, se dirigent en bateau vers les Caraïbes. Tombée accidentellement dans l'eau, Emma est sauvée par le jeune homme mais ils se retrouvent tous les deux à bord d'un canot de sauvetage, perdus au beau milieu de l'océan.",
    trailer: "https://www.youtube.com/embed/0pMqAbdvrfo?si=DCG7AND1I7N8lTHV",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://musicart.xboxlive.com/7/fd891100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    name: "SCREAM 4",
    rating: 4,
    date: "2011",
    Description:
      "Dix ans se sont écoulés depuis les terribles meurtres commis par Ghostface. Sidney Prescott est parvenue à tourner la page, mais c'est tout de même avec appréhension qu'elle retourne à Woodsboro pour le lancement de son premier roman.Ses retrouvailles avec sa cousine Jill ainsi qu'avec le duo de choc Dewey et Gale seront de courtes durées : Ghostface est de retour mais cette fois-ci les règles ont changé.",
    trailer: "https://www.youtube.com/embed/4xUlxMUD954?si=-ydLUYvKFPg5-EkC",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vRSdejdZ5_oQiszcDu3v4i7EbYDM_3_iUg&usqp=CAU",
    name: "JACK REACHER",
    rating: 5,
    date: "2013",
    Description:
      "Un ancien militaire et enquêteur creuse plus profondément les motifs d'un crime impliquant un tireur d'élite redoutable responsable d'une fusillade.",
    trailer: "https://www.youtube.com/embed/ZGFBa7Exr18?si=1KaBFCnBmKG92b-H",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCrGyi8PtNw1yzJvU1q9SW40tYHiiaSVXoNvN_CBP6GVxReL5T",
    name: "PIRATES OF THE CARIBBEAN 6",
    rating: 5,
    date: "2017",
    Description:
      "Jack Sparrow est confronté au redoutable Capitaine Salazar et ses pirates meurtriers; Jack Sparrow se retrouve dans le Triangle des Bermudes à la recherche du légendaire Trident de Poséidon, un puissant artéfact qui donne un pouvoir absolu sur les mers.",
    trailer: "https://www.youtube.com/embed/Hgeu5rhoxxY?si=kr_nvzeoyhBG84ic",
  },
];

function App() {
  const [movie, setMovie] = useState(films);
  const [search, setSearch] = useState("");
  const [starrate, setstarrate] = useState(1);

  const handleDelete = (Idfilm) => {
    setMovie(movie.filter((el) => el.id !== Idfilm));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleAdd = (newMovies) => {
    setMovie([...movie, newMovies]);
  };
  const handleRating = (x) => {
    setstarrate(x);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavFilter
          search={search}
          handleSearch={handleSearch}
          starrate={starrate}
          handleRating={handleRating}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                films={movie}
                del={handleDelete}
                search={search}
                starrate={starrate}
              />
            }
          />
          <Route path="/films/:id" element={<MovieDetails films={movie} />} />
        </Routes>
      </BrowserRouter>
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
