Rails.application.routes.draw do
  post('/login', { to: 'users#login' })
<<<<<<< HEAD
  post('/signup', { to: 'users#signup'})
=======
  get('/authorize', { to: 'users#authorize'})
>>>>>>> 7ca23903df8b1cd4408f2d7bf759632668f4d42e
end
