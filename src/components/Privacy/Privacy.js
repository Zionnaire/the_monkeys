import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

const Privacy = () => {
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [isPrivacySettingsEditable, setIsPrivacySettingsEditable] = useState(false);
  const [password, setPassword] = useState('********'); // Initial password value
  const [privacySettings, setPrivacySettings] = useState({
    enableTwoFactorAuth: true,
    showOnlineStatus: true,
    allowFriendRequests: true,
  });

  const handleEditClick = (field) => {
    switch (field) {
      case 'password':
        setIsPasswordEditable(!isPasswordEditable);
        break;
      case 'privacySettings':
        setIsPrivacySettingsEditable(!isPrivacySettingsEditable);
        break;
      default:
        break;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePrivacySettingsChange = (setting) => {
    setPrivacySettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const saveChanges = () => {
    // Save changes to privacy and safety settings
    console.log('Saving Privacy and Safety settings:', privacySettings);

    // Save changes to password (if needed)
    console.log('Saving password:', password);

    // Display alert
    alert('Privacy and Safety settings updated successfully!');
  };

  return (
    <div className="w-full sm:w-[80%] text-[15px] py-[50px] flex flex-col justify-start gap-3">
      <h2 className="text-[18px]">Privacy and Safety</h2>
      <div className="text-[12px] gap-2 flex flex-col">
        <div className='flex justify-between items-center w-full'>
          <h3 className={`text-[15px] ${isPasswordEditable ? 'border-b-2 border-blue-500' : ''}`}>
            {isPasswordEditable ? (
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            ) : (
              'Password: ********'
            )}
          </h3>
          <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('password')}><AiFillEdit/></div>
        </div>
        <div className='flex  flex-col justify-between  w-full'>
        <div className='w-full flex justify-between'>
        <h3 className='text-[15px]'>Privacy Settings:</h3>
          <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('privacySettings')}><AiFillEdit/>
          </div>
        </div>
       <div className='flex justify-between w-full'>
       <div className='flex flex-col gap-3'>
            <div className='flex items-center'>
              <input
                type="checkbox"
                id="twoFactorAuth"
                checked={privacySettings.enableTwoFactorAuth}
                onChange={() => handlePrivacySettingsChange('enableTwoFactorAuth')}
              />
              <label htmlFor="twoFactorAuth" className='ml-2'>Enable Two-Factor Authentication</label>
            </div>
            <div className='flex items-center'>
              <input
                type="checkbox"
                id="onlineStatus"
                checked={privacySettings.showOnlineStatus}
                onChange={() => handlePrivacySettingsChange('showOnlineStatus')}
              />
              <label htmlFor="onlineStatus" className='ml-2'>Show Online Status</label>
            </div>
            <div className='flex items-center'>
              <input
                type="checkbox"
                id="friendRequests"
                checked={privacySettings.allowFriendRequests}
                onChange={() => handlePrivacySettingsChange('allowFriendRequests')}
              />
              <label htmlFor="friendRequests" className='ml-2'>Allow Friend Requests</label>
            </div>
          </div>
          
       </div>
        </div>
      </div>
      <button
        type="button"
        onClick={saveChanges}
        className="w-full sm:w-[20%] whitespace-nowrap flex justify-center items-start py-[8px] sm:px-20 bg-blue-500 text-[10px] sm:text-[15px] text-white border-none rounded-md"
      >
        Save Changes
      </button>
    </div>
  );
};


export default Privacy;