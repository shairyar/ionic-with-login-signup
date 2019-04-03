# Ionic starter with login and registration

This Ionic app contains the user login, signup and an additional route called articles which can only be accessed if you are logged into the app.

## Installation

```sh
npm install
```
and then run

```sh
ionic serve
```

## Usage

The bankend of this app was created in rails, you can access the backend code [here](https://github.com/shairyar/rails-api-for-ionic). But you should be able to use this app with any backend with little bit of tweeks.


## App Structure

### Pages
* All pages in this app are inside directory `app->pages`. 

* Pages folder contains 3 folders, `articles`, `authentication`, `home`. Rather than creating every page in a single directory I like to create them modular so they are easy to work with in my opinion.
* As you would have guessed by name `home` is the landing page of the app, `authentication` contains pages related to login and sign up and `articles` contains pages related to displaying the list of articles and individual articles which I will be adding soon.

### Services
* All services live inside directory `app->services`.

* Service `alert.service`, constains the code to display the alerts, rather than using the same code over and over again at different places, this is a DRY approach to keep alert in once service and call it where required.
* Service `api.service`, communicates with the backend and sends the response back to the page, this service also contacts the `URL` that you can use to assign your backend api url.
* Service `auth-guard.service`, this service is responsible to grant access to the pages which only logged in user can access.
* Service `auth-interceptor.service`, this service intercepts the http request and appends the `authenticaton token` to it so the backend can use this token for authentication.
* Service `authentication.service`, this service can be used to pull the user object that is saved in local storage. This service also stores the user object in local storage when someone login or register.
