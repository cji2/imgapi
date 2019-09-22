import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        /* not React, but JavaScript event listener can be added to prevent 
           React from getting zero value of height. 
           'load': not only HTML is loaded, but also all the external resources: 
           images, styles etc.*/
        this.imageRef.current.addEventListener('load', this.setSpans);
        /* we can the value of clientHeight, zero.
	       For when React the render JSX firstly, data from unsplash API server
	       is not fetched, yet. */
        //console.log(this.imageRef);
        //console.log(this.imageRef.current.clientHeight);
    }

    /* the value of grid-row-end in ImageLIst.css file, makes the value of span,
       which is determined by the height of picture. */
    setSpans = () => {
        //console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    }

    componentDidUpdate() {

    }

    render() {
        /* de-structuring the props of <img />  */
        const { alt_description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        );
    }
    /*
    render() {
        return (
            <div>
                <img 
                    alt={this.props.image.alt_description} 
                    src={this.props.image.urls.regular}
                />
            </div>
        );
    }
    */
}

export default ImageCard;