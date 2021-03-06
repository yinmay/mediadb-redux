/* eslint react/no-did-mount-set-state:0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './movie';
import Overdrive from 'react-overdrive';
import { Poster } from './movie';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMovie, resetMovie} from './actions'


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';


class MoviesDetail extends Component {
 componentDidMount() {
      const{getMovie, match} = this.props
        getMovie(match.params.id)
    }
componentWillUnmount() {
      resetMovie()
    }


  render() {
    const { movie } = this.props;
    if(!movie.id)return null
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            {/* {this.state.movie.title && <h1>hello</h1>} */}
            {/* {movie.title ? (<h1>hi</h1>) : (<h1>hello</h1>)} */}
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>

        </MovieInfo>
      </MovieWrapper>

    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded,

})


const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovie,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetail);



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

