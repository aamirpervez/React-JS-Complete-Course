import "./CompositionComponent.css";

function CompositionComponent(props) {
  const classes = "composComponent " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default CompositionComponent;
