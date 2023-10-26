import React, { useState, useRef } from 'react';

const ClassForm = ({onClose , onFormSubmit}) => {
 
  const [classDetails, setClassDetails] = useState({
    class_Name: '',
    classNumber: '',
    classTeacher: '',
    classCapacity: '',
    startDate: '',
    endDate: '',
    classLocation: '',
  });
   
  const [error, setError] = useState(''); // Error message state

  const handleClassDetailsChange = (e) => {
    const { name, value } = e.target;
    setClassDetails({
      ...classDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !classDetails.class_Name ||
      !classDetails.classNumber ||
      !classDetails.classTeacher ||
      !classDetails.classCapacity ||
      !classDetails.startDate ||
      !classDetails.endDate ||
      !classDetails.classLocation
    ) {
      setError('Please fill in all required fields.');
    } else {
      setError(''); // Reset the error message
      // Handle form submission here, for example, you can send data to a server or perform some other action.
      // If you want to submit the form to a server, you can use fetch or an API call here.
      console.log('Form submitted with data:', classDetails);
      onFormSubmit(classDetails);
      // Clear the form
      handleResetForm();
    }
  };

  const handleResetForm = () => {
    
    setClassDetails({
      class_Name: '',
      classNumber: '',
      classTeacher: '',
      classCapacity: '',
      startDate: '',
      endDate: '',
      classLocation: '',
    });
  };

  return (
    <div> 
    <form onSubmit={handleSubmit} className="p-4" >    
    {/**Class Details container */}
    <div className="container container-box border-2 rounded-xl-xl shadow-lg rounded-xl mt-6 mb-10 p-4">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl mx-4 mt-4">Class Details</h2>

    <div className="mx-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Class Name */}
        <div className="col-span-1">
        <label htmlFor="class_Name" className="block leading-6 text-gray-900 text-lg">
            Class Name
        </label>
        <input
            type="text"
            id="class_Name"
            name="class_Name"
            value={classDetails.class_Name}
            onChange={handleClassDetailsChange}
            className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
            style={{ border: '1px solid #8f94a3' }}
            required
        />
        </div>
        {/*Class Number */}
        <div className="col-span-1">
        <label htmlFor="classNumber" className="block leading-6 text-gray-900 text-lg">
            Class Number
        </label>
        <input
            type="number"
            id="classNumber"
            name="classNumber"
            value={classDetails.classNumber}
            onChange={handleClassDetailsChange}
            className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
            style={{ border: '1px solid #8f94a3' }}
            required
        />
        </div>
        {/* Class Teacher */}
        <div className="col-span-1">
        <label htmlFor="classTeacher" className="block leading-6 text-gray-900 text-lg">
            Class Teacher
        </label>
        <select
                id="classTeacher"
                name="classTeacher"
                value={classDetails.classTeacher}
                onChange={handleClassDetailsChange}
                className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
                style={{ border: '1px solid #8f94a3' }}
                required
              >
                <option value="">Select</option>
                <option value="Meena">Meena</option>
                <option value="Sita">Sita</option>
                <option value="Ramesh">Ramesh</option>
                <option value="Ashish">Ashish</option>
                <option value="Priya">Priya</option>
              </select>
        </div>
    </div>

    <div className="mx-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Class Capacity */}
        <div className="col-span-1">
        <label htmlFor="classCapacity" className="block leading-6 text-gray-900 text-lg">
            Class Capacity
        </label>
        <input
            type="number"
            id="classCapacity"
            name="classCapacity"
            value={classDetails.classCapacity}
            onChange={handleClassDetailsChange}
            className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
            style={{ border: '1px solid #8f94a3' }}
            required
        />
        </div>
        {/*Start Date */}
        <div className="col-span-1" data-te-datepicker-init data-te-input-wrapper-init>
        <label htmlFor="startDate" className="block leading-6 text-gray-900 text-lg">
            Start Date
        </label>
        <input
                type="date"
                id="startDate"
                name="startDate"
                value={classDetails.startDate}
                onChange={handleClassDetailsChange}
                className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
                style={{ border: '1px solid #8f94a3' }}
                required
              />
        </div>

        {/*End Date */}
        <div className="col-span-1" data-te-datepicker-init data-te-input-wrapper-init>
        <label htmlFor="endDate" className="block leading-6 text-gray-900 text-lg">
            End Date
        </label>
        <input
                type="date"
                id="endDate"
                name="endDate"
                value={classDetails.endDate}
                onChange={handleClassDetailsChange}
                className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
                style={{ border: '1px solid #8f94a3' }}
                required
              />
        </div>
    </div>

    <div className="mx-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Class Location */}
        <div className="col-span-1">
        <label htmlFor="classLocation" className="block leading-6 text-gray-900 text-lg">
            Class Location
        </label>
        <select
                id="classLocation"
                name="classLocation"
                value={classDetails.classLocation}
                onChange={handleClassDetailsChange}
                className="w-full p-2 border border-black rounded-md text-sm mb-2 focus:outline-none focus:ring-0"
                style={{ border: '1px solid #8f94a3' }}
                required
              >
                <option value="">Select</option>
                <option value="Pune">Pune</option>
                <option value="Nashik">Nashik</option>
              </select>
        </div>
    </div>

    </div>

    {/**Buttons */}
    <div className="text-center mt-4">
    <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-3 rounded text-lg w-22 h-10 mr-2"
    >
        SUBMIT
    </button>
    <button
        type="button"
        className="bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-3 rounded text-lg w-22 h-10 mr-2"
        onClick={() => handleResetForm()} // Add an event handler for reset
    >
        RESET
    </button>
    <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white text-center py-2 px-3 rounded text-lg w-22 h-10 mr-2"
          onClick={onClose}
        >
          CLOSE
        </button>
    </div>
 </form>
    {error && <div className="text-red-600 mt-4 text-sm">{error}</div>}
    </div>
  );
};

export default ClassForm;
