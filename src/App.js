import React from 'react';
// import Octokit from '@octokit/rest';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  // fetch('https://api.github.com/search/users?q=felah').then(function (response) {
  //   // The API call was successful!
  //   return response.json();
  // }).then(function (data) {
  //   // This is the JSON from our response
  //   console.log(data);
  // }).catch(function (err) {
  //   // There was an error
  //   console.warn('Something went wrong.', err);
  // });

  // const octokit = new Octokit({
  //   auth: "bbbd46db848e5bb46c1a4bda108b368fac3bcf62"
  // });

  // octokit.repos
  // .listForOrg({
  //   org: "octokit",
  //   type: "public"
  // })
  // .then(({ data }) => {
  //   // handle data
  //   console.log('octo', data)
  // });

  // octokit.search.users({
  //   q: "felah"
  // })
  // .then(({data}) => {
  //   console.log('users',data.items)
  //   data.items.forEach((item, id) => {
  //     console.log(item, id);
  //   });
  // })

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="content-wrapper">
        <div className="search-wrapper">
          <SearchBar placeholder="username"/>
        </div>
        <div className="user-profile-wrapper">
        </div>
      </div>

    </div>
  );
}

export default App;
