google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);




function drawChart(foodName) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '647bf9399cmshdafe3276f788354p1b8af0jsn5771fe674b27',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
    };



    fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${foodName}`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['sugar/gm', response.items[0].sugar_g],
                ['fiber/gm', response.items[0].fiber_g],
                ['sodium/mg', response.items[0].sodium_mg],
                ['potassium/mg', response.items[0].potassium_mg],
                ['Saturated Fat/gm', response.items[0].fat_saturated_g],
                ['Total Fat/gm', response.items[0].fat_total_g],
                ['cholesterol/mg', response.items[0].cholesterol_mg],
                ['protein/gm', response.items[0].protein_g],
                ['carbohydrates_total_g', response.items[0].carbohydrates_total_g]

            ])




            var options1 = {
                title: `${response.items[0].name}`,
                pieSliceText: 'label',
                pieStartAngle: 100,
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options1);
            fat_total.innerHTML = `${response.items[0].fat_total_g} gm `
            serving_size.innerHTML = `${response.items[0].serving_size_g} gm`
            calories.innerHTML = `${response.items[0].calories} cal`
            saturated_fat.innerHTML = `${response.items[0].fat_saturated_g} gm`
            cholestrol.innerHTML = `${response.items[0].cholesterol_mg} mg`
            sodium.innerHTML = `${response.items[0].sodium_mg} mg`
            total_carbs.innerHTML = `${response.items[0].carbohydrates_total_g} gm`
            sugars.innerHTML = `${response.items[0].sugar_g} gm`
            protein.innerHTML = `${response.items[0].protein_g} gm`






        })








};




const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;

    drawChart(inputValue)
    document.getElementById("piechart").style.display = "block";


});





