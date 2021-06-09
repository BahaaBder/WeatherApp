class CityManager {
    constructor() {
        this.cityData = []
    }


    getDataFromDB = function() {
        let self = this.cityData
        $.ajax({
            url: '/cities',
            type: 'get',
            async: false,
            success: function(data) {
                data.forEach(element => {
                    for (let i in this.cityData) {
                        if (this.cityData[i].name == element.name) {
                            this.cityData[i]["saved"] = true
                            return
                        }
                    }
                    self.push({...element, saved: true })
                })
            }
        });
        return self
    }
    print = function() {
        console.log(this.cityData)
    }


    getCityData = async function(city) {
        let self = this.cityData
        $.ajax({
            url: `/city/${city}`,
            type: 'get',
            async: false,
            success: function(data) {
                self.push({
                    name: data.name,
                    temperature: (data.main.temp - 273.15).toFixed(2),
                    condition: data.weather[0].main,
                    conditionPic: data.weather[0].icon,
                    saved: false
                })
            }
        });
        return self
    }




    saveCity = async function(cityNameOfSameDiv) {
        const index = this.cityData.findIndex(element => cityNameOfSameDiv == element.name)
        if (index == -1) {
            return
        }
        this.cityData[index].saved = true
        const obj = this.cityData[index]
        $.ajax({
            url: '/city',
            type: 'post',
            data: obj,
            async: false,
            success: function(response) {
                console.log(response)
            }
        });

    }


    removeCity = function(cityName) {
        const index = this.cityData.findIndex(element => cityName == element.name)
        if (index == -1) {
            return
        }
        this.cityData[index].saved = false
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            async: false,
            success: function(result) {
                console.log(result)
            }
        });


    }
}