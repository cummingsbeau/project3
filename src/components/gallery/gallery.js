import React, { Component } from 'react';
class Gallery extends Component {

    render() {
      return (
        <div>
        {this.props.Results.map( (item, index) => {
            let { Name } = item.songInfo;
            return (
              <a
                key={index}
                className="song"

                target="_blank"
                rel="noopener"
                >
                <header className="songTitle">
                  {Name}
                </header>
              </a>
            )
          })
        }</div>
      )
    }
  }
  
  export default Gallery;