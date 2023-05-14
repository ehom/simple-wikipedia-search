
class PageView extends React.Component {
    constructor({ dataModel, onSearchRequest }) {
      super();
  
      this.state = {
        searchText: "",
        pages: dataModel
      };
      this.onSearchRequest = onSearchRequest;
    }
  
    /*
    handleButtonClick = () => {
      console.debug("handleClick");
      this.onRandomPage();
    };
    */
  
    clearSearchInputField() {
      const searchInput = document.getElementById("searchinput");
      searchInput.blur();
    }
  
    isEnterKey = (e) => {
      return e.keyCode === keyCodes.ENTER;
    };
  
    handleEnterKey = (e) => {
      console.debug("onKeyDown:", e);
      const searchInput = document.getElementById("searchinput");
  
      if (this.isEnterKey(e)) {
        console.debug("Enter Key:", e);
        console.debug("value:", this.state.searchText);
  
        this.clearSearchInputField();
  
        console.debug("clear results view");
  
        this.onSearchRequest(this.state.searchText);
        this.setState({
          searchText: ""
        })
      }
    };
  
    handleChangeInSearchInput = (e) => {
      console.debug("handleChangeInSearchInput:", e);
      this.setState({
        searchText: e.target.value
      });
    };
  
    render() {
      console.debug("app view ... render pages", this.state.pages);
  
      return (
        <div className="container mt-5 mb-5">
          <div className="text-center mb-4">
            <h2 className="text-white">Simple Wikipedia Search</h2>
            <p className="text-white">
              {"cLicK "}
              <a
                href="https://en.wikipedia.org/wiki/Special:Random"
                target="_blank"
              >
                hErE
              </a>
              {" foR a RaNdOm pAgE \u{1f62e}"}
            </p>
            <RandomPageButton
              label={"RaNdOm pAgE"}
              onClick={this.props.onRandomPage}
            />
          </div>
  
          <div className="mb-3">
            <input
              className="form-control"
              id="searchinput"
              type="search"
              autoComplete="on"
              value={this.state.searchText}
              placeholder="I'm looking for ..."
              onKeyDown={this.handleEnterKey}
              onChange={this.handleChangeInSearchInput}
            />
          </div>
          <div id="message" className="mb-4 text-white"></div>
          <div id="results">
            <Summary pages={this.props.dataModel} />
          </div>
        </div>
      );
    }
  }
  