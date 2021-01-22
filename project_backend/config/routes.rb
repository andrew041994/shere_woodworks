Rails.application.routes.draw do
  get 'welcom/home'
  get 'welcom/app'
  devise_for :admins
  devise_for :users
  #root to: "home#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
