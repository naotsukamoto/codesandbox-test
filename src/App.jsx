// おまじない
import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessages";

const App = () => {
  // useState ※関数の上部に書いてstateを明示する
  // 変数num, 更新関数setNum, 初期値0
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // onClickイベントで発生させる関数をアロー関数で定義する
  const onClickCountUp = () => {
    // setNum関数でstateを更新していく
    setNum(num + 1);
  };

  // on/offで顔文字を表示/非表示を変化させる関数
  const onClickSwitchFaceFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 関心の分離：numが更新されたときだけ実行するようにする
  useEffect(() => {
    if (num > 0) {
      // numが3の倍数のときに顔文字を出す
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello React!</h1>
      <ColorfulMessage color="gold">How are you doing?"</ColorfulMessage>
      <ColorfulMessage color="pink">"Yeah, fine!"</ColorfulMessage>
      <button className="" onClick={onClickCountUp}>
        カウントアップ
      </button>
      <button onClick={onClickSwitchFaceFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^o^)</p>}
    </>
  );
};

// 他のファイルでもApp関数を利用できるようにする
export default App;
