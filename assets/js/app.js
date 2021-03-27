function getRandomInt(min, max) 
{
    min = Math.ceil(min) ,max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
    
document.addEventListener("DOMContentLoaded", (event) => 
{
    const grid = document.getElementsByClassName("grid")
    const t = setInterval(updateimages, 1000)
    function updateimages() 
    {
        image = document.getElementsByTagName('img')[getRandomInt(0,25)]
        fetch('https://picsum.photos/1920/1080').then(function(response)
        {
            image.animate([
            {
               transform: 'rotate(360deg)'
            }], 
            {
               duration: 400,
               easing:'ease-in-out',
               iterations: 1
            })
            image.src = response.url
        })
        .catch(function(error)
        {
            console.log('some thing bad happend : '+error)
        })
    }
   
})