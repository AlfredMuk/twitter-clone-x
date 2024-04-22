import TweetAvatar from "./tweet-avatar"
import TweetContent from "./tweet-content"
function Tweet({tweet}) {

    return (
      <div className='tweet flex p-6'>
        <div className="w-30 h-20 p-6">
          <TweetAvatar avatar={tweet.avatar} />
        </div>
        <div className=" flex  ">
          <TweetContent tweet={tweet} />
        </div>
      </div>
    )
  }

export default Tweet