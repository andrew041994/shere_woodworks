Rails.application.routes.draw do
  # get '/users' => 'users#index'
  resources :users
  # get 'welcome/home'
  # get '/app', to: 'welcome#app', as: 'app'
  # root to: "welcome#home"
  # devise_for :Admins
  # devise_for :users
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
