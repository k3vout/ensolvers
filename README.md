# Ensolvers

This is project is about a folder creation to group to-do items with a previous login authentication.

![imagen](https://user-images.githubusercontent.com/39852288/141689549-95d05cf3-d588-435d-8ea3-d9e30c837feb.png)

## Database diagram

<img width="595" alt="imagen" src="https://user-images.githubusercontent.com/39852288/141688499-4286d465-e912-4aba-a0b8-3682113709f4.png">

## Live Version

  [Ensolvers-Todo](https://ensolvers-frontend-todo.herokuapp.com/)

## Built With

- Ruby on Rails
- React

## Dependencies
  ### Backend
  - Ruby 3.0.1
  - Rails 6.1.4.1
  - PostgreSQL 14.0

  ### Frontend
  - Node 16.3.0
  - Npm 7.15.1

## Getting Started

### Installation and initialization (locally)

1. To install and initialize the backend run the file run_backend.sh

   ```sh
   sh run_backend.sh
   ```
1. To install and initialize the frontend run the file run_frontend.sh

   ```sh
   sh run_frontend.sh
   ```

### Usage

   #### Local Version
   
   1. Change the baseApiUrl in the file utils.js in the folder `/ensolvers-frontend/src/utils` to be `localhost:3001/api/v1`
   2. Access to the website in a browser with the following link `localhost:3000`

   #### Live Version

   1. Login in live version with provided credentials and start creating your folders and tasks, but if you want to create your on user:
   
   Send a POST method to `https://ensolvers-backend-todo.herokuapp.com/api/v1/users`
   with the JSON body:

   ```sh
      {
        "user": {
                  "email": "someuser@gmail.com",
                  "password": "password",
                  "password_confirmation": "password"
                }
      }
   ```
   and use your created user credentials in the live version.

## Acknowledgements

- React Routes
- Authentication with Rails
- Styled Components
- Rails database modeling

## Author

👤 **Kevin**

- GitHub: [@sevinchek](https://github.com/sevinchek)
- Twitter: [@sevinchek](https://twitter.com/sevinchek)
- LinkedIn: [LinkedIn](https://linkedin.com/in/sevinchek)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) licensed.
