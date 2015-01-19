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
Example run: `newapp type_of_app "list of arguments"`.


Passing data which can be added to the template is as easy as: `newapp type_of_app "name=app_name" "test_data=123"`

### Templating
Example template:
```md
# hello world
```

## Customize
It is really easy to add and edit projects that get build with newapp. Just go to the directory newapp is install in and locate the projects folder. If you save a project inside a folder with a descriptive name in here, it can be used by newapp. Let's say I've just added a project called `rails`. Now I can simply type `newapp rails` and it will get build!