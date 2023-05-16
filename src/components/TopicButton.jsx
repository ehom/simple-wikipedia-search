const TopicButton = ({ name, onClick }) => {
    return <button
      type="button"
      className="btn btn-sm btn-light m-1"
      onClick={onClick}
      name={name}
    >{name}</button>;
  };