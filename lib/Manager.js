class Manager {
    constructor (employeeName, idNumber, email, office) {
        this.class = 'Manager';
        this.employeeName = employeeName;
        this.idNumber = idNumber;
        this.email = email;
        this.office = office;
    }

    getProfileHTML() {
        return `
        <div class="profile">
            <div class="top">
                <h1>${this.employeeName}</h1>
                <h2>
                    <svg width="100" height="100"><polygon points="25, 0 40, 25 25, 75 50, 100 75, 75 60, 25 75, 0" stroke="none" fill="black" />Browser does not support SVGs</svg> 
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
                    <p>Office No.: ${this.office}</p>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Manager;