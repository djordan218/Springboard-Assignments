import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileSearchForm from './ProfileSearchForm';

const ProfileViewerWithSearch = () => {
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState(`https://api.github.com/users/elie`);

  const search = (term) => {
    setUrl(`https://api.github.com/users/${term}`);
  };

  useEffect(() => {
    console.log('IN EFFECT');
    async function loadProfile() {
      const res = await axios.get(url);
      setProfile(res.data);
    }
    loadProfile();
    // this return runs before each useEffect except for initial render
    return () => console.log('cleaning up');
  }, [url]);

  return (
    <div>
      {profile ? <h1>Hi {profile.name}!</h1> : <h1>Loading...</h1>}
      <ProfileSearchForm search={search} />
    </div>
  );
};

export default ProfileViewerWithSearch;
