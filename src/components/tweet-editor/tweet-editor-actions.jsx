import { emoji, gif, poll, media, schedule } from "../../tools/media";
import Icon from "../global/icon";

function TweetEditorActions() {
  let actions = [media, gif, poll, emoji, schedule];
  return (
    <div className="tweet-editor-actions flex items-center justify-start gap-5 cursor-pointer">
      {actions.map((icon, key) => (
        <div className=" p-1 mt-20 flex-col">
          <Icon key={key} src={icon} alt={key} />
        </div>
      ))}
    </div>
  );
}

export default TweetEditorActions;
