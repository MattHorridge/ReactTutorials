import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard> 
                <CommentDetail author="Sam" timeAgo="Today at 3:00PM" text="Hello" avatar={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Tim" timeAgo="Today at 1:00PM" text="I smell" avatar={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Tam" timeAgo="Today at 11:00AM" text ="Test Message" avatar={faker.image.avatar()}/>
           </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));