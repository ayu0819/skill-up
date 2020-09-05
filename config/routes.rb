Rails.application.routes.draw do
  get 'skill/home'
  get 'user/login'
  get 'user/signin'
  get 'user/mypage'
  get "/" => "home#top"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
