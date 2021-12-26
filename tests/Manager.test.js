const Manager = require('../lib/Manager.js');

test('creates an manager profile object', () => {
    const vick = new Manager('Vick', '12345', 'person@email.com', 'B23');

    expect(vick.employeeName).toBe('Vick');
    expect(vick.idNumber).toBe('12345');
    expect(vick.email).toBe('person@email.com');
    expect(vick.office).toBe('B23');
    expect(vick.class).toBe('Manager');
});