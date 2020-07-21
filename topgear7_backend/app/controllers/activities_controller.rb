class ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render :json => Activity.all.reverse()
  end

  def create
    activity = Activity.create(activity_params)
    if activity.save
      render json: activity
    else
      render json: { error: activity.errors.full_messages }
    end
  end

  def show
    render :json => Activity.find_by(vehicle: params[:vehicle])
  end

  def update
    activity = Activity.find_by(vehicle: params[:vehicle])
    activity.update(congestion: params[:congestion], delay: params[:delay], favorites: params[:favorites])
    render :json => Activity.find_by(vehicle: params[:vehicle])
  end

  private

  def activity_params
      params.require(:activity).permit(:congestion, :delay, :vehicle, :route_name, :route_destination)
  end

end
