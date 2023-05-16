// Unicode Emojis

const Emojis = {
  RED_QUESTION_MARK: "\u2753",
  REPEATABLE: "\u{1F504}",
  MAGNIFYING_GLASS: "\u{1F50D}"
};

const fisherYates = (array) => {
  const swapElementsAt = (i, j) => {
    const k = array[i];
    array[i] = array[j];
    array[j] = k;
  };

  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomNumber(i);
    swapElementsAt(i, j);
  }
  return array;
};

const getRandomNumber = (maximum) => Math.floor(Math.random() * maximum);

const shuffle = (array) => {
  const shuffleImplementation = fisherYates;
  shuffleImplementation(array);
  return array;
};

class PageView extends React.Component {
  static defaultProps = {
    dataModel: [],
    topics: [],
    onSearchRequest: () => { },
    onRandomPage: () => { }
  };

  constructor(props) {
    super(props);
    const { dataModel, topics, onSearchRequest, onRandomPage } = props;
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

  scrambleTopics = () => {
    shuffle(this.props.topics);
    const currentTopics = this.props.topics.slice(10);

    this.setState({
      topics: currentTopics
    });
  }

  clearSearchInputField = () => {
    const searchInput = document.getElementById("searchinput");
    searchInput.blur();
  }

  /*
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
      });
    }
  };
  */

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

  handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    const {searchText} = this.state;
    const {onSearchRequest} = this.props;

    console.debug("handleSubmit: ", e);
    console.debug("submitting search text:", searchText);
    
    searchText.length && onSearchRequest(searchText);

    this.setState({
      searchText: ""
    });
  }

  render() {
    const { dataModel, onRandomPage } = this.props;
    const { searchText, pages } = this.state;

    console.debug("app view ... render pages", pages);

    const buttons = this.state.topics.map((topic, index) =>
      <TopicButton key={index} name={topic} onClick={this.handleTopicButtons} />
    );

    return (
      <div className="container mt-5 mb-5">
        <div className="text-center mb-4">
          <h2 className="header-text-color">{`Simple Wikipedia Search ${Emojis.MAGNIFYING_GLASS}`}</h2>
        </div>

        <SearchInputForm searchText={searchText} onSubmit={this.handleSubmit} onChange={this.handleChangeInSearchInput} />

        <div id="message" className="mb-4 text-white">
          <TopicButton name={Emojis.REPEATABLE} onClick={this.handleRefreshTopics} />
          {buttons}
          <TopicButton name={Emojis.RED_QUESTION_MARK} onClick={onRandomPage} />
        </div>
        <div id="results">
          <Summary pages={dataModel} />
        </div>
      </div>
    );
  }
}

// Private to this component
const TopicButton = ({ name, onClick }) => {
  return <button
    type="button"
    className="btn btn-light m-1"
    onClick={onClick}
    name={name}
  >{name}</button>;
};

const SearchInputForm = (props) => {
  const { searchText, onKeyDown, onChange, onSubmit } = props;
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
          {length <= 0 ? (<button id="submitButton" className="btn btn-primary" type="submit" disabled>{Emojis.MAGNIFYING_GLASS}</button>) :
            (<button id="submitButton" className="btn btn-primary" type="submit">{Emojis.MAGNIFYING_GLASS}</button>)}

        </div>
      </div>
    </form>);
};