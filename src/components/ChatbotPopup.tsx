import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-sm">Ask our AI about savings!</span>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">
              Hi! I'm your AI marketing assistant. How can I help you save on your roofing marketing today?
            </p>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;