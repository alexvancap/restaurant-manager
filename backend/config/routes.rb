Rails.application.routes.draw do
  post('/login', { to: 'users#login' })
  get('/authorize', { to: 'users#authorize'})
end
