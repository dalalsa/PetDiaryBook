Rails.application.routes.draw do

  root "pages#home"
 
  devise_for :users
  resources :users, only: [:show]
  resources :pets do 
  resources :posts
  end
  resources :users do 
  resources :pets
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
  