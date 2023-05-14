const endPoints = {
    actionApi: "https://en.wikipedia.org/w/api.php",
    randomPage: "https://en.wikipedia.org/api/rest_v1/page/random/summary"
  };
  
  const keyCodes = {
    ENTER: 13
  };
  
  
  class AppModel {
    // Using the action API
    async searchWikipedia(text) {
      const wikipediaApiEndpoint = endPoints.actionApi;
      const params = {
        origin: "*",
        action: "query",
        format: "json",
        generator: "search",
        gsrnamespace: "0",
        gsrlimit: "10",
        gsrsearch: text,
        prop: "pageimages|extracts",
        pilimit: "max",
        exintro: "",
        explaintext: "",
        exsentences: "1",
        exlimit: "max"
      };
  
      const url = AppModel.buildURL(wikipediaApiEndpoint, params);
      console.debug("url:", url);
  
      try {
        const response = await fetch(url);
        // TODO: check response for failure
        const jsonData = await response.json();
        console.debug("jsonData:", jsonData);
        return jsonData;
      } catch (error) {
        console.error("error fetching the data");
        return error;
      }
    }
  
    async fetchRandom() {
      const endPoint = endPoints.randomPage;
      try {
        const response = await fetch(endPoint);
        // TODO: check response for failure
  
        const jsonData = await response.json();
        const reformatted = {
          query: {
            pages: {}
          }
        };
        reformatted.query.pages[jsonData.pageid] = jsonData;
  
        return reformatted;
      } catch (error) {
        console.error("error fetching data");
        return error;
      }
    }
  
    // Uses the Wikipedia Rest API
    // Not used at the moment
    /*
    async fetchData2(text) {
      const encoded = encodeURIComponent(text);
      console.debug("encoded:", encoded);
      const endPoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
      const response = await fetch(endPoint);
      const jsonData = await response.json();
      console.debug("fetchData2:", jsonData);
      return jsonData;
    } */
  
    static buildURL(endPoint, params) {
      const url = new URL(endPoint);
  
      Object.entries(params).forEach(([key, value]) => {
        console.debug("entry:", key, value);
        url.searchParams.append(key, value);
      });
  
      console.debug("url:", url);
      return url;
    }
  }