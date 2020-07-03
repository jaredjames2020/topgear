Rails.application.routes.draw do
  scope '/api/v1' do
    # resources :users, only: :index
    resources :routes, only: [:index, :show], param: :bus_line_name
    resources :buses, only: [:index, :update, :show], param: :route_name
    resources :activities, only: [:index, :show, :create, :update], param: :vehicle
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
