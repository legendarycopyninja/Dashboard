fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=Textures&Patterns")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })