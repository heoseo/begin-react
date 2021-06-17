import React
// , { useEffect } 
from 'react';

function User({ user, onRemove, onToggle }) {
  // useEffect(() => {
  //   console.log('user 값이 설정됨', user);
    
  //   return () => {
  //     console.log('user 가 바뀌기 전..', user);
  //   }
  // }, [
  //   // deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출
  //   user
  // ]);

  return (
    <div>
      <b
        style={{
          cursor: 'zoom-in',
          color: user.active ? 'red' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }){

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
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // {users.map((user, index) => (
        //   <User user={user} key={index} />
        // ))}
      ))}
    </div>
  )
}
 
export default React.memo(UserList);