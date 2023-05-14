const RandomPageButton = ({ label, onClick }) => {
    return (
      <input
        type="button"
        className="btn btn-warning"
        value={label}
        onClick={onClick}
      />
    );
  };
  