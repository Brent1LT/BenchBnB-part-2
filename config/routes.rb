Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: :create
  end 
  root to: 'static_pages#root'
end
