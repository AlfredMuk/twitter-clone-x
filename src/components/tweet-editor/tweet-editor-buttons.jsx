import Button from "../global/button";
import TweetEditorActions from "./tweet-editor-actions";

function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons flex items-center justify-between bg-black">
      <TweetEditorActions />
      <div className=" flex capitalize p-4 rounded-full bg-blue-500">
        <Button value="Tweet" />
      </div>
    </div>
  );
}

export default TweetEditorButtons;
