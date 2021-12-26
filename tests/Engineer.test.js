const Engineer = require('../lib/Engineer.js');

test('creates an engineer profile object', () => {
    const rick = new Engineer('Rick', '12345', 'person@email.com', 'EthanC29');

    expect(rick.employeeName).toBe('Rick');
    expect(rick.idNumber).toBe('12345');
    expect(rick.email).toBe('person@email.com');
    expect(rick.username).toBe('EthanC29');
    expect(rick.class).toBe('Engineer');
});