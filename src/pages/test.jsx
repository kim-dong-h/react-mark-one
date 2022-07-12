import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Light from "../components/Light";
import { setId } from "../store/reducers/test";

function Test() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  // const toggleMaster = () => setMasterOn(!masterOn);
  // const toggleKitchen = () => setKitchenOn(!kitchenOn);
  // const toggleBath = () => setBathOn(!bathOn);

  // git 로그 추가
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  const id = useSelector((state) => state.test.id);

  console.log(id);

  const dispatch = useDispatch();

  dispatch(setId("kim"));


  console.log(id);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}

export default Test;
