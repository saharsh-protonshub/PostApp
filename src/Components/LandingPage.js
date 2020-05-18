import React, {useEffect, useState} from 'react';
import {Api} from "../Providers/api";
import DataTable from 'react-data-table-component';
const api = new Api();
let page = 0;
const LandingPageComponent = (props) => {
    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'URL',
            selector: 'url',
            sortable: true,
        },
        {
            name: 'Created At',
            selector: 'created_at',
            sortable: true,
        },
        {
            name: 'Author',
            selector: 'author',
            sortable: true,
        },
    ];
    const [postArr, setPostArr]  = useState([]);

    useEffect(() => {
        getPost();
        setInterval(() => {
            page = page + 1
            getPost();
        }, 10000);
    }, []);

    /**
     * function to get the data from the api
     */
    const getPost = () => {
        const url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&page=' + page;
        api.getApi(url).then(res => {
            res.hits.map(item => (
                setPostArr(prevNotes => {
                    return [...prevNotes, item];
                })
            ))
        }).catch(err => {
            window.alert('Something went wrong please try later');
        });
    }
    return (
        <React.Fragment>
            <DataTable
                pagination={true}
                columns={columns}
                striped={true}
                pointerOnHover={true}
                data={postArr}
                paginationPerPage={20}
                fixedHeader={true}
                fixedHeaderScrollHeight="60vh"
                onRowClicked={(ev) => {
                    console.log(ev);
                    props.history.push({
                        pathname: '/postDetail',
                        search: '?query=' + ev.author,
                        state: { data: ev }
                    });
                }}
            />
        </React.Fragment>
    )
}
export default LandingPageComponent;
