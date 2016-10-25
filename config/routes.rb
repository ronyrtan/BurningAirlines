Rails.application.routes.draw do
  root :to => 'flights#index'

  get '/search' => 'flights#search'
  get '/search_results' => 'flights#search_results'

  resources :reservations
  resources :users
  resources :users
  resources :flights
  resources :airplanes

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
