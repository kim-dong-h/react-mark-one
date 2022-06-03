import React from "react";

function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "💡" : "⬛"}
    </button>
  );
}

// test.jsx에서 Light 컴포넌트를 3번 호출 useState 값이 바뀌면 재랜더링이 되면서 3번
// Light 컴포넌트가 호출 되어야 하지만 memo를 활용하면 useState 값이 변경 될때 한번 호출 된다.
export default Light = React.memo(Light);
// export default Light;
