import React from 'react';
import { AiFillCamera } from 'react-icons/ai';
import avatar from '../assets/images/avatar.jpg';
import ProfileForm from '../components/Forms/Profile';

function UserProfile() {
  return (
    <div>
      <div role="main" className="main">
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-3 mt-4 mt-lg-0">
              <div className="d-flex justify-content-center mb-4">
                <div className="profile-image-outer-container">
                  <div className="profile-image-inner-container bg-color-primary">
                    <img
                      src={avatar}
                      alt=""
                      style={{
                        height: '200px',
                        width: '200px',
                        borderRadius: '50%',
                        border: '5px solid white',
                      }}
                    />
                    <span
                      className="d-flex align-items-center justify-content-center"
                      htmlFor="file"
                      style={{
                        position: 'absolute',
                        top: '150px',
                        left: '180px',
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'black',
                      }}
                    >
                      <AiFillCamera
                        style={{
                          color: 'white',
                          height: '20px',
                          width: '20px',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="overflow-hidden mb-1 mt-3">
                <h2 className="font-weight-normal text-7 mb-0 ">
                  <strong className="font-weight-extra-bold">My</strong> Profile
                </h2>
              </div>
              <div className="overflow-hidden mb-4 pb-3">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
