Rails.application.routes.draw do
  # root :to => '#'

  resources :reservations
  resources :users
  resources :users
  resources :flights
  resources :airplanes

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
