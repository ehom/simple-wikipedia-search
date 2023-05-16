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
    };
  }

  componentDidMount() {
    console.debug("componentDidMount();");

    this.scrambleTopics();
  }

  scrambleTopics = () => {
    shuffle(this.props.topics);
    const currentTopics = this.props.topics.slice(0, 10);

    this.setState({
      topics: currentTopics
    });
  };

  clearSearchInputField = () => {
    const searchInput = document.getElementById("searchinput");
    searchInput.blur();
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
  };

  handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    const { searchText } = this.state;
    const { onSearchRequest } = this.props;

    console.debug("handleSubmit: ", e);
    console.debug("submitting search text:", searchText);

    searchText.length && onSearchRequest(searchText);

    this.setState({
      searchText: ""
    });
  };

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
    const { searchText } = this.state;

    console.debug("app view ... render pages", dataModel);

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
          <Summary pages={this.props.dataModel} />
        </div>
      </div>
    );
  }
};
