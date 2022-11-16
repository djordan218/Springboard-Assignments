import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileViewer = ({ name = 'elie', color = 'black' }) => {
  const [data, setData] = useState(null);
  const [bio, setBio] = useState(null);
  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(`https://api.github.com/users/${name}`);
      setData(res.data.name);
      setBio(res.data.bio);
    }
    loadProfile();
  }, [name]);
  return (
    <div>
      <h3 style={{ color }}>{data ? data : 'Loading...'}</h3>
      <p>{bio ? bio : 'No bio found'}</p>
    </div>
  );
};

export default ProfileViewer;
