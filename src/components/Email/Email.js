import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';

const Email = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [receivedEmails, setReceivedEmails] = useState([]);

  const showNotification = () => {
    // Simulating receiving a new email
    const newEmail = {
      subject: 'New Email Received!',
      content: 'This is the content of the email...',
    };

    setReceivedEmails((prevEmails) => [...prevEmails, newEmail]);
    setNotificationVisible(true);

    // Auto-hide the notification after 3 seconds
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col justify-start p-5  email-notification-container">
      <MdEmail
        onClick={showNotification}
        className="flex email-notification-icon text-[50px] cursor-pointer text-blue-500 hover:text-blue-600 transition duration-300"
      />

      {isNotificationVisible && (
        <div className="email-notification bg-green-500 text-white py-2 px-4 rounded-md mt-2">
          <p>New Email Received!</p>
        </div>
      )}

      <div className="received-emails-container mt-4">
        {receivedEmails.length > 0 ? (
          receivedEmails.map((email, index) => (
            <div key={index} className="received-email bg-gray-100 p-4 rounded-md mb-2">
              <p className="font-semibold">{email.subject}</p>
              <p>{email.content}</p>
            </div>
          ))
        ) : (
          <div className="placeholder-email bg-gray-200 p-8 rounded-md text-center">
            <p>No emails received yet</p>
            <img src="placeholder-icon.png" alt="Placeholder" className="mt-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;