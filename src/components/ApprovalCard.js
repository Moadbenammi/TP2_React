export default function ApprovalCard(props) {

    console.log(props.children);
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui basic green button'> Accorder </div>
        <div className='ui basic red button'> Refuser </div>
      </div>
    </div>
  );
}
