Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
  get '/app/', to: 'apps#index'
  get '/landing/', to: 'home#index'
end
