import React from 'react';

class SearchBar extends React.Component {

    /* this is for controlled event handler. */
    state = { term: "" };

    /* it is called whenever the input text is changed, which is callback function.
       event is JavaScript object, which has a bunch of information about the event.
       One of the properties we should take care of, is event.target.value
    */
    /*
    onInputChange(event) {
        console.log('onInputChange(): ', event.target.value);
    }
    */
    onInputClick(event) {
        console.log("onInputClick(): ", event.target.value);
    }

    componentDidMount() {
        console.log("My component was redered to the screen!");
    }

    componentDidUpdate() {
        console.log(
          "My component was just updated! - it is rerendered!"
        );
    }
    /*
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
    }
    */
    /* This function will be called, when user submits its input. */
    /* the following arrow function function will automatically bind 'this', so that
       this will indicate the 'SearchBar' React component.  */
    onFormSubmit = (event) => {
        /* This will disable defualt behavior of event handler, 
           which will refresh webpage whenever user submit its input. */
        event.preventDefault();
        /*  The following 'this' doesn't indicate 'SearchBar' React component itself.
            For onFormSubmit() is called by onSubmit pros, and 'this' of 'this.onForSubmit'
            doesn't indicate SearchBar class component anymore.
        */
        // console.log(this.state.term); 

        this.props.passingFromChildToParent(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                {/* We don't submit input value to backend server.    
                    Instead, we add event handler thru the props, 'onSubmit',
                    which is connected to callback function, onFormSubmit()
                */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* 'this' of this.onFormSubmit doesn't indicate SearchBar class component any
                    more. */}
                {/* the following arrow function will automatically bind this,
                    so that this will indicate the 'SearchBar' React Component.   
                <form onSubmit={ (e) => this.onFormSubmit(e) } className="ui form">  */}
                    <div className="field">
                        <label>Image Search</label>
                        {/* This is controlled event handler. 
                            Whenever input is changed, this.state.term is also changed. 
                            this props, 'value' will overwrite the input value
                        */}
                        <input  type="text"
                                value={this.state.term}
                                onChange={ (e) => this.setState({ term: e.target.value }) } 
                        />

                        {/* Instead of callback function name, we could have ES6 arrow 
                            callback function definition. 
                            We don't have to have seperate method in React class component.
                        */}
                        {/*
                        <input type="text" onChange={ (e) => console.log(e.target.value)} />    
                        */}
                        {/* We use onInputChange, rather than onInputChange(), which is 
                            callback function.
                            For we don't call onInputChange() whenver we render JSX. 
                            Instead, we just call onInputChange() in time in the future. 
                            We just pass the reference to this function to the input
                            element so that input can call this function at some point
                            in time in the future. 
                            The function is just called whenver input is changed. 
                            'onChange' is very important props, when it gets onInputChange as its value,
                            'onInputChange()' is called whenever input text is changed. 
                            But, these props work with only input JSX element, now with <div> or 
                            <p>, etc. 
                            We can change the name of callback function, but cannot the name of 
                            props, 'onChange', 'onClick', etc. */}
                        {/*    
                        <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>
                        */}
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;