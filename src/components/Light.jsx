import React from "react";

function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "ð¡" : "â¬"}
    </button>
  );
}

// test.jsxìì Light ì»´í¬ëí¸ë¥¼ 3ë² í¸ì¶ useState ê°ì´ ë°ëë©´ ì¬ëëë§ì´ ëë©´ì 3ë²
// Light ì»´í¬ëí¸ê° í¸ì¶ ëì´ì¼ íì§ë§ memoë¥¼ íì©íë©´ useState ê°ì´ ë³ê²½ ë ë íë² í¸ì¶ ëë¤.
export default Light = React.memo(Light);
// export default Light;
