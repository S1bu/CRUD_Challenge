// let blogsCon = document.querySelector('#blogs')

let blogs = [
{   id:1,
    item_image: 'https://i.postimg.cc/1XZ1LNdp/wta.png',
    item_name: 'Womans Tennis Association',
    item_text: '',
    item_link: 'fcrfchfucfcf',

},{
    id: 2,
    item_image:'https://i.postimg.cc/mkSJJpCs/socer.png',
    item_name: 'Premier League Soccer',
    item_text: 'cfzx',
    item_link: 'fcrfchfucfcf',

},
{
    item_image: '',
    item_name: 'Real GM',
    item_text: 'everuhieubgitegtryny',
    item_link: 'fcrfchfucfcf',

},
{
    item_image: '',
    item_name: 'Brix',
    item_text: 'everuhieubgitegtryny',
    item_link: 'fcrfchfucfcf',

},
{
    item_image: '',
    item_name: 'Womans Tennis Association',
    item_text: 'everuhieubgitegtryny',
    item_link: 'fcrfchfucfcf',

},

]

let output = document.querySelector('.container');

//  output.innerHTML =`
//  <h1>Taff</h1>
//  `
 blogs.forEach((show) => {
    output.innerHTML+=
    `
   <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${show.item_image}" width="300px" height="300px" alt="Slam">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${show.item_name}</h5>
              <p class="card-text">${show.item_text}</p>
              <a href="${show.item_link}"><button class="btn">Visit</button></a>
            </div>
          </div>
        </div>
      </div>
  
   `
   
 });
   

