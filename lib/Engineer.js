class Engineer {
    constructor (employeeName, idNumber, email, username) {
        this.class = 'Engineer';
        this.employeeName = employeeName;
        this.idNumber = idNumber;
        this.email = email;
        this.username = username;
    }

    getProfileHTML() {
        return `
        <div class="profile">
            <div class="top">
                <h2>${this.employeeName}</h2>
                <h3>
                <svg width="50pt" height="50pt" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,50) scale(0.1,-0.1)" fill="white" stroke="none"><path d="M407 465 c-18 -39 -23 -125 -7 -125 6 0 10 11 10 24 0 55 17 30 29 -42 6 -42 14 -89 17 -104 l6 -28 -85 0 c-58 0 -88 -4 -96 -13 -13 -16 -47 -15 -63 1 -7 7 -45 12 -96 12 l-84 0 6 28 c3 15 11 62 17 104 12 72 29 97 29 42 0 -14 4 -22 10 -19 15 10 12 82 -6 117 -9 17 -19 26 -23 22 -5 -5 -22 -80 -40 -167 -29 -143 -31 -163 -21 -215 19 -94 28 -102 115 -102 82 0 95 9 95 67 0 46 11 73 30 73 19 0 30 -27 30 -73 0 -58 13 -67 95 -67 87 0 96 8 115 102 10 53 8 72 -20 210 -42 199 -42 198 -63 153z m-209 -367 l-3 -63 -72 -3 c-80 -3 -75 -7 -92 81 l-8 47 89 0 89 0 -3 -62z m271 15 c-17 -88 -12 -84 -92 -81 l-72 3 -3 63 -3 62 89 0 89 0 -8 -47z"/></g></svg> 
                    ${this.class}
                </h3>
            </div>
            <div class="bot">
                <div class="info">
                    <p>ID: ${this.idNumber}</p>
                </div>
                <div class="info">
                    <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
                </div>
                <div class="info">
                    <p>GitHub: <a href="https://github.com/${this.username}">${this.username}</a></p>
                </div>
            </div>
        </div>`;
    }
}

module.exports = Engineer;