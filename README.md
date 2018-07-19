# valhalla-challenge

This project uses node and npm package manager. So make sure to have them installed in your machine.

<h3>Steps to run the module</h3>
 Once you clone the project please follow the steps to run the module
 
<ul>
  <li>npm install - All the required dependencies will be downloaded</li>
  <li>npm run dev - This will start both backend and front end services</li>
</ul>

<h2>Backend</h2>
<ul>
  <li>App will be running on <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a></li>
  <li>Get list of cards - <a href='http://localhost:3000/api/cards' target='_blank'>http://localhost:3000/api/cards</a></li>
  <li>Get single card by id - <a href='http://localhost:3000/api/cards/1' target='_blank'>http://localhost:3000/api/cards/:cardId</a></li>
  <li>Search Cards - <a href='http://localhost:3000/api/cards/:cardId' target='_blank'>http://localhost:3000/api/cards/:cardId</a></li>
  Ex: <a href='http://localhost:3000/api/cards/2' target='_blank'>http://localhost:3000/api/cards/2</a></li>
  <li>Get single card by id - <a href='http://localhost:3000/api/cards/search/:searchKey' target='_blank'>http://localhost:3000/api/cards/search/:searchKey</a></li>
  Ex: <a href='http://localhost:3000/api/cards/search/javascript' target='_blank'>http://localhost:3000/api/cards/search/javascript</a></li>
  <li>Filter card by type(Backend/Frontend) - <a href='http://localhost:3000/api/cards/filter/:filterKey' target='_blank'>http://localhost:3000/api/cards/filter/:filterKey</a></li>
  Ex: <a href='http://localhost:3000/api/cards/filter/Backend' target='_blank'>http://localhost:3000/api/cards/filter/Backend</a></li>
</ul>
<h6>Note: Data is served from cards.json file provided in the mocks folder of the project.</h6>

<h2>Frontend</h2>
<ul>
  <li>App will be running on <a href='http://localhost:8080' target='_blank'>http://localhost:8080</a></li>
  <li>You get the home page opened and can explore the features implemented</li>
</ul>
