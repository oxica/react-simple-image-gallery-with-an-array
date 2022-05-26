import { Component } from 'react';
import img from './img.json';

class ImgGallery extends Component {
  render() {
    return (
      <>
        <center>
          <h1>Image gallery</h1>
          <div>
            {img.map(({ id, imgSrc }) => (
              <img
                key={id}
                src={imgSrc}
                alt="images1"
                height="250"
                style={{ border: 'solid' }}
              />
            ))}
          </div>
        </center>
      </>
    );
  }
}

export default ImgGallery;
