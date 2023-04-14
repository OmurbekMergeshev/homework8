import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addCase, listCase } from "../store/listSlice";

const ListPage = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector(state => state.listReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ListPage;
