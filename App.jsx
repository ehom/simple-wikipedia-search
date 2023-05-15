const topics = [
  "Fermi Paradox",
  "Byzantine Empire",
  "Cognitive Bias",
  "Ancient Egypt",
  "Game Theory",
  "Linguistics",
  "Dark Matter",
  "Renaissance",
  "Evolutionary Psychology",
  "World War II",
  "Artificial Intelligence",
  "Climate Change",
  "Psychology",
  "Cryptography",
  "Human migration",
  "Great Emu War",
  "Temporal paradoxes",
  "Stonehenge",
  "Cleopatra",
  "Kowloon Walled City"
];

const App = () => {
    const model = new AppModel();
    const [pages, setPages] = React.useState({});
  
    console.debug("App render, state:", pages);
  
    React.useEffect(() => {
      console.log("Component mounted");
      return () => {
        console.log("Component unmounted");
      };
    }, []);
    
    React.useEffect(() => {
      console.debug("pages updated")
    }, [pages]);
    
    return (
      <div>
        <PageView
          dataModel={pages}
          topics={topics}
          onSearchRequest={(text) => handleSearchRequest(model, setPages, text)}
          onRandomPage={() => handleRandomPageRequest(model, setPages)}
        />
      </div>
    );
  };
  
  const handleRandomPageRequest = (model, setPages) => {
    console.debug("view requests random page");
    model.fetchRandom().then((data) => {
      console.debug("fetched random page:", data.query.pages);
      setPages(data.query.pages);
    });
  };
  
  const handleSearchRequest = (model, setPages, text) => {
    console.debug("handle Search Request:", text);
    model.searchWikipedia(text).then((data) => {
      console.debug("fetched articles:", data);
  
      if (data.query) {
        setPages(data.query.pages);
      } else {
        const pages = {
          0: {
            pageid: "0",
            title: "",
            extract: `Can't find anything on "${text}"`
          }
        };
        setPages(pages);
      }
    });
  };