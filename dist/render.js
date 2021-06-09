class Render {
    constructor() {

    }

    renderData = function(cities) {
        const source = $("#cities-template").html()
        const template = Handlebars.compile(source)
        let citySheet = template({ cities })
        $(".weathersCities").empty()
        $(".weathersCities").append(citySheet)
    }
    changeIcon(object, saved) {
        if (!saved) {
            $(object).removeClass().addClass("fa fa-trash")
        } else {
            $(object).removeClass().addClass("fa fa-save")
        }
    }
}