import React, {useState} from 'react'
const Delete = () => {
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [signature, setSignature] = useState('');
    const [isSignatureValid, setSignatureValid] = useState(true);
  
    const showConfirmation = () => {
      setConfirmationVisible(true);
    };
  
    const hideConfirmation = () => {
      setConfirmationVisible(false);
      setSignature('');
      setSignatureValid(true);
    };
  
    const handleSignatureChange = (e) => {
      setSignature(e.target.value);
      setSignatureValid(true);
    };
  
    const deleteAccount = () => {
      // Check if the signature is valid (e.g., matches the user's name or email)
      const isSignatureValid = validateSignature(); // Implement your validation logic
  
      if (isSignatureValid) {
        // Implement the logic to delete the account
        console.log('Account deleted!');
        hideConfirmation();
      } else {
        setSignatureValid(false);
      }
    };
  
    const validateSignature = () => {
      // Implement your validation logic (e.g., compare with user's name or email)
      // For now, let's assume the signature is valid if it is not empty
      return signature.trim() !== '';
    };
  
    return (
      <div className="flex flex-col gap-2  p-4 delete-account-container">
        <button
          onClick={showConfirmation}
          className="delete-account-button bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete My Account
        </button>
  
        {isConfirmationVisible && (
          <div className="delete-confirmation bg-gray-200 p-4 rounded-md mt-2">
            <p>Are you sure you want to delete your account?</p>
            
            <div className="mt-4">
              <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
                Signature (Name or Email)
              </label>
              <input
                type="text"
                id="signature"
                value={signature}
                onChange={handleSignatureChange}
                className={`mt-1 p-2 border rounded-md w-full ${isSignatureValid ? 'border-gray-300' : 'border-red-500'}`}
              />
              {!isSignatureValid && (
                <p className="text-red-500 text-sm mt-1">Please provide a valid signature.</p>
              )}
            </div>
  
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={deleteAccount}
                className="confirm-delete-button bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Confirm
              </button>
              <button
                onClick={hideConfirmation}
                className="cancel-delete-button bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
export default Delete;