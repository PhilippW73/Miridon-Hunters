import React, { Component } from 'react';
import "./Image.css";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      img: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img id="imagesizing" src={imagePreviewUrl} />);
    }

    return (
      <div>
       
        {$imagePreview}
        

        { !this.props.img && (<form onSubmit={this._handleSubmit}>
                          <input type="file" onChange={this._handleImageChange} />
                          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                        </form>)
        }

        
        
        <div>
          {
            this.props.img && <img src={this.props.img} alt="picture"/>
          }
          
        </div>
      </div>
      
    )
  }

}

export default Image;
