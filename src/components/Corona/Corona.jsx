import React, { Component } from 'react';
import './Corona.styles.scss';

class Corona extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "ba1be73e46msh7e8be5edb975e27p1de827jsn143dd57ca0bf"
	        }
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result.countries_stat
                })
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
        
    }

    render() {
        const { items } = this.state;

        return (
            <div className="corona-body">
                <h2>Current Total Statistics</h2>
                <table>
                    <thead className="table-head">
                        <td>Country</td>
                        <td className="cases-col">Cases</td>
                        <td className="deaths-col">Deaths</td>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.country_name}>
                                <td>{item.country_name}</td>
                                <td>{item.cases}</td>
                                <td>{item.deaths}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Corona;