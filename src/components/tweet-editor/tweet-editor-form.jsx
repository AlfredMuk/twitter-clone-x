import TweetEditorInput from "./tweet-editor-input";
import TweetEditorButtons from "./tweet-editor-buttons";

function TweetEditorForm() {
  return (
    <div className="tweet-editor-form flex-auto w-64">
      <TweetEditorInput placeholder="What's happening" />
      <div className="flex-start -b-2 py-0 px-0 h-30 items-start justify-start">
        <TweetEditorButtons />
      </div>
    </div>
  );
}

export default TweetEditorForm;
