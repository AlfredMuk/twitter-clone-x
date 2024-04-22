import ProfilePhoto  from "../global/profile-photo"
function TweetAvatar({avatar}) {
    return (
        <div className='tweet-avatar flex-shrink-0 w-20 h-10 gap-1 '>
          <ProfilePhoto src={avatar} />
        </div>
    )
}


export default TweetAvatar