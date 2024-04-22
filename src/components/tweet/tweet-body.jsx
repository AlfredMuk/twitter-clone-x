import TweetTitle from './tweet-title'
import TweetText from './tweet-text'
import TweetImage from './tweet-image'
import TweetActions from './tweet-actions'
import { Link } from 'react-router-dom'

function TweetBody({tweet}) {
    const title = tweet.title
    const data = tweet.data

    const userId = (title.author)
    
    console.log(userId);
    return (
        <div className='tweet-body'>
            <Link to={`/profile/${userId}`}>
            <TweetTitle author={title.author} details={title.details}/>
            </Link>
            <TweetText text={tweet.text}/>
            {tweet.image && <TweetImage src={tweet.image} />}
            <TweetActions data={data}/>
        </div>
    )
  }

export default TweetBody