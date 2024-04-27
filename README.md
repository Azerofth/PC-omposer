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
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
PC-omposer is a web application that aims to teach users on how easy it is to build a computer and every one can do it too.
It consists of a adventure based storyline that was heavily inspired by NZXT BLD Kit.
A parts configurator that allows users to post their computers that they have "composed".
A prototype prompt-to-build system where it takes the user's input and find specific words and display a machine that allows users to download a PDF copy of it.
Disclaimer: This is a website used for the purpose of Final Year Project (FYP). This project was generated with Angular CLI version 17.1.2 and Django 5.0.1.



### Built With

* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Django][Django.com]][Django-url]

<!-- GETTING STARTED -->
## Getting Started

To get started, you first need to understand the project folder structure for installations.

### Prerequisites

├── backcomposer                 # Django, PostgreSQL backend folder
├── frontcomposer                # Angular website folder with image assets
├── .gitignore
└── README.md

This project needs two separate terminals to run the Angular server and the Django server.


### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Azerofth/PC-omposer.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
