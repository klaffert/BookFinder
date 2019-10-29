Rails.application.routes.draw do
  resources :favorites
    post '/favorites', to: 'favorites#create'
  resources :users
  # get '/books', to: 'books#get_books'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
