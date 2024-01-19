    const form = document.getElementById("form");
    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB")

    function valIdar(campoA, campoB) {
        return campoB > campoA;        
    }
    //criar evento
    form.addEventListener("submit", function(e){
        e.preventDefault();

        let validarForm = valIdar(campoA.valueAsNumber, campoB.valueAsNumber)
        if(validarForm){
            alert ("Campo B é maior que o Campo A")
        } else {
            alert("Campo B deve ser maior que o Campo A")
        }
        
        })

    