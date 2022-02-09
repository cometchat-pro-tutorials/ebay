import { useContext } from "react";

import { CometChatUserListWithMessages } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";

import { Context } from "../../context/AppContext";

const Chat = () => {
  const { cometChat } = useContext(Context);

  return (
    <div className="chat__container">
      {cometChat && <CometChatUserListWithMessages />}
    </div>
  );
};
export default Chat;
