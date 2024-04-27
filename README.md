<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Azerofth/PC-omposer">
    <img src="frontcomposer/src/assets/logo/PC-omposer logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">PC-omposer</h3>

  <p align="center">
   Learn to build your computer like how musicians compose their music!
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
PC-omposer is a web application that aims to teach users on how easy it is to build a computer and every one can do it too.
Disclaimer: This is a website used for the purpose of Final Year Project (FYP). This project was generated with [Angular CLI version 17.1.2]() and [Django 5.0.1]().

## Features
```
1. It consists of a adventure based storyline that was heavily inspired by NZXT BLD Kit.
2. A parts configurator that allows users to post their computers that they have "composed".
3. A prototype prompt-to-build system where it takes the user's input and find specific words 
  and display a machine that allows users to download a PDF copy of it.
```

### Built With

* [![Angular]][Angular-url]
* [![Django]][Django-url]
* [![PostgreSQL]][PostgreSQL-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<!-- GETTING STARTED -->
## Getting Started

To get started, you first need to understand the project folder structure for installations.
```
├── backcomposer                 # Django, PostgreSQL backend folder
├── datasets                     # Computer datasets folder
├── frontcomposer                # Angular website folder with image assets
├── .gitignore
├── LICENSE
└── README.md
```

### Prerequisites

Ensure that you have the following installed
* [PostgreSQL](https://www.postgresql.org/download/)
* [Node.js](https://nodejs.org/en/download/)
* [Python](https://www.python.org/downloads/)

### Installation

1. Clone the repo and install the dependencies for the Frontend (Angular Project)
   ```sh
   git clone https://github.com/Azerofth/PC-omposer.git && cd frontcomposer && npm install
   ```
3. Locate to the Backend directory and install dependencies
   ```sh
   cd backcomposer
   pip install -r requirements.txt
   ```

## Set up
This project needs two separate terminals to run the Angular server and the Django server.
1. In the frontcomposer directory, run `ng serve --open` in a terminal. Any changes to the source files will automatically refresh the application
2. Open pgAdmin 4 and login with your credentials. Create a new database named `pc-omposer` and keep everything defaulted. (Minimise pgAdmin 4)
3. In the backcomposer directory, go to the `settings.py` file. Scroll until you see DATABASES. Change your USERNAME, PASSWORD to what you had setup during the PostgreSQL installation.
5. Open a new terminal in the same IDE window, and run `py manage.py makemigrations` to create the models to be migrated into PostgreSQL and run `py manage.py migrate`.
6. Create a super user with `py manage.py createsuperuser` (This is for admin)
7. Go back to pgAdmin 4 and follow the steps accordingly `pc-omposer > Schemas > public > tables`.
8. You should now see alot of tables, the data we are importing will be for the tables that have `myapi` in front of them.
9. Example: Right click on `myapi_cpu > import/export data`. Choose import and locate the data csv name `CPU_Data` for filename. REMEMBER: Go to columns tab in pgAdmin and remove 'cpu_id'.
10. Repeat step 8-9 for every file that has `myapi` except `my_api_user` and `my_api_computer` 
11. Once completed, run `py manage.py runserver`. Backend is ready when `Starting development server at http://127.0.0.1:8000 ` is shown in the terminal.

<!-- ROADMAP -->
## Roadmap

- [ ] More accurate configurations based on user query

See the [open issues](https://github.com/Azerofth/PC-omposer/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Any contributions made are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/Azerofth/PC-omposer/blob/main/LICENSE.txt) for more information.

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

The following materials are the ones that allowed this project to be completed

* [PCPartPicker Dataset](https://github.com/docyx/pc-part-dataset)
* [UserBenchmark Dataset](https://www.userbenchmark.com/page/developer)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt)
* [NZXT BLD Guidebook](https://www.datocms-assets.com/34299/1634612699-bld-kit-illustrated-guidebook.pdf)

[Angular]: https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Django]: https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white
[Django-url]: https://www.djangoproject.com/
[PostgreSQL]: https://img.shields.io/badge/postgresql-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]:https://www.postgresql.org/

