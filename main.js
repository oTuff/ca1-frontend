import "./style.css";

document.getElementById("all-content").style.display = "block";

/*
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
// const text = document.getElementById("text");
const personId = document.getElementById("person_id");
const button = document.getElementById("person_id_button");
const result = document.getElementById("persondata");
console.log(personId);
console.log(button);
console.log(result);

const renderPerson = (json) => {
    // return `email: ${json.email}</br>
    //   firstname: ${json.firstName}</br>
    //   lastname: ${json.lastName}</br>
    //   `;
    return json.map((curr) => `<tr><td>${curr.id}</td>
                                <td>${curr.email}</td>
                                <td>${curr.firstName}</td>
                                <td>${curr.lastName}</td>
                                <td>${curr.address.zip}</td>
                                <td>${curr.address.street}</td>
                                <td>${curr.phones.map(currp => `${currp.phoneNumber} ${currp.description}`)}</td>
                                <td>${curr.hobbies.map(currh => `${currh.name} ${currh.wikiLink}`)}</td>
                                </tr>
`)
};

button.addEventListener("click", () => {
    const id = personId.value;
    //   result.innerText = "id:" + id;
    // fetch('https://markchomin.com/ca1/api/person/phone/11223344')
    //     .then(res=> {
    //       res.json()
    //       console.log("ok:", res.ok)
    //       console.log("status: ", res.status)
    //       console.log("text: ", res.statusText)
    //     })
    //     .then(data => console.log(data.name))

    const url = "https://markchomin.com/ca1/api/person/phone/11223344";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data);
            result.innerHTML = renderPerson(data);
        });
});

/* JS For Exercise-2 below */

/* JS For Exercise-3 below */

/*
 If you do not understand the code below, don´t worry, it is not necessary for completing the exercises
*/

function hideAllShowOne(idToShow) {
    document.getElementById("about_html").style = "display:none";
    document.getElementById("ex1_html").style = "display:none";
    document.getElementById("ex2_html").style = "display:none";
    document.getElementById("ex3_html").style = "display:none";
    document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
    const id = evt.target.id;
    switch (id) {
        case "ex1":
            hideAllShowOne("ex1_html");
            break;
        case "ex2":
            hideAllShowOne("ex2_html");
            break;
        case "ex3":
            hideAllShowOne("ex3_html");
            break;
        default:
            hideAllShowOne("about_html");
            break;
    }
    evt.preventDefault();
}

document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");
