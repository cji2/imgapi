import React from 'react';
/* axios is used to request splash API */
//import axios from "axios";
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    /* We initialize the image property of state as empty array. 
       So, it could work with JavaScript method, map() 
       before we get images from API server.   */
    state = { images: [] };
    
    componentDidMount() {
        this.onSearchSubmit('worldwide best beautiful houses');
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
                params: { query: term }
            }
        );
        //console.log(response.data.results);
        //console.log(this);
        this.setState({ images: response.data.results });
    }

    /*
    onSearchSubmit = async (term) => {
        const response = await axios.get(
            "https://api.unsplash.com/search/photos", {
                params: { query: term },
                headers: {
                    Authorization:
                    "Client-ID 643433a97920869789cae69e46b76b94ab30aaf5a79de865989a1153ed3c3e45"
                }
            }
        );
        //console.log(response.data.results);
        console.log(this);
        this.setState({ images: response.data.results });
    }
    */
    /*
    async onSearchSubmit(term) {
        const response = await axios.get(
            "https://api.unsplash.com/search/photos", {
                params: { query: term },
                headers: {
                    Authorization:
                    "Client-ID 643433a97920869789cae69e46b76b94ab30aaf5a79de865989a1153ed3c3e45"
                }
            }
        );
        //console.log(response.data.results);
        console.log(this);
        this.setState({ images: response.data.results });
    }
    */

    /*
    onSearchSubmit(term) {
        //console.log(term);
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization:
                "Client-ID 643433a97920869789cae69e46b76b94ab30aaf5a79de865989a1153ed3c3e45"
          }
        })
        /* the request of API is answered by response callback function,
           which can be retrieved by response.data.results  */ /*
        .then(response => {
            console.log(response.data.results);
        });
    }
    */
    
    componentDidUpdate() {

    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                {/* 'this' is the props object   */}
                {/* the following arrow function will automatically bind this,
                    which will indicate App.js React component.  */}
                <SearchBar 
                    passingFromChildToParent={ this.onSearchSubmit } 
                    guessWhatIam="I'm the props object" 
                /> 
                <br />
                Found: {this.state.images.length} images
                <br />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;