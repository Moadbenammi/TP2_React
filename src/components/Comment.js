import fake from "faker";

export default function Comment({ author, date, content }) {

  console.log({ author: author, date: date, content: content });
  
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={fake.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {author}
        </a>
        <div className='metadata'>
          <span className='date'>{date}</span>
        </div>
        <div className='text'>{content}</div>
      </div>
    </div>
  );
}
