
// "use client";

// import { Banner, Button } from "flowbite-react";
// import logo from '../../Assets/navbar/logo.png'
// import { useEffect, useState } from 'react';
// export function Profile() {
//   const [profilePic, setProfilePic] = useState();
//   const [user, setUser] = useState({ name, picture: "" })

//   // const handleProfilePicUpload = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setProfilePic(reader.result);
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };
//   return (
//     <Banner className="sticky top-0 z-50">
//       <div className="flex max-w-full flex-col justify-between rounded-lg border border-gray-100 bg-cyan-800 px-4 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row ">
//         <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
//           <a
//             href="/UserPanel"
//             className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
//             <img src={logo} className="mr-2 h-10  md:h-[65px]" alt="Flowbite Logo" />
//           </a>
//           <span className=" flex gap-6 self-left whitespace-nowrap text-3xl font-semibold dark:text-white md:pr-6">

//             <label htmlFor="profile-pic-upload">
//               <img
//                 src={profilePic}
//                 className='ring-primary ring-offset-base-100 w-20 h-20 rounded-full ring ring-offset-2'
//                 alt='User Profile'
//                 style={{ cursor: 'pointer' }}
//               />
//             </label>
//             <input
//               id="profile-pic-upload"
//               type="file"
//               accept="image/*"
//               // onChange={handleProfilePicUpload}
//               style={{ display: 'none' }}
//               className=""
//               value={user.picture}
//               onChange={(e) => setUser({ ...user, picture: e.target.value })}
//             />
//             <div className="block">
//               <span className='align-center'>Hello {user.name}</span>
//               <span className='useremail'>dbdbn{user.email}</span>
//             </div>
//           </span>

//         </div>
//         <div className="flex text-lg shrink-0 items-center gap-2">
//           <Button gradientMonochrome="info" className="font-bold" href="tel:8767887013">Call</Button>
//           <Button color="gray" href="" className="font-bold">Message</Button>

//         </div>
//       </div>
//     </Banner>
//   );
// }

"use client";

import { Banner, Button } from "flowbite-react";
import logo from '../../Assets/navbar/logo.png';
import { useEffect, useState } from 'react';

export function Profile() {
  const [profilePic, setProfilePic] = useState();
  const [user, setUser] = useState({ name: '', email: '', picture: '' });
  
  const handleProfilePicUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePic', file);
      formData.append('userId', user.id);
  
      try {
        const response = await fetch('/api/upload-profile-pic', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          setProfilePic(data.filePath); // Update the profile picture in the UI
          alert('Profile picture updated successfully');
        } else {
          console.error('Failed to upload profile picture');
        }
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };
  
  

  return (
    <Banner className="sticky top-0 z-50">
      <div className="flex max-w-full flex-col justify-between rounded-lg border border-gray-100 bg-cyan-800 px-4 py-2 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row ">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="/UserPanel"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
            <img src={logo} className="mr-2 h-10 md:h-[65px]" alt="Flowbite Logo" />
          </a>
          <span className="flex gap-6 self-left whitespace-nowrap text-3xl font-semibold dark:text-white md:pr-6">
            <label htmlFor="profile-pic-upload">
              <img
                src={profilePic || '/default-profile.png'} // Show uploaded or default profile picture
                className="ring-primary ring-offset-base-100 w-16 h-16 rounded-full ring ring-offset-2"
                alt="User Profile"
                style={{ cursor: 'pointer' }}
              />
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              accept="image/*"
              onChange={handleProfilePicUpload}
              style={{ display: 'none' }}
            />

            <div className="block">
              <span className="align-center">Hello {user.name || 'Guest'}</span>
              <span className="useremail">{user.email || 'No email available'}</span>
            </div>
          </span>
        </div>
        <div className="flex text-lg shrink-0 items-center gap-2">
          <Button gradientMonochrome="info" className="font-bold" href="tel:8767887013">Call</Button>
          <Button color="gray" href="" className="font-bold">Message</Button>
        </div>
      </div>
    </Banner>
  );
}

