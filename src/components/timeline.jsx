
import Header from "./header/header"
import TweetEditor from "./tweet-editor/tweet-editor"
import Tweets from "./tweet/tweets"
import data from "../tools/data"

const {user, media} = data

function Timeline() { 
  return (
    <div className="flex-grow bg-black text-white">
      <Header />
      <TweetEditor profile={user.profile} />
      <Tweets data={media} />
    </div>
  )
}

export default  Timeline