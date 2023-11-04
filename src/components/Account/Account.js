import { useState, useEffect } from 'react';
 import { AiFillEdit } from 'react-icons/ai';
 import profilePic from '../../images/Girl.png'
 
 const Account = () => {
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isBioEditable, setIsBioEditable] = useState(false);
    const [isDobEditable, setIsDobEditable] = useState(false);
    const [isEmailEditable, setIsEmailEditable] = useState(false);
    const [newProfilePic, setNewProfilePic] = useState(null);
    const [name, setName] = useState('John Judith');
    const [bio, setBio] = useState('My Bio');
    const [dob, setDob] = useState('Date of Birth: 10 / 12 / 1990');
    const [email, setEmail] = useState('example@gmail.com');
  
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
        case 'profilePic':
          // Implement logic to open file dialog for profile picture
          const fileInput = document.getElementById('profilePicInput');
          fileInput.click();
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
      switch (field) {
        case 'name':
          setName(value);
          break;
        case 'bio':
          setBio(value);
          break;
        case 'dob':
          setDob(value);
          break;
        case 'email':
          setEmail(value);
          break;
        default:
          break;
      }
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

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setName(parsedUserData.name);
          setBio(parsedUserData.bio);
          setDob(parsedUserData.dob);
          setEmail(parsedUserData.email);
          // Set other state values as needed
        }
      }, []);
  
    return (
      <>
        <div className="w-[90%] text-[15px] py-[50px] px-3 my-4 flex flex-col justify-start gap-3 shadow-lg">
          <h2 className="text-[18px] ">Account</h2>
          <div className="text-[12px] gap-2 flex flex-col">
            <div className="w-[14%] p-0 m-0 relative">
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
              <div className='absolute top-0 right-0 border-2 rounded-md p-1 text-[15px] cursor-pointer' onClick={() => handleEditClick('profilePic')}><AiFillEdit/></div>
            </div>
            <div className='flex justify-between items-center w-full'>
              <h3 className={`text-[18px] ${isNameEditable ? 'border-b-2 border-blue-500' : ''}`}>
                {isNameEditable ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleTextChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                  />
                ) : (
                  name
                )}
              </h3>
              <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('name')}><AiFillEdit/></div>
            </div>
            <div className='flex justify-between items-center w-full'>
              <h3 className={`text-[15px] ${isBioEditable ? 'border-b-2 border-blue-500' : ''}`}>
                {isBioEditable ? (
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => handleTextChange('bio', e.target.value)}
                    onBlur={() => handleBlur('bio')}
                  />
                ) : (
                  bio
                )}
              </h3>
              <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('bio')}><AiFillEdit/></div>
            </div>
            <div className='flex justify-between items-center w-full'>
              <h3 className={`text-[15px] ${isDobEditable ? 'border-b-2 border-blue-500' : ''}`}>
                {isDobEditable ? (
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => handleTextChange('dob', e.target.value)}
                    onBlur={() => handleBlur('dob')}
                  />
                ) : (
                  dob
                )}
              </h3>
              <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('dob')}><AiFillEdit/></div>
            </div>
            <div className='flex justify-between items-center w-full'>
              <h3 className={`text-[15px] ${isEmailEditable ? 'border-b-2 border-blue-500' : ''}`}> Email: { " " }
                {isEmailEditable ? (
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => handleTextChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                  />
                ) : (
                  email
                )}
              </h3>
              <div className='border-2 rounded-md p-1 text-[18px] cursor-pointer' onClick={() => handleEditClick('email')}><AiFillEdit/></div>
            </div>
          </div>
          <button type="button" onClick={saveChanges} className="w-full sm:w-[20%] whitespace-nowrap flex justify-center items-start py-[8px] sm:px-20 bg-blue-500 text-[10px] sm:text-[15px] text-white border-none rounded-md">Save Changes</button>
        </div>
      </>
    );
  }
  
 
export default Account;