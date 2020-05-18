import React from 'react';
const TableRowComponent  = (props) => {
    return (
        <React.Fragment>
            <tr>
                <td>{props.data.title}</td>
                <td>{props.data.url}</td>
                <td>{props.data.created_at}</td>
                <td>{props.data.author}</td>
            </tr>
        </React.Fragment>
    )
}
export default TableRowComponent;
