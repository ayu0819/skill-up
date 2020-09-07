Rails.application.routes.draw do
  get "login" => "user#login_form"
  post "login" => "user#login"
  post "user/:id/update" => "user#update"
  get "user/:id/edit" => "user#edit"
  post "user/create" => "user#create"
  get "user/index" => "user#index"
  get "user/:id" => "user#show"
  get 'skill/home'
  get "signup" => "user#new"
  get 'user/mypage'
  get "/" => "home#top"
  get "courses" => "post#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
