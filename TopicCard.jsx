const TopicCard = (props) => {
    const { key, id, title, desc, extract, image } = props;
  
    const url = `https://en.wikipedia.org/?curid=${id}`;
  
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-title">
            <a href={url} rel="noopener noreferrer">
              {title}
            </a>
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">{desc}</h6>
          <div className="card-text">{extract}</div>
        </div>
      </div>
    );
  };