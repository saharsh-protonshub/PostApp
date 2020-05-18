import React, {useEffect, useState} from 'react';
import {Api} from "../Providers/api";
import TableRowComponent from "./tableRowComponent";
import Pagination from "react-js-pagination";
const api = new Api();
require("bootstrap/less/bootstrap.less");
const LandingPageComponent = () => {
    const [pageCount, changePageCount]  = useState(0);
    const [postArr, setPostArr]  = useState([]);
    const [apiData, setApiData] = useState({});
    useEffect(() => {
        getPost();
        setInterval(getPost, 10000);
    }, []);

    const getPost = () => {
        const url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&page=' + pageCount;
        api.getApi(url).then(res => {
            console.log(res);
            setApiData(res);
            res.hits.map(item => (
                // setPostArr([...postArr  , item])
                setPostArr(prevNotes => {
                    return [...prevNotes, item];
                })
            ))
            changePageCount((pageCount) => {
                return pageCount + 1
            });
            console.log(pageCount);
        }).catch(err => {
            console.error(err);
        });
    }
    return (
        <div>
            <table border={1}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Url</th>
                    <th>Created At</th>
                    <th>Author</th>
                </tr>
                </thead>
                <tbody>
                { postArr.map((item, index) => (
                    <TableRowComponent key={index} data={{
                        url: item.url,
                        title: item.title,
                        created_at: item.created_at,
                        author: item.author
                    }}/>
                ))
                }
                </tbody>
            </table>
            <Pagination
                activePage={pageCount}
                itemsCountPerPage={apiData.hitsPerPage}
                totalItemsCount={apiData.nbPages}
                pageRangeDisplayed={5}
                onChange={() => {
                    changePageCount((pageCount) => {
                        return pageCount + 1
                    });
                    console.log(pageCount);
                }}
            />
        </div>
    )
}
export default LandingPageComponent;
