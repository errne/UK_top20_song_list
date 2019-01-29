
import React from 'react';
import Header from '../components/Header'

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs:data.feed.entry}))
  }


  render() {
    console.log(this.state);

    return(
      <div className="top20">
      <Header />
      </div>
    )
  }
}

export default MusicContainer;
