const generateIndex = employeeArray => {
    let employeeProfilesHTML = '';
    
    for (i = 0; i < employeeArray.length; i++) {
        employeeProfilesHTML.concat(employeeArray[i])
    }
    
    return`
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ` + employeeProfilesHTML + `
        </main>
    </body>
    `
}

module.exports = { generateIndex }







module.exports = { generateIndex };