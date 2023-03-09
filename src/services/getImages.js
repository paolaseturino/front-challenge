export const getImage =  () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
      let r = Math.floor(Math.random() * data.length)
      return data[r].url
      }
    );
}