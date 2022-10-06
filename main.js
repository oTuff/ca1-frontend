import "./style.css";
import personFacade from "./personFacade.js";

document.getElementById("all-content").style.display = "block";

/*
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
// const text = document.getElementById("text");
const phoneNumber = document.getElementById("person_phone_number");
const button = document.getElementById("person_id_button");
const result = document.getElementById("persondata");
const persons = document.getElementById("allUserRows");
console.log(button);
console.log(result);

const renderPerson = (json) => {
    return json.map((curr) => `<tr><td>${curr.id}</td>
                                <td>${curr.email}</td>
                                <td>${curr.firstName}</td>
                                <td>${curr.lastName}</td>
                                <td>| ${curr.address.zip}</td>
                                <td>${curr.address.street} |</td>
                                <td>${curr.phones.map(currp => `${currp.phoneNumber}-${currp.description}`)}</td>
                                <td>${curr.hobbies.map(currh => `<br>* <a href="${currh.wikiLink}">${currh.name}</a>, ${currh.category}, ${currh.type}`)}</td>
                                </tr>
`)
};
const renderPerson2 = (json) => {
    return json.map((curr) => `<tr><td>${curr.id}</td>
                                <td>${curr.email}</td>
                                <td>${curr.firstName} ${curr.lastName}</td>
                                <td>${curr.address.zip} ${curr.address.street}</td>
                                <td>${curr.phones.map(currp => `${currp.phoneNumber}-${currp.description}`)}</td>
                                <td>${curr.hobbies.map(currh => `<br><a href="${currh.wikiLink}">${currh.name}</a>, ${currh.category}, ${currh.type}`)}</td>
    </tr>`).join("")
};

button.addEventListener("click", () => {
    const number = phoneNumber.value;
    // const url = "https://markchomin.com/ca1/api/person/phone/"+number;
    // fetch(url)
    // .then((res) => res.json())
    //the above lines are replaced by the personFacade:
    personFacade.getPersonByPhone(number)
        .then((data) => {
            console.log("data", data);
            result.innerHTML = renderPerson(data);
        });
});

personFacade.getAllPersons().then((data) => {
    console.log("data", data)
    persons.innerHTML = renderPerson2(data)
})
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
