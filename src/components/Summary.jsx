const Summary = ({ pages }) => {
    let results = [];
    if (pages) {
      console.debug("i see these pages", pages);
      results = Object.entries(pages).map(([key, value]) => {
        console.debug("value:", key, value);
        return (
          <TopicCard
            key={value.pageid}
            id={value.pageid}
            title={value.title}
            desc={value.description}
            extract={value.extract}
            image={value.thumbnail}
          />
        );
      });
      console.debug(results);
      console.debug(typeof results);
    }
    return <React.Fragment>{results}</React.Fragment>;
  };