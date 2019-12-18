import React from 'react';
import { ComponentWithData } from './ComponentWithData.js';
import { Table } from 'reactstrap';

class Results extends ComponentWithData {

    constructor(props){
        super(props);
         this.method = 'getData'
    }

    render() {
        const {data,error} = this.state;
        if(error) return this.renderError();
        if(!data.length) return this.renderLoading();


        const results = this.state.data.map((item) => (
            <tr key={item.id}>
                <td>{item.policy_ref}</td>
                <td>{item.advisor}</td>
                <td>{item.audit_comments}</td>
                <td>{item.fail_text}</td>
            </tr>
        ));

        return (
            <div>
                <Table dark bordered hover striped size="m">
                    <thead><tr>
                        <th>Policy Ref</th>
                        <th>Advisor</th>
                        <th>Comments</th>
                        <th>Fail Areas(Number of Occurrences</th>
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