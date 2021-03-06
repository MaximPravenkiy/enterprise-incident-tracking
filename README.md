# ISCANDER is a system for creating and tracking incidents at IT enterprises :notebook:
The application is available here https://enterprise-incident-tracking.herokuapp.com/login

## How to use :keyboard:
Before using the system, you will need to log in to the system. <br>
If you don't have an account yet, then you will need to register.

##### _Rules for registration_
- All fields must be filled!
- "Full Name" - field can't contain numbers and special characters
- "Login" - field can't contain spaces
- "Password" - must be at least 6 characters long

When entering the system, there is an option to select "remember me", which will allow you to stay in the system for a long time.

If you have forgotten your password, you can restore it by clicking "Forgot password". After that, in the window that opens, you will need to indicate your login, enter a new password and confirm the newly entered password. 

#### List of incidents
After authorization you will see a list of incidents that relate directly to you. <br>
If you are a new user, the list will be empty. Then you need to [create an incident](https://github.com/MaximPravenkiy/enterprise-incident-tracking#create-new-incident-white_check_mark) yourself or wait until an incident is assigned to you.

##### _Additional features_
- You can delete an extra incident by clicking the button "Delete" :x:
- You can edit an incorrect incident by clicking the button "Edit". When editing an incident, you must adhere to the [same rules](https://github.com/MaximPravenkiy/enterprise-incident-tracking#rules-for-creating-an-incident) as when creating an incident. :recycle:
- You can also see a list of all incidents by clicking on the button "Показать все инциденты" in the upper left corner of the screen. This button serves as a toggle between showing yours and all incidents. :books:
- If there are more than 4 incidents in the list, then under the list of incidents you can switch between pages to view other incidents. :next_track_button:

#### Create new Incident :white_check_mark:
To create a new incident, click on the button "Создать новый инцидент" in the upper left corner of the screen. <br>

##### _Rules for creating an incident_
- When creating an incident, you must fill in the following fields: "Incident Name", "Area", "Due Date", "Description", "Priority", "Status". 
- The "Assignee" field is optional. 
- "Start date" - filled in automatically
- "Due date" - date can't be selected earlier "Start date"
- "Incident Name" - can't contain more than 30 symbols

If you close the window for creating an incident, then after reopening the window, all the data that you entered will be saved.

After filling in all the fields, click the button "Создать".

#### Completion of work
When you have finished working with the system, you can log out by clicking on the button "Logout" in the upper right corner.
