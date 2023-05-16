const SearchInputForm = (props) => {
    const { searchText, onChange, onSubmit } = props;
    console.debug("SearchInputForm");
  
    let [length, setLength] = React.useState(searchText.length);
  
    const handleChange = (e) => {
      console.debug("handle change:", e.target.value);
      const inputLength = e.target.value.length;
  
      setLength(inputLength);
      onChange(e);
    };
  
    return (
      <form onSubmit={onSubmit}>
        <div className="row mb-3">
          <div className="col-md-10">
            <input
              className="form-control"
              id="searchinput"
              type="search"
              autoComplete="on"
              value={searchText}
              placeholder={`Enter a topic and then click ${Emojis.MAGNIFYING_GLASS}`}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <button id="submitButton" className="btn btn-primary" type="submit" disabled={length <= 0}>{Emojis.MAGNIFYING_GLASS}</button>) :
  
          </div>
        </div>
      </form>);
  };