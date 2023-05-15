// Unicode Emojis

const Emojis = {
  RED_QUESTION_MARK: "\u2753",
  REPEATABLE: "\u{1F504}"
};

const fisherYates = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = list[i];
    list[i] = list[j];
    list[j] = k;
  }
};

function shuffle(array) {
  const shuffleImpl = fisherYates;
  shuffleImpl(array);
}


class PageView extends React.Component {
  constructor({ dataModel, topics, onSearchRequest, onRandomPage }) {
    super();

    this.state = {
      searchText: "",
      topics: [],
      pages: dataModel
    };
  }

  componentDidMount() {
    console.debug("componentDidMount();");

    this.scrambleTopics();
  }

  scrambleTopics() {
    shuffle(this.props.topics);
    let currentTopics = this.props.topics.slice(10);

    this.setState({
      topics: currentTopics
    });
  }

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

      this.props.onSearchRequest(this.state.searchText);
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

  handleTopicButtons = (e) => {
    console.debug("topic button:", e.target.name);
    const topic = e.target.name;
    this.props.onSearchRequest(topic);
    
    this.setState({
      searchText: ""
    });
  };

  handleRefreshTopics = (e) => {
    this.scrambleTopics();
  }

  render() {
    console.debug("app view ... render pages", this.state.pages);

    const buttons = this.state.topics.map((topic) => {
      return (
        <button
          type="button"
          className="btn btn-light m-1"
          onClick={this.handleTopicButtons}
          name={topic}
        >
          {topic}
        </button>
      );
    });

    return (
      <div className="container mt-5 mb-5">
        <div className="text-center mb-4">
          <h2 className="header-text-color">{"Simple Wikipedia Search \u{1F50D}"}</h2>
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="searchinput"
            type="search"
            autocomplete="on"
            value={this.state.searchText}
            placeholder="Enter a topic and then type [return]"
            onKeyDown={this.handleEnterKey}
            onChange={this.handleChangeInSearchInput}
          />
        </div>
        <div id="message" className="mb-4 text-white">
          <button
          type="button"
          className="btn btn-light m-1"
          onClick={this.handleRefreshTopics}
          name={Emojis.REPEATABLE}
          >{Emojis.REPEATABLE}</button>
          {buttons}
          <button
          type="button"
          className="btn btn-light m-1"
          onClick={this.props.onRandomPage}
          name={Emojis.RED_QUESTION_MARK}
          >{Emojis.RED_QUESTION_MARK}</button>
        </div>
        <div id="results">
          <Summary pages={this.props.dataModel} />
        </div>
      </div>
    );
  }
}
