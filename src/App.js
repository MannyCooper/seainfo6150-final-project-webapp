import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";

import Header from "./components/Header/Header.jsx";

import Home from "./pages/Home/Home.jsx";
import PostArticle from "./pages/PostArticle/PostArticle.jsx";

import Archives from "./pages/Archives/Archives.jsx";
import Tags from "./pages/Tags/Tags.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Error from "./pages/Error/Error.jsx";
import Me from "./pages/Me/Me.jsx";

import Footer from "./components/Footer/Footer.jsx";

import globalStyles from "./global.module.css";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo6332316.mockable.io/zifanan");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  const homeTitle = { __html: 'Latest Posts<span role="img" aria-label="Star">💫</span>' };

  return isEmpty(fetchedData) ? null : (
    <>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home posts={Object.values(fetchedData)} title={homeTitle} />} />
        <Route
          path="/post/:slug"
          exact
          render={({ match }) => {
            return fetchedData ? <PostArticle post={fetchedData[match.params.slug]}
            /> : null
          }} />
        <Route path="/tags" exact render={() => <Tags posts={Object.values(fetchedData)} />} />
        <Route
          path="/tags/:tag"
          exact
          render={({ match }) => {
            let filterPosts = {}
            Object.values(fetchedData).forEach(post => {
              if (post.Tags.includes(match.params.tag)) {
                filterPosts[post.Slug] = post
              }
            })
            return fetchedData ? <Home posts={Object.values(filterPosts)} title={{ __html: 'Tag: ' + match.params.tag }}
            /> : null
          }} />
        <Route path="/categories" exact render={() => <Categories posts={Object.values(fetchedData)} />} />
        <Route
          path="/categories/:category"
          exact
          render={({ match }) => {
            let filterPosts = {}
            Object.values(fetchedData).forEach(post => {
              console.log()
              if (post.Category === match.params.category) {
                filterPosts[post.Slug] = post
              }
            })
            return fetchedData ? <Home posts={Object.values(filterPosts)} title={{ __html: 'Category: ' + match.params.category }}
            /> : null
          }} />
        <Route
          path="/archives"
          exact
          render={() => <Archives posts={Object.values(fetchedData)} />}
        />
        <Route path="/me" exact component={Me} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
