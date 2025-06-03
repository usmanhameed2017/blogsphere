import React from 'react';
import { getUser } from '../../../constants';

function UserProfile() 
{
    const user = getUser();
    const profile_image = user.profile_image || "/public/default-avatar.webp";

    return (
        <div className="profile-container" style={{ paddingTop: '120px'}}>

            {/* Profile Image & Info */}
            <div className="profile-info" style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                <img src={profile_image} alt="Profile"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '4px solid white',
                        objectFit: 'cover'
                    }} />

                <div style={{ marginLeft: '20px' }}>
                    <h1 style={{ margin: 0 }}>{user.fname}</h1>
                    <p style={{ margin: 0, color: 'gray' }}>@{user.username}</p>
                </div>
            </div>

            {/* Bio or other details (optional) */}
            <div className="profile-bio" style={{ padding: '20px' }}>
                {/* Future content */}
            </div>
        </div>
    );
}

export default UserProfile;