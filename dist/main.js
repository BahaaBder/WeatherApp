const render = new Render()
const manageCities = new CityManager()

const userInput = $('.cityInput')

const loadPage = function() {
    let data = manageCities.getDataFromDB()
    render.renderData(data)
}

const handleSearch = function() {
    const cityName = userInput.val()
    manageCities.getCityData(cityName).then(val => render.renderData(val))

}
$("body").on("click", "#saveCity", function(req, res) {
    manageCities.saveCity($(this).siblings('.cityName').text())
    render.changeIcon(this, false)
})


$("body").on("click", "#deleteCity", function(req, res) {
    manageCities.removeCity($(this).siblings('.cityName').text())
    render.changeIcon(this, true)
})


loadPage()