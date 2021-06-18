import React
// , { useEffect } 
, { useContext }
from 'react';
import { UserDispatch } from './App';


const User = React.memo( function User({ user }) {
    // useEffect(() => {
    //   console.log('user 값이 설정됨', user);
      
    //   return () => {
    //     console.log('user 가 바뀌기 전..', user);
    //   }
    // }, [
    //   // deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출
    //   user
    // ]);
    
    const dispatch = useContext(UserDispatch);
  
    return (
      <div>
        <b
          style={{
            cursor: 'zoom-in',
            color: user.active ? 'red' : 'black'
          }}
          onClick={() => {
            dispatch({ type: 'TOGGLE_USER', id: user.id });
          }}
        >
          {user.username}
        </b>
        &nbsp;
        <span>({user.email})</span>
        <button onClick={() => {
          dispatch({ type: 'REMOVE_USER', id: user.id });
        }}>삭제</button>
      </div>
    );
  });

function UserList({ users }){

  return(
    // <div>
    //   <User user={users[0]} />
    //   <User user={users[1]} />
    //   <User user={users[2]} />
    // </div>
    <div>
      {users.map(user => (
        <User 
          user={user} 
          key={user.id} 
        />
      ))}
    </div>
  );
}
 
export default React.memo(UserList);