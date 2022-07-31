DESIGN SPECS:

Basic Frontend using Express with Handlebars

-Enhancements: UI, needs CSS

Basic Backend using Node and REST API

-GET (read), POST (create), PUT (update)
-CURRENT BUGS: PUT updates field to null rather than expected information, POST creates more than the current 3 boat slips

Basic MongoDB Database

-Created and maintained with Mongoose, seeded with Seedgoose

Server (localhost)

http://localhost/8080


Applications Used: VSCode, VSCode extension REST Client, Postman, Robo3T, Firefox (Developer Tools), Chrome (Developer Tools), Mac Terminal (error output), Github

References: mongoosejs.com, npmjs.com

ABOUT:

This basic API application monitors three boat slips from a Marina. The GET method should display all three boat slips. The POST method should request to use a vacant boat by it's name, then return it's boat slip number. However, if no boats are available that message would appear. The PUT method should request a boat to be vacated. If successful, a standard 204 response appears. If unsuccessful, meaning all boats are already vacant, then an error message will appear.

NOTES:

Jest was added for automated testing, however no tests were created. All testing was done via VSCode extenstion REST Client, Postman, Robo3T, and Browser development tools.