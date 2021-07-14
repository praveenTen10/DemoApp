import Draggable from "react-draggable";

type draggable = {
  children: JSX.Element;
  style?: object;
};

const DraggableComponent = (props: draggable) => {
  return (
    <Draggable>
      <div>{props.children}</div>
    </Draggable>
  );
};
export default DraggableComponent;
