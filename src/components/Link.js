import { Link as ReactLink } from "react-router-dom";

export default function Link(props) {
  console.log(props);
  function handleClick() {
    if (props.children.type === "img") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }

  return <ReactLink {...props} onClick={handleClick}></ReactLink>;
}
