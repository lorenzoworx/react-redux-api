import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersSlice';
import { v4 as uuid } from 'uuid';
const UserList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      {isLoading ? (
      <p>Loading...</p>
      ) : error ? (
      <p>Error: {error}</p>
      ) : (
      <ul>
        {users.map((user) => (
          <li key={uuid()}>
          { user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
      )}
    
    </div>
  );
};

export default UserList;
