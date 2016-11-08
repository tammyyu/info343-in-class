import React from "react";

const BASE_URL = "http://image.tmdb.org/t/p/w154";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        var img_url = BASE_URL + this.props.movie.poster_path;
        return (
            <div>
                <img src={img_url}/>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.overview}</p>
            </div>

        )
    }
}