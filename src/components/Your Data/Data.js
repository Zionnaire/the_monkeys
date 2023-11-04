import { useState } from 'react';
 import { AiFillEdit } from 'react-icons/ai';
 import profilePic from '../../images/Girl.png'

const Data = () => {
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isBioEditable, setIsBioEditable] = useState(false);
    const [isDobEditable, setIsDobEditable] = useState(false);
    const [isEmailEditable, setIsEmailEditable] = useState(false);
    const [newProfilePic, setNewProfilePic] = useState(null);
  
    const [userData, setUserData] = useState({
      name: 'John Judith',
      bio: 'My Bio',
      dob: 'Date of Birth: 10 / 12 / 1990',
      email: 'example@gmail.com',
    });
  
    const handleEditClick = (field) => {
      switch (field) {
        case 'name':
          setIsNameEditable(!isNameEditable);
          break;
        case 'bio':
          setIsBioEditable(!isBioEditable);
          break;
        case 'dob':
          setIsDobEditable(!isDobEditable);
          break;
        case 'email':
          setIsEmailEditable(!isEmailEditable);
          break;
        default:
          break;
      }
    };
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        setNewProfilePic(file);
      };
  
    const handleTextChange = (field, value) => {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [field]: value,
      }));
    };
  
    const handleBlur = (field) => {
      switch (field) {
        case 'name':
          setIsNameEditable(false);
          break;
        case 'bio':
          setIsBioEditable(false);
          break;
        case 'dob':
          setIsDobEditable(false);
          break;
        case 'email':
          setIsEmailEditable(false);
          break;
        default:
          break;
      }
    };
  
    const saveChanges = () => {
      // Save changes to localStorage or make an API call here
      console.log('Saving changes...');
    };
  
    return (
      <div className="w-full sm:w-[80%] text-[15px] py-[50px] px-5 flex flex-col justify-start gap-3">
        <h2 className="text-[18px]">User Data</h2>
        <div className="text-[12px] gap-2 flex flex-col">
          <div className="w-[14%] border-2 rounded-[50%] p-0 m-0 relative">
          <input
                type="file"
                id="profilePicInput"
                style={{ display: 'none' }}
                onChange={handleProfilePicChange}
              />
              <img
                src={newProfilePic ? URL.createObjectURL(newProfilePic) : profilePic}
                alt="profile picture"
                className="w-full h-full object-cover rounded-[50%]"
              />
            <div className='absolute top-0 right-0 border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('profilePic')}><AiFillEdit/></div>
          </div>
          <div className='flex justify-between items-center w-full'>
            <h3 className={`text-[18px] ${isNameEditable ? 'border-b-2 border-blue-500' : ''}`}>
              {isNameEditable ? (
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => handleTextChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                />
              ) : (
                userData.name
              )}
            </h3>
            <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('name')}><AiFillEdit/></div>
          </div>
          <div className='flex justify-between items-center w-full'>
            <h3 className={`text-[15px] ${isBioEditable ? 'border-b-2 border-blue-500' : ''}`}>
              {isBioEditable ? (
                <input
                  type="text"
                  value={userData.bio}
                  onChange={(e) => handleTextChange('bio', e.target.value)}
                  onBlur={() => handleBlur('bio')}
                />
              ) : (
                userData.bio
              )}
            </h3>
            <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('bio')}><AiFillEdit/></div>
          </div>
          <div className='flex justify-between items-center w-full'>
            <h3 className={`text-[15px] ${isDobEditable ? 'border-b-2 border-blue-500' : ''}`}>
              {isDobEditable ? (
                <input
                  type="text"
                  value={userData.dob}
                  onChange={(e) => handleTextChange('dob', e.target.value)}
                  onBlur={() => handleBlur('dob')}
                />
              ) : (
                userData.dob
              )}
            </h3>
            <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('dob')}><AiFillEdit/></div>
          </div>
          <div className='flex justify-between items-center w-full'>
            <h3 className={`text-[15px] ${isEmailEditable ? 'border-b-2 border-blue-500' : ''}`}> Email: {" "}
              {isEmailEditable ? (
                <input
                  type="text"
                  value={userData.email}
                  onChange={(e) => handleTextChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                />
              ) : (
                userData.email
              )}
            </h3>
            <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('email')}><AiFillEdit/></div>
          </div>
        </div>
        <button type="button" onClick={saveChanges} className="w-full sm:w-[20%] whitespace-nowrap flex justify-center items-start py-[8px] sm:px-20 bg-blue-500 text-[10px] sm:text-[15px] text-white border-none rounded-md">Save Changes</button>
      </div>
    );
}
export default Data;