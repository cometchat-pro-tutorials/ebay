import { useContext } from "react";

import { CometChatConversationListWithMessages } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

import { Context } from "../../context/AppContext";

const Chat = () => {
  const { cometChat } = useContext(Context);

  return (
    <div className="chat__container">
      {cometChat && <CometChatConversationListWithMessages />}
    </div>
  );
};
export default Chat;
