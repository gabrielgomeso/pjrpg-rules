function getRandomPowerPage() {
  fetch('../../../pages.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(pages => {
      if (!Array.isArray(pages)) {
        throw new Error('Fetched JSON is not an array');
      }
      var randomIndex = Math.floor(Math.random() * pages.length);
      var randomPage = pages[randomIndex];
      window.location.href = `/pjrpg-rules/${randomPage}`;
    })
    .catch(error => console.error('Error fetching pages:', error));
}