# Landing 🍺

[ ![Codeship Status for laconsultoria/hack-beer](https://codeship.com/projects/5f99e690-f489-0133-c0c6-36b8111ac33a/status?branch=master)](https://codeship.com/projects/150129)
This repo stores the website of Landing.

### Environments

* Development: [http://landing.dev](http://landing.dev)


### Build Requirements

* Aspell (for spellcheck support)
    - On OSX:
    
```bash
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    $ brew install aspell --with-lang-es --with-lang-en
```

* Node JS
* Bower, Gulp, Jade
* PHP 7 webserver (Homestead is highly recommended)

### Dev Installation

* Clone this repo
* Install Laravel Homestead
* Install npm dependencies `npm install`
* Install bower dependencies `bower install`
* Activate HTTPS in your web server
* Add `~/Public/Landing` to homestead setup
* Install requirements
* Run gulp
* Add `landing.dev` to your hosts file pointing to server ip (192.168.10.10)
* Open `https://landing.dev` in your browser

### Who do I talk to?

* Repo owner or admin
* Other community or team contact

### Collaborators

* Kircho
