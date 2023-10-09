const HomePage = require('../pageobjects/Object.Follow')

describe('Test Instagram', () => {
    it('Click menu search', async () => {
        await HomePage.clickSearchUser();
    });

    it('Search username', async () => {
        await HomePage.inputusername('arielnoah');
    });

    it('Follow user', async () => {
        await HomePage.clickFollowhUser();
    });

    it('Send message', async () => {
        await HomePage.sendMessage('Hallo Bang Ariel');
    });
    
});