/* eslint react/no-did-mount-set-state:0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './movie';
import Overdrive from 'react-overdrive';
import { Poster } from './movie';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';


class MoviesDetail extends Component {
  state ={
    movie: {},
  }


  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movie = await res.json();
      // console.log(movies)
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    // let detail = (
    //   <h1>hi</h1>
    // );
    // if (this.state.movie.title) {
    //   detail = (
    //     <h1>hello</h1>
    //   );
    // }
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            {/* {this.state.movie.title && <h1>hello</h1>} */}
            {this.state.movie.title ? (<h1>hi</h1>) : (<h1>hello</h1>)}
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>

        </MovieInfo>
      </MovieWrapper>

    );
  }
}

export default MoviesDetail;

const MovieWrapper = styled.div`
    position:relative;
    padding-top:50vh;
    background-size:cover;
    background: url(${props => props.backdrop}) no-repeat;

`;

const MovieInfo = styled.div`
    background:white;
    text-align:left;
    padding:2rem 10%;
    display:flex;
    >div{
        margin-left:20px;
    }
    img{
        position:relative;
        top:-5rem;
    }
`;

