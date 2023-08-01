function Card(props) {
  return (
    <div
      id={`${props.title}Card`}
      className="card-wrapper"
      onClick={() => {
        props.setDisplay(props.title.toLowerCase());
      }}
    >
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
