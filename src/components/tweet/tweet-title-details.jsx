function TweetTitleDetails({details}){

  return (
    <span className='tweet-title-details text-sm'>@{details.nickname} . {details.time}</span>
)
}

export default TweetTitleDetails