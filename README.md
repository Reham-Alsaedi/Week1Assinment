Week1/ 
├── components/
 │
 ├── Form.js 
 └── UserList.js 
├── services/ 
 │ 
 └── app.js 
├── utils/
 │ 
 └── validation.js 
├── index.html 
├── style.css 
├── main.js 
└── tailwind.config.js

○ Project Overview
 fully functional registration system, using HTML,CSS, tailwind CSS, Javascript and Typescript.
 
○ Setup Instructions
1.Clone the Repository
2.Navigate to the Project Directory
3.Install Dependencies
4.Set Up Tailwind CSS
5.Create the configuration files if they don’t exist
6.Add the paths to your template files in the tailwind.config.js:
module.exports = {
  content: ['./index.html', './components/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}
7.Build the Project
8.Testing

○ Features Implemented

 1.Design registration system that take input: 
  ○ Company Name
  ○ Commercial Registration Number
  ○ Email
  ○ Phone Number
  ○ Password & Confirm Password
  ○ Address Fields (City, Region, Zip Code)
  ○ Business Type (Dropdown Selection)
  ○ Terms & Conditions Checkbox
Then: Submit Button (The submit button validate that all fields are filled in correctly:
  ○ Company Name (is filled)
  ○ Commercial Registration Number (is filled)
  ○ Email (is filled and correct format)
  ○ Phone Number (is filled)
  ○ Password & Confirm Password (is filled, strong and confirm)
  ○ Address Fields (City, Region, Zip Code) (is filled)
  ○ Business Type (Dropdown Selection) (selected)
  ○ Terms & Conditions Checkbox) (must agree)
2.Fetch company registration details from an external API


○ Technologies Used:

  ● HTML5 (Semantic elements)
  ● CSS (TailwindCSS)
  ● JavaScript 
  ● TypeScript
  ● Integration with an external API for data processing
  
○ How to Contribute:

1.Fork the Repository
2.Clone the Forked Repository
3.Create a New Branch
4.Make Your Changes
5.Test Your Changes
6.Commit Your Changes
7.Push Your Changes
8.Submit a Pull Request


