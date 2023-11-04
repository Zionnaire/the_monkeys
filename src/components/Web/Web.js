import React, {useState} from 'react';
import { MdNotifications } from 'react-icons/md';

const Web = () => {
    const [notifications, setNotifications] = useState([]);
  
    const showNotification = () => {
      if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            const newNotification = {
              id: Date.now(),
              title: 'New Web Notification',
              body: 'This is the content of the notification.',
            };
  
            // Add the new notification to the array
            setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
            
            // Display the native notification
            new Notification(newNotification.title, {
              body: newNotification.body,
            });
          }
        });
      }
    };
  
    return (
      <div className="w-full flex flex-col justify-center gap-2 web-notifications-container">
        <div
          onClick={showNotification}
          className="text-[50px] trigger-notification-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          <MdNotifications className="mr-2 " />
        </div>
  
        <div className="notifications-section">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item bg-gray-100 p-4 rounded-md mb-2">
              <p className="font-semibold">{notification.title}</p>
              <p>{notification.body}</p>
            </div>
          ))}
          {notifications.length === 0 && (
            <div className="placeholder-notification bg-gray-200 p-8 rounded-md text-center">
              <p>No notifications yet</p>
              {/* Add a placeholder image */}
              <img src="placeholder-image.png" alt="Placeholder" className="mt-4" />
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default Web;