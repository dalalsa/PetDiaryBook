Rails.application.routes.draw do
  get 'users/show'
  get 'posts/destroy'
   root "pages#home"
 
  devise_for :users
  resources :users, only: [:show]
  resources :pets do 
  resources :posts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
