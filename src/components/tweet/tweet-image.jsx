function TweetImage({src}){
  return (
    <div className='tweet-image justify-between'>
      <div className=" ">
        <div className="justify-center">
          <div className=" p-5">
          <img className="rounded-3xl w-120" src={src} ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetImage