import React from 'react';
import { ComponentWithData } from './ComponentWithData.js';
import { Table } from 'reactstrap';

class Results extends ComponentWithData {

    constructor(props){
        super(props);
         this.method = 'getData';

         this.state = {
             data: this.state.data,
             error: this.state.error,
             advisor: 'All'
         }

    }

    handleChange = (event) => {
        this.setState({ advisor: event.target.value });
    }    

    render() {
        if(this.state.error) return this.renderError();
        if(!this.state.data.length) return this.renderLoading();

        var advisors = []

        this.state.data.forEach(obj => {
            if(advisors.indexOf(obj.advisor) === -1){
                advisors.push(obj.advisor)
            }
        });

        var table = this.state.data.filter(obj => {
            if(this.state.advisor === 'All'){
                return obj.advisor;
            } else{
                return obj.advisor === this.state.advisor;
            }
        });

        const advisor = advisors.map((item) =>(
            <option value={item}>{item}</option>
        ));

        const results = table.map((item) => (
            <tr key={item.id}>
                <td>{item.policy_ref}</td>
                <td>{item.advisor}</td>
                <td>{item.audit_comments}</td>
                <td>{item.fail_text}</td>
                <td>{((item.pass.split('", "').length / (item.pass.split('", "').length + item.fail.split('", "').length)) * 100).toFixed(2)}%</td>
            </tr>
        ));

        return (
                <div>
                    <div id="advisordiv">
                        <select id="advisors" onChange={this.handleChange}>
                        <option value="choose" disabled selected>Choose an Advisor</option>
                        {advisor}
                    </select>
                </div>
                <Table dark bordered hover striped size="m">
                    <thead><tr>
                        <th style={{width: '10%'}}>Policy Ref</th>
                        <th style={{width: '10%'}}>Advisor</th>
                        <th style={{width: '30%'}}>Comments</th>
                        <th style={{width: '30%'}}>Fail Areas(Number of Occurrences</th>
                        <th style={{width: '20%'}}>EQ Score</th>
                    </tr></thead>
                    <tbody>
                        {results}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Results;