
import React from 'react';
import Header from '../components/Header'
import SongList from '../components/SongList'

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    //fetch("https://rss.itunes.apple.com/api/v1/gb/itunes-music/new-music/heavy-metal/25/explicit.json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}))
  }


  render() {
    console.log(this.state);

    return(
      <div className="top20">
      <Header />
      <SongList songs={this.state.songs}/>
      </div>
    )
  }
}

export default MusicContainer;
