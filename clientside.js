document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault() // Prevent default navigation behavior
      const url = this.getAttribute('href') // Get the URL from the link

      // Check if the link has a custom attribute for downloa
      // Navigate to the URL if it's not a download link
      window.location.href = url
    })
  })
})

function getRandomImage () {
  window.location.reload() // Reload the page to get another random image
}

document.getElementById('searchButton').addEventListener('click', function () {
  const searchTerm = document.getElementById('searchInput').value
  // Redirect to the search route with the search term as a query parameter
  window.location.href = '/gallery?search=' + searchTerm
})
