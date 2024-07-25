THERE ARE TWO PROJECTS TILL NOW:
1)THE PRIME NUMBER CHECKER
  In this we can give a start and a end for a range
  Where we will check whether the numbers in the range are prime number or not
  If they are prime we have to change them into their binary number (where i used toString(2) )
  And if not a prime number we will give their divisor
  
  
  Example:
  
  Input:
  start = 6, end = 15
  
  Output:
  {
  '6': [ 1, 2, 3, 6 ],
  '7': '111',
  '8': [ 1, 2, 4, 8 ],
  '9': [ 1, 3, 9 ],
  '10': [ 1, 2, 5, 10 ],
  '11': '1011',
  '12': [ 1, 2, 3, 4, 6, 12 ],
  '13': '1101',
  '14': [ 1, 2, 7, 14 ]
  }

2)THE PASSWORD GENERATOR

Accepts parameters for password length, inclusion of numbers, special characters, and uppercase letters.
Generates a password based on the provided parameters.
Returns the password along with the given conditions in a JSON response.

Use Postman to send a POST request to http://localhost:5000/generate-password with a JSON body
Input:
{
    "length": 6,
    "number": true,
    "specialchars":false,
    "uppercase": true
}

Output:
{
    "password": "S9bY71",
    "length": 6,
    "number": true,
    "specialchars": false,
    "uppercase": true
}
