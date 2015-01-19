# newapp

Generates boilerplate code for new apps.

---

## Install
* Using git
  1. Clone source
  2. Make newapp accessible from terminal
* Using NPM
  1. `npm install newapp -g`

## Use

### CLI
Example: `newapp type_of_app "list of arguments"`.

Passing command line arguments which can be used to fill templates: `newapp type_of_app "name=app_name" "test_data=123"`

### Templating
Example template:
```md
# {{name}}

## Install
Install notes about {{name}} are put here.

## Use
```

## Add/edit projects

It is easy to add/edit projects that can be build by newapp. Locate the install location of newapp and go to the projects folder. In here you can create a project or edit existing ones. Let's say I want to add a rails project. I just create a rails folder with the default project base in it. Now I can type `newapp rails "name=my_rails_app"` to build my default rails app. Note that the first argument 'name' is required.