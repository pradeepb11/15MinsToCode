// digital to analogs
function digitalAnalogs() {
    // console.log('Working')

    let digiang = document.getElementById('digiang');
    digiang.addEventListener('click', function() {
        let inputA = document.getElementById('digital').value;
        let resultA;
        console.log(inputA);
        console.log('Click');
        console.log(inputA);
        resultA = inputA * 5 / 1024;
        console.log(resultA)
        result = document.getElementById('result').innerHTML = resultA.toFixed(2);
        console.log(result.toFixed(2))


    })

}



digitalAnalogs();