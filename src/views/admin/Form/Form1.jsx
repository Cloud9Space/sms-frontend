import React, { useState, useRef } from 'react';

const ReusableForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    gender: '',
    bloodGroup: '',
    phoneNo: '',
    profileImage: null, // Store the image file
    address: '',
    city: '',
    pinCode: '',
    
  });

  const [parentDetails, setParentDetails] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
  });

  

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };
  const [imagePreview, setImagePreview] = useState(null);
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setPersonalDetails({
      ...personalDetails,
      profileImage: file,
    });

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
   
  const [error, setError] = useState(''); // Error message state

  const handleCopyToPermanent = () => {
    setPersonalDetails({
      ...personalDetails,
      permanentAddress: personalDetails.address,
      permanentCity: personalDetails.city,
      permanentPinCode: personalDetails.pinCode,
    });
  };

  const handleParentDetailsChange = (e) => {
    const { name, value } = e.target;
    setParentDetails({
      ...parentDetails,
      [name]: value,
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (!personalDetails.firstName || !personalDetails.lastName || !personalDetails.dob ) {
      setError('Please fill in all required fields.');
    } else {
      setError(''); // Reset the error message
      // Handle form submission here
    }
  };
  const checkboxRef = useRef(null);

  const handleResetForm = () => {
    setPersonalDetails({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        bloodGroup: '',
        phoneNo: '',
        profileImage: null,
        address: '',
        city: '',
        pinCode: '',
        permanentAddress: '',
        permanentCity: '',
        permanentPinCode: '',
      });
    setParentDetails({
      firstName: '',
      lastName: '',
      occupation: '',
    });
    if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
  };

  return (
    <div className="bg-white p-4 rounded-xl-lg shadow-md">

    <form onSubmit={handleSubmit} className="p-4" >
  {/**Personal Details Container */}      
  <div className="container container-box border-2 rounded-xl-xl shadow-lg rounded-xl mt-20 mb-10 p-4" >  
    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-4 mt-4">Personal Details</h2>   
    <div className="mx-4 mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       
        <div className="col-span-1">
        <div className="text-center ">
            <div className="relative rounded-full w-40 h-40 mx-auto">
            <img
                src={imagePreview || "./../views/admin/Form/student.jpg"} // Provide the correct path to your default image
                alt=" "
                className="w-40 h-40 rounded-full object-cover"
            />
            <input
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={handleProfileImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                style={{ width: '100%', height: '100%', borderRadius: '9999px' }}
            />
            </div>
            <label htmlFor="profileImage" className="block mt-2 p-2 text-blue-500 cursor-pointer">
            <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-xl mt-4 text-xl w-24 h-10"
                onClick={() => {
                const fileInput = document.getElementById('profileImage');
                fileInput.click(); // Simulate a click on the hidden file input element
                }}
            >
                Upload
            </button>
            </label>
        </div>
        </div>

    
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {/* First Name */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
              <label htmlFor="firstName" className="block text-sm   leading-6 text-gray-900 text-xl">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={personalDetails.firstName}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0  "
                required
              />
            </div>
            {/* Middle Name */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
              <label htmlFor="middleName" className="block text-sm  leading-6 text-gray-900 text-xl">
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={personalDetails.middleName}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
              />
            </div>
            {/* Last Name */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
              <label htmlFor="lastName" className="block text-sm   leading-6 text-gray-900 text-xl">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={personalDetails.lastName}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
              />
            </div>
            {/* DOB */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-8 sm:mt-0" data-te-datepicker-init data-te-input-wrapper-init>
              <label htmlFor="dob" className="block text-sm   leading-6 text-gray-900 text-xl">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={personalDetails.dob}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
              />
            </div>
            {/* Blood group dropdown */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
              <label htmlFor="bloodGroup" className="block text-sm   leading-6 text-gray-900 text-xl">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={personalDetails.bloodGroup}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            {/* Phone no */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
              <label htmlFor="phoneNo" className="block text-sm   leading-6 text-gray-900 text-xl">Phone Number</label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={personalDetails.phoneNo}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
              />
            </div>
            {/* Gender (Radio Buttons) */}
            <div className="col-span-3 sm:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
              <label className="block text-sm   leading-6 text-gray-900 text-xl">Gender</label>
              <div className="flex items-center mb-8">
                <label className="mr-2 text-xl">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={personalDetails.gender === 'male'}
                    onChange={handlePersonalDetailsChange}
                    className="mr-1"
                  />
                  Male
                </label>
                <label className="mr-2 text-xl">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={personalDetails.gender === 'female'}
                    onChange={handlePersonalDetailsChange}
                    className="mr-1"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
         </div> 
    </div>   
    </div> 

    {/**Address Container */}
    <div className="container container-box border-2 rounded-xl-xl shadow-lg rounded-xl mb-10 p-4">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-4 mt-4 mb-4">Address</h2>
        <div className="mx-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/** Address for Correspondence */}
            <div className="col-span-1 sm:col-span-1 sm:col-start-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Address for Correspondence</h2>
            <label htmlFor="address" className="block leading-6 text-gray-900 text-xl">
                Address
            </label>
            <input
                type="text"
                id="address"
                name="address"
                value={personalDetails.address}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
            />
            <label htmlFor="city" className=" block leading-6 text-gray-900 text-xl">
                City
            </label>
            <input
                type="text"
                id="city"
                name="city"
                value={personalDetails.city}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
            />
            <label htmlFor="pinCode" className=" block leading-6 text-gray-900 text-xl">
                Pin Code
            </label>
            <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={personalDetails.pinCode}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
            />
            </div>

            {/** Permanent Address */}
            <div className="col-span-1 sm:col-span-1 sm:col-start-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Permanent Address</h2>
            <label htmlFor="permanentAddress" className=" block leading-6 text-gray-900 text-xl">
                Address
            </label>
            <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={personalDetails.permanentAddress}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
            />
            <label htmlFor="permanentCity" className=" block leading-6 text-gray-900 text-xl">
                City
            </label>
            <input
                type="text"
                id="permanentCity"
                name="permanentCity"
                value={personalDetails.permanentCity}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
            />
            <label htmlFor="permanentPinCode" className="block leading-6 text-gray-900 text-xl">
                Pin Code
            </label>
            <input
                type="text"
                id="permanentPinCode"
                name="permanentPinCode"
                value={personalDetails.permanentPinCode}
                onChange={handlePersonalDetailsChange}
                className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
                required
            />
            <div className="mt-4 mb-4">
                <label htmlFor="copyToPermanent" className=" block leading-6 text-gray-900 text-xl">
                Same as  Address for Correspondence
                </label>
                <input
                type="checkbox"
                id="copyToPermanent"
                name="copyToPermanent"
                checked={personalDetails.copyToPermanent}
                onChange={handleCopyToPermanent}
                className="text-xl mb-4"
                ref={checkboxRef}
                />
            </div>
            </div>
        </div>
        </div>

    {/**Parent Details container */}
    <div className="container container-box border-2 rounded-xl-xl shadow-lg mb-10 p-4">
    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mx-4 mt-4 mb-6">Parent Details</h2>
    <div className="mx-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Name */}
        <div className="col-span-1">
        <label htmlFor="firstName" className="block leading-6 text-gray-900 text-xl">
            First Name
        </label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            value={parentDetails.firstName}
            onChange={handleParentDetailsChange}
            className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
            required
        />
        </div>

        {/* Last Name */}
        <div className="col-span-1">
        <label htmlFor="lastName" className="block leading-6 text-gray-900 text-xl">
            Last Name
        </label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            value={parentDetails.lastName}
            onChange={handleParentDetailsChange}
            className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
            required
        />
        </div>

        {/* Occupation */}
        <div className="col-span-1">
        <label htmlFor="occupation" className="block   leading-6 text-gray-900 text-xl">
            Occupation
        </label>
        <input
            type="text"
            id="occupation"
            name="occupation"
            value={parentDetails.occupation}
            onChange={handleParentDetailsChange}
            className="w-full p-2 border rounded-xl text-xl mb-4 focus:outline-none focus:ring-0"
            required
        />
        </div>
    </div>
    </div>
    {/**Buttons */}
    <div className="text-center mt-4">
    <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-xl mt-4 text-xl w-24 h-10 mr-2"
    >
        Submit
    </button>
    <button
        type="button"
        className="bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-xl mt-4 text-xl w-24 h-10"
        onClick={() => handleResetForm()} // Add an event handler for reset
    >
        Reset
    </button>
    </div>
 </form>
    {error && <div className="text-red-600 mt-4 text-sm">{error}</div>}
    </div>
  );
};

export default ReusableForm;
