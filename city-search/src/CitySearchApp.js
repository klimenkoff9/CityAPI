import React, {Component} from 'react';
import axios from "axios";

class CitySearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cityValue: '', locations: []};
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({cityValue : e.target.value.toUpperCase()});
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        const link = "http://ctp-zip-api.herokuapp.com/city/" + this.state.cityValue;
        try {
            let response = await axios.get(link);
            this.setState({locations: response.data});
            console.log(this.state.locations);
        } catch(error) {
            console.error(error);
        } finally {
            console.log(this.state.locations);
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter City:
                        <input type="text" value={this.state.cityValue} onChange={this.handleChange} placeholder="City Name" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
                <ul>
                    {this.state.locations.map((location) => <li>{location}</li>)}
                </ul>
            </div>
        );
    }
}

export default CitySearchApp;
