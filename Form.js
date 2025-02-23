import { validateForm } from "../utils/validation.js";

export class Form {
    constructor() {
        this.form = document.createElement("form");
        this.form.className = "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md";
        this.form.innerHTML = `
            <h2 class="text-2xl font-semibold mb-4">User Registration</h2>
            <div style="display: flex; flex-direction: column; gap: 4px; max-width: 400px; align-items: center; justify-content: center; flex-wrap: wrap; padding: 16px">
                <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="text" id="companyName" placeholder="Company Name">
                <span id="companyNameError" class="error"></span>
                
                <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="text" id="commercialRegNumber" placeholder="Commercial Registration Number">
                <span id="commercialRegNumberError" class="error"></span>
                
                <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="email" id="email" placeholder="example@gmail.com">
                <span id="emailError" class="error"></span>
                
                <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="tel" id="phoneNumber" placeholder="05********">
                <span id="phoneNumberError" class="error"></span>
                
                <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="password" id="password" placeholder="Password">
                <span id="passwordError" class="error"></span>
                
                <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="password" id="confirmPassword" placeholder="Confirm Password">
                <span id="confirmPasswordError" class="error"></span>
                
                <div style="display: flex; gap: 10px; margin-top: 5px;">
                    <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="text" id="city" placeholder="City">
                    <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="text" id="region" placeholder="Region">
                    <input class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" type="text" id="zipCode" placeholder="Zip Code">
                </div>
                <span id="cityError" class="error"></span>
                <span id="regionError" class="error"></span>
                <span id="zipCodeError" class="error"></span>

                <select class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" id="businessType">
                    <option value="" disabled selected>Select Business Type</option>
                    <option value="retail">Retail</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="service">Service</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                </select>
                <span id="businessTypeError" class="error"></span>

                <div class="shadow-lg hover:bg-indigo-50 border w-full py-2 px-3 text-gray" style="margin-top: 10px;">
                    <input type="checkbox" id="terms">
                    <label for="terms">I agree to the <a href="#" target="_blank">Terms & Conditions</a></label>
                </div>
                <span id="termsError" class="error"></span>

                <button class="bg-indigo-400 hover:bg-indigo-500 text-white font-bold rounded-lg py-2 px-4" type="submit">Submit</button>
            </div>
        `;

        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const companyName = document.getElementById("companyName").value.trim();
        const commercialRegNum = document.getElementById("commercialRegNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Call validation function
        const errors = validateForm(companyName, commercialRegNum, email, phoneNumber, password, confirmPassword);

        // Update error messages
        document.getElementById("companyNameError").textContent = errors.companyName || "";
        document.getElementById("commercialRegNumberError").textContent = errors.commercialRegNum || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("phoneNumberError").textContent = errors.phoneNumber || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("confirmPasswordError").textContent = errors.confirmPassword || "";

        if (!Object.values(errors).some(error => error)) {
            alert("Registration successful!");
            localStorage.setItem("user", JSON.stringify({ companyName, commercialRegNum, email, phoneNumber }));
        }
    }

    render(parent) {
        parent.appendChild(this.form);
    }
    
}
