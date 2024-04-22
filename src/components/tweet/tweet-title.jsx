import TweetTitleAuthor from './tweet-title-author'
import TweetTitleDetails from './tweet-title-details'

function TweetTitle({author,details}){

  return (
  <div className='tweet-title flex font-bold'>
    <TweetTitleAuthor author={author} />
    <TweetTitleDetails details={details} />
  </div>
)
}

export default TweetTitle