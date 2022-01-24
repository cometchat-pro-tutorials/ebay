import { useState, useEffect, useContext } from 'react';

import { CometChatMessages } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';

import { Context } from '../../context/AppContext';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const ChatWithSeller = () => {
  const [seller, setSeller] = useState();

  const { cometChat } = useContext(Context);

  useEffect(() => {
    const seller = storageService.get(STORAGE_KEYS.SELLER);
    if (seller) { 
      setSeller(() => seller);
    }
  }, []);

  return (
    <div className="chat__container">
      {cometChat && seller && <CometChatMessages chatWithUser={seller} />}
    </div>
  );
};
export default ChatWithSeller;