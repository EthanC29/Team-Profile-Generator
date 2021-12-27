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
                <h2>${this.employeeName}</h2>
                <h3>
                <svg width="70" height="50" viewBox="0 0 70 50" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,50) scale(0.1,-0.1)" fill="white" stroke="none"><path d="M178 427 c-92 -40 -168 -75 -168 -79 0 -4 11 -10 24 -14 21 -5 22 -9 16 -42 -3 -20 -12 -48 -19 -61 -10 -18 -10 -28 -1 -46 9 -17 9 -42 2 -96 -5 -41 -6 -78 -2 -82 4 -5 23 -7 41 -5 34 3 34 3 29 48 -4 40 -4 103 0 158 1 9 -2 29 -5 44 -11 45 -1 60 31 46 l26 -12 -7 -97 c-8 -116 -2 -133 63 -162 67 -31 217 -31 284 0 65 30 72 47 64 163 l-7 97 71 29 c38 16 70 31 70 34 0 4 -291 132 -330 144 -8 3 -90 -27 -182 -67z"/></g></svg> 
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
                    <p>School: ${this.school}</p>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Intern;