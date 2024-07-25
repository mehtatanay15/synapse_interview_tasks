const express = require('express');
const app = express();
app.use(express.json());

app.listen(5000, () => {
    console.log('Server is Running on port 5000');
});

function generatepassword(length, number, specialchars, uppercase) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*(){}[]<>?~|;:';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let random = lowercase;
    let password = '';
    
    if (number) random += numbers;
    if (specialchars) random += specialCharacters;
    if (uppercase) random += upperCase;

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * random.length);
        password += random[randomindex];
    }
    return password;
}

app.post('/generate-password', (req, res) => {
    const { length, number, specialchars, uppercase } = req.body;

    const password = generatepassword(length, number, specialchars, uppercase);

    res.json({
        password,
        length,
        number,
        specialchars,
        uppercase
    });
});
