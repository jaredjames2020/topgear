class ActivitiesController < ApplicationController

  def index
    render :json => Activity.all
  end

  def create
    activity = Activity.new(activities_params)
    if activity.save
      redirect_to "/activities"
    else
      render :json => Activity.all
    end
  end

  def show
    render :json => Activity.find_by(vehicle: params[:vehicle])
  end

  def update
    activity = Activity.find_by(vehicle: params[:vehicle])
    activity.update(congestion: params[:congestion], delay: params[:delay])
    render :json => Activity.find_by(vehicle: params[:vehicle])
  end

private
  def activities_params
    params.require(:activity).permit(:route_name, :route_destination, :direction, :next_stop, :stops_away, :congestion, :delay, :route_id, :user_id, :bus_id, :vehicle)
  end

end
