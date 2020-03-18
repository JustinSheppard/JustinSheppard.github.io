var request = new XMLHttpRequest()

request.open('GET', 'https://api.overwatchcontenders.com/teams', true)

request.onload = function(){
	var data = JSON.parse(this.response)
	
	data.forEach(movie => {
		
  console.log(movie.title)
})
}

request.send();

