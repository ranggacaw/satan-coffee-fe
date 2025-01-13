import React from 'react';
import { IoChatboxEllipses } from 'react-icons/io5';

const ChatButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="flex items-center px-4 py-2 bg-yellow-900 text-gray-300 rounded-full shadow-lg hover:bg-yellow-800">
        <IoChatboxEllipses className='mr-2'/>
        Chat with us!
      </button>
    </div>
  );
};

export default ChatButton;
