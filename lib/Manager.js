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
                <h2>${this.employeeName}</h2>
                <h3>
                    <svg width="50" height="50"><polygon points="12.5, 0 20, 12.5 12.5, 37.5 25, 50 37.5, 37.5 30, 12.5 37.5, 0" stroke="none" fill="white" />Browser does not support SVGs</svg> 
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
                    <p>Office No.: ${this.office}</p>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Manager;