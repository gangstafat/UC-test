jQuery(document).ready(function($){$(".toggle-comments").on("click",function(e){e.preventDefault(),$(".panel").addClass("is-visible")}),$(".panel").on("click",function(e){($(e.target).is(".panel")||$(e.target).is(".panel-close"))&&($(".panel").removeClass("is-visible"),e.preventDefault())}),$("#indicator-select").selectize({searchField:["name","value"],options:[{name:"Access to electricity",value:"(% of population)"},{name:"Adequacy of social insurance programs",value:"(% of total welfare of beneficiary households)"},{name:"Adjusted savings: net forest depletion",value:"(current US$)"},{name:"CO2 intensity",value:"(kg per kg of oil equivalent energy use)"},{name:"Child employment in agriculture",value:"(% of economically active children ages 7-14)"}]}),$("#year-from-select").selectize(),$("#year-to-select").selectize(),$("#country-select").selectize({maxItems:4,items:[1,2],plugins:["remove_button"]}),$("#indicator-list").on("click",function(e){e.preventDefault(),$(".indicator-selector").toggleClass("active"),$(".indicator-list").toggleClass("none"),"keyboard_arrow_down"===$("#arrow").text()?$("#arrow").text("keyboard_arrow_up"):$("#arrow").text("keyboard_arrow_down")})});