import {Form} from "./component/Form.js"
import {UserList} from "./component/UserList.js"

const app = document.getElementById("app");

//container for the two components
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "16px"; 

// Render form and list
const formComponent = new Form();
formComponent.render(container);

const userListComponent = new UserList();
userListComponent.render(container);

app.appendChild(container);

