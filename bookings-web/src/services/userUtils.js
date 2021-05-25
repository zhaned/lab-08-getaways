export const registerUser = async (email, password, username) => {
  const response = await fetch(`${process.env.BASE_URL}/users/create`, {
    method:'POST',
    headers:{ 'Content-Type': 'application/json'},
    body:JSON.stringify({
      email: email,
      password: password,
      username: username
    })
  });
  const result = await response.json();
  console.log(result, 'a result over here')
  return result;
}

export const signInUser = async (password, email) => {
  const response = await fetch(`${process.env.BASE_URL}/users/login`, {
    method:'POST',
    headers:{ 'Content-Type': 'application/json'},
    body:JSON.stringify({
      email: email,
      password: password
    })
  });
  const result = await response.json();
  return result;
}

export const signOutUser = async () => {
  const response = await fetch(`${process.env.BASE_URL}/users/logout`)

  const results = await response.json();
  
  return results;
}