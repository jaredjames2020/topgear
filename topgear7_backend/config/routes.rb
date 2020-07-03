Rails.application.routes.draw do
  get 'activities/index'
  get 'activities/create'
  get 'activities/show'
  get 'activities/update'
  get 'buses/index'
  get 'buses/show'
  get 'buses/update'
  get 'routes/index'
  get 'routes/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
