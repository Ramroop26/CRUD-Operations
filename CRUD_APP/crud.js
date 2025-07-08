let FetchData=async()=>{
    let url = 'http://localhost:3000/railway'
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
    let show = document.querySelector("#ShowData")

    data.map((e)=>{
        show.innerHTML+= `
        <tr>
        <td>${e.Name}</td>
        <td>${e.Adhar}</td>
        <td>${e.CheckIn}</td>
        <td>${e.CheckOut}</td>
        <td>${e.City}</td>
        <td>${e.People}</td>
        <td>${e.price * e.People}</td>
        <td onclick="Del('${e.id}')"><button style="background-color:red;color:white">Delete</button></td>
        <td onclick="Formopen('${e.id}')"><button style="background-color:green;color:white">Update</button></td>

</tr>`
    })

}

let Del=(id)=>{
    let url = `http://localhost:3000/railway/${id}`
    fetch(url,{method:"DELETE"})

}

let ins=()=>{
    let name = document.querySelector("#name").value
    let adhar = document.querySelector("#adhar").value
    let checkin = document.querySelector("#checkin").value
    let checkout = document.querySelector("#checkout").value
    let city = document.querySelector("#city").value
    let people = document.querySelector("#people").value

    let url = 'http://localhost:3000/railway'

    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            Name:name,
            Adhar:adhar,
            CheckIn:checkin,
            CheckOut:checkout,
            City:city,
            People:people,
            price:500

        })

    })

    window.location.href="crud.html";
    return false;

}

    let Formopen=async(id)=>{
        let url = `http://localhost:3000/railway/${id}`
        let res = await fetch(url,{method:"GET"})
        let data  = await res.json()
        
        let FormData = `
           Enter Name: <input type="text" id="upname" value="${data.Name}"><br><br>
       Enter Adhar: <input type="text" id="upadhar" value="${data.Adhar}"><br><br>
       CheckIn: <input type="date" id="upcheckin" value="${data.CheckIn}"><br><br>
       checkOut: <input type="date" id="upcheckout" value="${data.CheckOut}"><br><br>
       
       <select id="ucity">
        <option value="Bhopal">Bhopal</option>
        <option value="Indore">Indore</option>
        <option value="Delhi">Delhi</option>
        <option value="Morena">Morena</option>
       </select><br><br>
      Enter Person: <input type="text" id="uppeople" value="${data.People}"><br><br>
       <input type="submit" value="Update Now" onclick="return UpdateData('${data.id}')"><br><br>
       `
 document.querySelector("#FormShow").innerHTML = FormData
    }

    let UpdateData = async(id)=>{
        let name = document.querySelector("#upname").value
        let adhar = document.querySelector("#upadhar").value
        let checkin = document.querySelector("#upcheckin").value
        let checkout = document.querySelector("#upcheckout").value
        let city = document.querySelector("#ucity").value
        let people = document.querySelector("#uppeople").value
        let price = 500
        let url = `http://localhost:3000/railway/${id}`
         fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body :JSON.stringify({
                Name:name,
                Adhar:adhar,
                CheckIn:checkin,
                CheckOut:checkout,
                City:city,
                People:people,
                Price:price
            })
        })

.then(() => {
  alert("Booking successful!");
  window.location.href = "crud.html"; // your table page
});


    }

   





    



