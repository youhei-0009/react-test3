import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor:"khaki",
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildArea is rendaring!!");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  
  return (
    <>
    { open ? (
    <div style={style}>
      <p>child compornent</p>
      <button onClick={onClickClose}>close</button>
    </div>
    ) : null }
    </>
  );
});
