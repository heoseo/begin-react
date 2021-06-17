import React from 'react';

function Hello({ color, name, isSpecial }){
  return(
    <div style={{ color }}>
    { isSpecial && <b>*</b> } 
    {/* console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1 

https://learnjs.vlpt.us/useful/03-short-circuiting.html
*/}
    안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;