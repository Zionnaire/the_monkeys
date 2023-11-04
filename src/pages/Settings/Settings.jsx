import React from 'react';
import Password from '../../components/Password/Password';
import Account from '../../components/Account/Account';
import Data from '../../components/Your Data/Data';
import Web from '../../components/Web/Web';
import Widgets from '../../components/Widgets/Widgets';
import Privacy from '../../components/Privacy/Privacy';
import Email from '../../components/Email/Email';
import Delete from '../../components/Delete Account/Delete'


import { useState, useEffect } from 'react';

export const Settings = () => {
  const componentsMap = {
    Account,
    Password,
    Data,
    Web,
    Widgets,
    Privacy,
    Email,
    Delete
    
    // Add other components as needed
  };

  const componentNames = ['Account', 'Password', 'Privacy and Safety', 'Email Notifications', 'Web Notifications', 'Widgets', 'Your Data', 'Delete Account'];
  const [selectedComponent, setSelectedComponent] = useState(componentNames[0]);

  const handleComponentClick = (item) => {
    setSelectedComponent(item);
  };

  const renderComponent = (name) => {
    switch (name) {
      case 'Account':
        return <Account />;
      case 'Password':
        return <Password />;
      case 'Your Data':
        return <Data />;
      case 'Web Notifications':
        return <Web />;
      case 'Widgets':
        return <Widgets />;
      case 'Privacy and Safety':
        return <Privacy />;
      case 'Email Notifications':
        return <Email />
      case 'Delete Account':
        return <Delete />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='w-full h-auto bg-blue-100 flex flex-wrap text-black justify-center items-center md:items-start py-10 px-5 md:px-0'>
        <div className="flex flex-col justify-center w-full md:w-[90%] items-center md:items-start">
          <div className="flex flex-col md:items-start w-full gap-2 py-2">
            <div className='mx-[30px] text-[25px] flex items-start justify-start'>Settings</div>
            <div className='w-full flex flex-col md:flex-row flex-1 justify-center items-center md:items-start gap-3 md:gap-1'>
            <div className="w-full flex flex-wrap md:w-[20%]  md:flex-col justify-center mx-0 md:mx-[30px] gap-[3px]">
                <div className="w-full text-[14px] px-3 py-2 md:text-[18px] whitespace-nowrap bg-white shadow-sm rounded-md">Profile Settings</div>
                {componentNames.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleComponentClick(item)}
                    className="flex justify-center items-center md:justify-start md:items-start text-[15px] whitespace-nowrap md:text-[15px] p-2 m-0 md:p-3 bg-white shadow-sm rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
  
              <div className='flex flex-col bg-white shadow-md w-full md:w-[70%] justify-center items-center m-0 md:mx-[30px] gap-3'>
                {renderComponent(selectedComponent)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};
