class Intern {
    constructor (employeeName, idNumber, email, school) {
        this.class = 'Intern';
        this.employeeName = employeeName;
        this.idNumber = idNumber;
        this.email = email;
        this.school = school;
    }

    getProfileHTML() {
        return `
        <div class="profile">
            <div class="top">
                <h1>${this.employeeName}</h1>
                <h2>
                    <svg width="150pt" height="100pt"><g transform="translate(0,80) scale(0.1,-0.1)" fill="black" stroke="none"><path d="M305 691 c-155 -59 -286 -111 -293 -115 -23 -14 -11 -28 49 -54 l61 -26 -7 -51 c-3 -27 -13 -57 -21 -66 -18 -20 -18 -68 -1 -94 11 -17 11 -37 1 -115 -7 -52 -13 -112 -13 -132 l-1 -38 59 0 c33 0 62 4 66 10 3 5 -1 64 -9 132 -14 108 -14 125 -1 145 19 28 19 64 0 89 -16 21 -19 62 -7 82 7 10 16 9 48 -1 l39 -14 -4 -155 c-4 -179 -1 -188 79 -232 134 -73 367 -73 502 1 79 43 81 49 77 229 l-4 155 138 52 c134 50 156 66 119 86 -29 15 -578 221 -588 220 -5 0 -135 -49 -289 -108z"/></g></svg> 
                    ${this.class}
                </h2>
            </div>
            <div class="bot">
                <div class="info">
                    <p>ID: ${this.idNumber}</p>
                </div>
                <div class="info">
                    <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
                </div>
                <div class="info">
                    <p>School: ${this.school}</p>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Intern;