import { renderWithTemplate } from "./utils.mjs";
import { successPageTemplate } from "./Success.mjs"
function signupPageTemplate() {
    return `<h1>Signup</h1>
            <h2>Please fill in this form to receive updates when new Pokémons are released!</h2>
            <form action="" id="signUp-form" method="post">
                <input type="text" name="user-name" placeholder=User Name">
                <input type="email" name="user-email" placeholder="Email">
                <input type="password" name="user-pass" placeholder="Password">
                <input type="button" name="signup-btn" value="Signup">
                </form>`
}

function togglePopup() {
    document.getElementById("popUp").classList.toggle("active");
}

export default class SignUp {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }
async init() {
    //Fill title with the name of the page:
    document.querySelector(".page-title").textContent = "Sign Up | PokéGen";

    //Render SignUp main:
    renderWithTemplate(signupPageTemplate(), this.mainContainer);

    //Click function:
    document.querySelector("#signup-btn").addEventListener("click", () => {
        return successPageTemplate;
    })

    }
}