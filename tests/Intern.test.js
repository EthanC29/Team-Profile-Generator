const Intern = require('../lib/Intern.js');

test('creates an intern profile object', () => {
    const nick = new Intern('Nick', '12345', 'person@email.com', 'McMaster');

    expect(nick.employeeName).toBe('Nick');
    expect(nick.idNumber).toBe('12345');
    expect(nick.email).toBe('person@email.com');
    expect(nick.school).toBe('McMaster');
    expect(nick.class).toBe('Intern');
});