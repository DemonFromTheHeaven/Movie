import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Moviecard from "./moviecard";

const api_url = "http://www.omdbapi.com/?apikey=60227ef7";

function App() {
	const [movies, setmovies] = useState([]);
	const [search, setsearch] = useState();

	const searchmovie = async (title) => {
		const response = await fetch(`${api_url}&s=${title}`);
		const data = await response.json();
		setmovies(data.Search);
		console.log(data.Search);
	};

	useEffect(() => {
		searchmovie(search);
	}, [search]);

	return (
		<div className="app">
			<h1>Dinesh Dai ko Movie Site</h1>
			<div className="search">
				<input
					type="text"
					placeholder="Search Gara yo thau ma...."
					onChange={(e) => {
						setsearch(
							e.target
								.value
						);
					}}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => {
						searchmovie(search);
					}}
				/>
			</div>
			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie) => (
						<Moviecard
							movie={
								movie
							}
						/>
					))}
				</div>
			) : (
				<div>
					<h3>No Movies Found</h3>
				</div>
			)}
		</div>
	);
}

export default App;
