  // Add event listener for when the user scrolls the page
  window.addEventListener('scroll', function() {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
    // Get the current vertical scroll position of the page
    const scrollPosition = window.scrollY;
    // Get a reference to the parallax section
    const parallaxSection = document.querySelector('.parallax');
    // Calculate the distance of the parallax section from the top of the page
    const parallaxSectionTop = parallaxSection.offsetTop;
    // Calculate the distance of the bottom of the parallax section from the top of the page
    const parallaxSectionBottom = parallaxSectionTop + parallaxSection.offsetHeight;
    // Calculate the amount of overlap between the viewport and the parallax section
    const overlap = Math.max(0, Math.min(viewportHeight, parallaxSectionBottom) - Math.max(0, parallaxSectionTop + viewportHeight));
    // Calculate the ratio of overlap to the height of the viewport
    const overlapRatio = overlap / viewportHeight;
    // Set the parallax effect
    parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
  
  const form = document.querySelector("#form")
  const submitButton = document.querySelector("#submit")
  const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
         alert('Success!', response)
         submitButton.disabled = false
        })
      .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false

      }
      )
  })
