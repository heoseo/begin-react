import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    fullname: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { fullname, nickname } = inputs;  // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name과 value를 추출
    setInputs({
      ...inputs,  // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      fullname: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input 
        name="fullname" 
        placeholder="이름" 
        onChange={onChange} 
        value={fullname}
        ref={nameInput} 
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange}
        value={nickname} 
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {fullname} ( {nickname} )
      </div>
    </div>
  );
}

export default InputSample;