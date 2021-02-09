import React from 'react';
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from '../actions';

class App extends React.Component {


  componentDidMount(){
    // make api call
    // dispatch action

    const {store} = this.props;

    store.subscribe(() => {
        console.log("UPDATE");
        this.forceUpdate();
    })

    store.dispatch(addMovies(data));  // function present in action

    console.log('State',this.props.store.getState());
  }
  
  render(){
    const { list } = this.props.store.getState(); //{list: [], favourite: []}
    console.log('RENDER',this.props.store.getState());
    return (
      <div className="App">
          <Navbar />
          <div className="main">

              <div className="tabs">
                  <div className="tab">
                    Movies
                  </div>
                  <div className="tab">
                    Favourites
                  </div>
              </div>

              <div className="list">
                  {list.map((movie,index) =>(
                    <MovieCard movie={movie} key={`movies-${index}`}/> // we'll be rendering movies over here via props.
                  ))}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
