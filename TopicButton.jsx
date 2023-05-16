const TopicButton = ({ name, onClick }) => {
    return <button
      type="button"
      className="btn btn-light m-1"
      onClick={onClick}
      name={name}
    >{name}</button>;
  };