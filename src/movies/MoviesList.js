/* eslint react/no-did-mount-set-state:0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './movie';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMovies} from './actions'


class MoviesList extends PureComponent {
   componentDidMount() {
    const{getMovies,isLoaded, moviesLoadedAt} = this.props
    const oneHour = 1000;
    if(!isLoaded || ((new Date())-moviesLoadedAt)>oneHour){
      getMovies()
    } 
  }

  render() {
    const{movies,isLoaded} = this.props
    if(!isLoaded)return <h1>loading</h1>
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </MovieGrid>

    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt:state.movies.moviesLoadedAt,

})


const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display:grid;
  padding:1rem;
  grid-template-columns:repeat(6,1fr);
  grid-row-gap:1rem;
`;

