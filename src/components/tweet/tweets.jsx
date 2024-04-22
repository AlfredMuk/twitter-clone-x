import { TweetContext } from "../../contexts/TweetsContext"
import Tweet from "./tweet"

import { useContext } from "react"
// let {tweets} = useContext(TweetContext);
// console.log(tweets);

function Tweets({data}) {

    
    let mediadata = Object.keys(data)
    return (
        <div className='tweets flex-start justify-start justify-space-between '>
            {mediadata.map((id, key) => { 
                const tweet = data[id]
                return (
                    <Tweet key={key} tweet={tweet} />
                )}
            )} 
        </div>
    )
  }

export default Tweets