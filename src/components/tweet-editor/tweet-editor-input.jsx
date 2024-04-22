function TweetEditorInput({placeholder}){
  return (
    <div >
      <textarea className='tweet-editor-input h-16 w-96 rounded outline-none text-base bg-black p-2.5 ' placeholder={placeholder}></textarea>
    </div>
  ); 
}

export default TweetEditorInput