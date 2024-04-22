import ProfilePhoto from "../global/profile-photo";
import TweetEditorForm from "./tweet-editor-form";
function TweetEditor({ profile }) {
  return (
    <div className="tweet-editor flex border-b-1 items-start justify-start gap-5 pb-1 ">
      <div className="max-w-24  max-h-24 ">
        <div >
        <ProfilePhoto src={profile} />
        </div>
      </div>
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
