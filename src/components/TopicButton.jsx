const TopicButton = ({ name, title, onClick }) => {
    return <button
      type="button"
      className="btn btn-sm btn-light m-1"
      onClick={onClick}
      name={name}
      title={title}
    >{name}</button>;
};

TopicButton.defaultProps = {
  title: ""
};