# newapp

Generates boilerplate code for new apps. `newapp` will undergo heavy changes in the near future. Backwards compatibility will be kept in mind.

---

## Install
* Using git
  1. Clone source
  2. Make newapp accessible from terminal
* Using NPM
  1. `npm install -g newapp`

## Use

### CLI
Example: `newapp node "name=node_app"`.


Passing command line arguments which can be used to fill templates: `newapp type_of_app "name=app_name" "test_data=test123"`

### Templating
Example template (a file within a project in the projects folder):
```md
# {{name}}

## Install
Install notes about {{name}} are put here.

## Use
{{test_data}}
```

Which will result in:
```md
# app_name

## Install
Install notes about app_name are put here.

## Use
test123
```

The above syntax also applies to both directory and file names `{{some_script.js}}`.

### Empty directories
If you want to have empty directories in your project, you need to place .keep file in them. Git will then keep those folders and newapp will copy the directories without the .gitkeep files.

### Add/edit projects
It is easy to add/edit projects that can be build by newapp. Locate the install location of newapp and go to the projects folder. In here you can create a project or edit existing ones. Let's say I want to add a rails project. I just create a rails folder with the default project base in it. Now I can type `newapp rails "name=my_rails_app"` to build my default rails app. Note that the first argument `name` is always required.
