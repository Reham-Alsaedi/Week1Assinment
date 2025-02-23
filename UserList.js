import { fetchUsers } from "../services/api.js";

export class UserList {
    constructor() {
        this.container = document.createElement("div");
        this.container.className = "flex flex-col items-center space-y-4 p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg border";

        // Button style tailwind
        this.button = document.createElement("button");
        this.button.textContent = "Display Company Owner";
        this.button.className = "bg-indigo-400 hover:bg-indigo-500 text-white font-bold rounded-lg py-2 px-4 max-w-[400px]";
        this.button.addEventListener("click", () => this.loadCompany());

        // Loading text
        this.loading = document.createElement("span");
        this.loading.textContent = "Loading...";
        this.loading.className = "text-gray-500 mt-2 hidden";

        // Create a function to add labeled input fields
        const createLabeledInput = (labelText, inputType, placeholder) => {
            const label = document.createElement("label");
            label.textContent = labelText;
            label.className = "text-gray-700"; // Tailwind text color for label
            
            const input = document.createElement("input");
            input.type = inputType;
            input.placeholder = placeholder;
            input.readOnly = true;
            input.className = "shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray max-w-[400px]";
            
            const wrapper = document.createElement("div");
            wrapper.className = "w-full"; // Full width for the wrapper
            wrapper.appendChild(label);
            wrapper.appendChild(input);

            return { input, wrapper };
        };

        // Create labeled input fields
        const nameField = createLabeledInput("Name:", "text", "Name");
        const emailField = createLabeledInput("Email:", "email", "Email");
        const cityField = createLabeledInput("City:", "text", "City");
        const zipcodeField = createLabeledInput("Zipcode:", "text", "Zipcode");
        const phoneField = createLabeledInput("Phone:", "text", "Phone");
        const companyField = createLabeledInput("Company Name:", "text", "Company Name");

        // Assign input fields to class properties
        this.nameInput = nameField.input;
        this.emailInput = emailField.input;
        this.cityInput = cityField.input;
        this.zipcodeInput = zipcodeField.input;
        this.phoneInput = phoneField.input;
        this.companyInput = companyField.input;

        // Append the wrappers to the container
        this.container.appendChild(nameField.wrapper);
        this.container.appendChild(emailField.wrapper);
        this.container.appendChild(cityField.wrapper);
        this.container.appendChild(zipcodeField.wrapper);
        this.container.appendChild(phoneField.wrapper);
        this.container.appendChild(companyField.wrapper);
    }

    async loadCompany() {
        this.loading.classList.remove("hidden");
        try {
            const users = await fetchUsers();
            if (users.length > 0) {
                const user = users[0]; 
                this.nameInput.value = user.name;
                this.emailInput.value = user.email;
                this.cityInput.value = user.address.city;  // Set city
                this.zipcodeInput.value = user.address.zipcode;  // Set zipcode
                this.phoneInput.value = user.phone;  // Set phone
                this.companyInput.value = user.company.name;  // Set company name
            } else {
                this.nameInput.value = "No user found";
                this.emailInput.value = "";
                this.cityInput.value = "";
                this.zipcodeInput.value = "";
                this.phoneInput.value = "";
                this.companyInput.value = "";
            }
        } catch (error) {
            this.nameInput.value = "Error fetching user";
            this.emailInput.value = "";
            this.cityInput.value = "";
            this.zipcodeInput.value = "";
            this.phoneInput.value = "";
            this.companyInput.value = "";
        } finally {
            this.loading.classList.add("hidden");
        }
    }

    render(parent) {
        this.container.appendChild(this.button);
        this.container.appendChild(this.loading);
        parent.appendChild(this.container);
    }
}



