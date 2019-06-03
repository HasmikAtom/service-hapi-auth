

const Auth = {};
module.exports = Auth;

Auth.login = (req) => {
  console.log('req====>', req.payload.email);
  console.log('payload====>', JSON.parse(JSON.stringify(req.payload), null, '\t' ));
  // 1: get email
  // 2: compare email to db email
  // 3: check if password is correct
  // 4: set session 


  // 5: return error messages if wrong email or pw

  return 'this is login endpoint';
}

Auth.logout = (req, res) => {
  
}