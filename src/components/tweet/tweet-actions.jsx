import {reply,retweet,share} from '../../tools/media'
import { react } from '../../tools/media'
import Icon from "../global/icon"


function TweetActions({data}){
  
  let actions = [[reply, data.reply], [retweet, data.retweet], [react, data.react], [share]]

  
  return (
    <div className='tweet-actions flex justify-space-between gap-28'>
      {actions.map((action, key) => (
       
          <div key={key} className='tweet-action  flex cursor-pointer justify-center pr-2'>

            <div className=' '>{action[1]||''}</div>

            <div className=' '>
              <Icon src={action[0]}   alt={key}/>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TweetActions