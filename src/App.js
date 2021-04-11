import ApprovalCard from "./components/ApprovalCard";
import Comment from "./components/Comment";
import people from "./people";

export default function App() {
  return (
    <div className='ui container comments'>
      {people.map((person,index) => (
        <ApprovalCard key={index}>
          <Comment
            author={person.author}
            date={person.date}
            content={person.content}
          />
        </ApprovalCard>
      ))}
    </div>
  );
}
