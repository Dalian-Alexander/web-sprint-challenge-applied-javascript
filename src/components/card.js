import axios from "axios";
import { articles } from "../mocks/data";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //creating elements
  const card = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgContainer = document.createElement('div')
  const authorPic = document.createElement('img')
  const authorCredit = document.createElement('span')

  //appending elements based on markup
  card.appendChild(headlineDiv)
  card.appendChild(authorDiv)
  authorDiv.appendChild(imgContainer)
  imgContainer.appendChild(authorPic)
  authorDiv.appendChild(authorCredit)

  //adding attributes
  card.classList.add('card')
  headlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainer.classList.add('img-container')
  
  //adding photo & textcontent
  authorPic.src = article.authorPhoto
  headlineDiv.textContent = article.headline
  authorCredit.textContent = 'By ' + article.authorName

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  //adding DOM entry point
  const cardEntry = document.querySelector(selector)

  //fecting axios data
  const obtainArticle = axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(({data}) => {
    //creating variables for each article obj
    const javascriptArr1 = data.articles.javascript[0]
    const javascriptArr2 = data.articles.javascript[1]
    const javascriptArr3 = data.articles.javascript[2]
    const javascriptArr4 = data.articles.javascript[3]

    const bootstrapArr1 = data.articles.bootstrap[0]
    const bootstrapArr2 = data.articles.bootstrap[1]
    const bootstrapArr3 = data.articles.bootstrap[2]
    
    const jqueryArr1 = data.articles.jquery[0]
    const jqueryArr2 = data.articles.jquery[1]
    const jqueryArr3 = data.articles.jquery[2]

    const nodeArr1 = data.articles.node[0]
    const nodeArr2 = data.articles.node[1]

    const techArr1 = data.articles.technology[0]
    const techArr2 = data.articles.technology[1]
    const techArr3 = data.articles.technology[2]
    
    //appending each article obj
    cardEntry.appendChild(Card(javascriptArr1))
    cardEntry.appendChild(Card(javascriptArr2))
    cardEntry.appendChild(Card(javascriptArr3))
    cardEntry.appendChild(Card(javascriptArr4))

    cardEntry.appendChild(Card(bootstrapArr1))
    cardEntry.appendChild(Card(bootstrapArr2))
    cardEntry.appendChild(Card(bootstrapArr3))

    cardEntry.appendChild(Card(jqueryArr1))
    cardEntry.appendChild(Card(jqueryArr2))
    cardEntry.appendChild(Card(jqueryArr3))

    cardEntry.appendChild(Card(nodeArr1))
    cardEntry.appendChild(Card(nodeArr2))
    cardEntry.appendChild(Card(techArr1))
    cardEntry.appendChild(Card(techArr2))
    cardEntry.appendChild(Card(techArr3))
    
  })
}

export { Card, cardAppender }
