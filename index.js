const axios = require('axios'),
      jsdom = require('jsdom'),
      { JSDOM }=  jsdom,
      url = 'https://github.com/mertcanaltin';
      axios.get(url)
        .then (response => {
          getNodes(response.data);
        })
        .catch(error => {
          console.error(error);
        })
        const getNodes = html => {
  const data = [],
  dom = new JSDOM(html),
  news = dom.window.document.querySelectorAll('.repo');
  news.forEach(item => {
    data.push({
      title: item.getAttribute('title'),
      link: item.getAttribute('href')
    })
  });
  console.log(data);
}
