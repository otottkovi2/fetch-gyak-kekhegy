window.onload = () => {
    let json;
    fetch("api/chat",{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(res => res.json().then(j => {
        document.getElementById("kerdezo-szoveg").innerText = j.kerdezoSzoveg
    document.getElementById("admin-szoveg").innerText = j.adminSzoveg
    }))
    
}

function kerdesBekuldese(){
    var txt = document.getElementById("felhasznalo-kerdes").value
    let uzi = {
        "uzenet":txt
    }
    fetch("/api/kerdes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(uzi)
    }).then((res) => {
        if(!res.ok) {
            console.error("Az üzenet nem érkezett meg a szerverre. Válaszkód: " + res.status)
            return;
        }
        document.getElementById("felhasznalo-kerdes").value = ""
        alert("Kérdését megkaptuk, munkatársunk hamarosan válaszol!")
        res.json().then((j) => console.log(j))
    })
}
