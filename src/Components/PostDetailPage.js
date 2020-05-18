import React from 'react';
const PostDetailPage = (props) => {
    return (
        <div>
            {JSON.stringify(props.location.state.data)}
        </div>
    )
}
export default PostDetailPage;
