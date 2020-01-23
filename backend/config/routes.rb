Rails.application.routes.draw do
  post('/login', { to: 'users#login' })
  post('/signup', { to: 'users#signup'})
  get('/get_user_by_token', { to: 'users#get_user_by_token'})
  get('/get_restaurant/:id', { to: 'restaurants#get_restaurant'})
  post('/update_restaurant/:id', { to: 'restaurants#update'})
  post('/add_worktimes', {to: 'worktimes#create'})
  post('/create_restaurant/:user_id', {to: 'restaurants#create'})
end
