let email = 'antoniocamposgabrielpedro@gmail.com';

/**
 *  First solution for hide email
 *
 * @params email: string
 */
function hideEmail(email) {
  const hideEmail = email.replace(/(?<=.{1}).(?=.*@)/gi, '*');

  return hideEmail;
}

console.log(hideEmail('antoniocamposgabrielpedro@gmail.com'));

// output
// a************************@gmail.com

/**
 *  second solution for hide email
 *
 * @params email: string
 */
function hideEmail(email) {
  const [name, domain] = email.split('@');
  const at = new Array(name.length).join('*');

  return name[0] + at + '@' + domain;
}

console.log(hideEmail('antoniocamposgabrielpedro@gmail.com'));

// output
// a************************@gmail.com
