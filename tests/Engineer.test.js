const Engineer = require('../lib/Engineer.js');

test('creates an engineer profile object', () => {
    const rick = new Engineer('Rick', '12345', 'person@email.com', 'EthanC29');

    expect(rick.employeeName).toBe('Rick');
    expect(rick.idNumber).toBe('12345');
    expect(rick.email).toBe('person@email.com');
    expect(rick.username).toBe('EthanC29');
    expect(rick.class).toBe('Engineer');
});

test('creates HTML to append', () => {
    const rick = new Engineer('Rick', '12345', 'person@email.com', 'EthanC29');

    expect(rick.getProfileHTML()).toBe(`
        <div class="profile">
            <div class="top">
                <h1>Rick</h1>
                <h2>
                    <svg width="150pt" height="100pt"><g transform="translate(0,100) scale(0.1,-0.1)" fill="white" stroke="none"><path d="M206 992 c-2 -4 -50 -122 -106 -261 l-102 -254 22 -111 c40 -201 63 -287 83 -313 37 -47 70 -53 276 -53 l189 0 31 26 c18 14 36 35 42 45 5 10 16 87 24 171 8 83 20 157 25 162 14 14 106 14 120 0 5 -5 17 -79 25 -162 8 -84 19 -161 24 -171 6 -10 24 -31 42 -45 l31 -26 194 0 c213 0 235 5 273 59 19 27 65 209 91 361 l11 65 -104 255 c-76 190 -107 255 -120 255 -26 0 -117 -114 -117 -147 0 -36 25 -98 40 -98 6 0 22 26 36 57 21 47 27 54 35 41 9 -17 99 -273 99 -283 0 -3 -110 -5 -245 -5 l-246 0 -24 -25 c-14 -13 -25 -28 -25 -33 0 -5 -36 -9 -80 -9 -44 0 -80 4 -80 9 0 5 -11 20 -25 33 l-24 25 -246 0 c-135 0 -245 1 -245 3 0 9 90 268 98 283 9 16 14 10 36 -39 14 -31 30 -57 36 -57 15 0 40 62 40 97 0 18 -15 46 -41 78 -56 69 -81 87 -93 67z m403 -574 c-1 -119 -25 -320 -40 -329 -16 -10 -368 -12 -393 -3 -9 4 -21 14 -26 24 -9 18 -80 331 -80 356 0 12 43 14 270 14 l270 0 -1 -62z m821 50 c0 -25 -71 -341 -80 -358 -5 -10 -17 -20 -26 -24 -25 -9 -377 -7 -393 3 -15 9 -39 210 -40 329 l-1 62 270 0 c209 0 270 -3 270 -12z"/></g></svg> 
                    Engineer
                </h2>
            </div>
            <div class="bot">
                <div class="info">
                    <p>ID: 12345</p>
                </div>
                <div class="info">
                    <p>Email: <a href="mailto:person@email.com">person@email.com</a></p>
                </div>
                <div class="info">
                    <p>GitHub: <a href="https://github.com/EthanC29">EthanC29</a></p>
                </div>
            </div>
        </div>`
    )
});