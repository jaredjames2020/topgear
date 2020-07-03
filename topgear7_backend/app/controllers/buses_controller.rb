class BusesController < ApplicationController

  def index
    render :json => Bus.all, :include => :route
  end

  def show
    render :json => Bus.find_by(route_name: params[:route_name])
  end

  def update
    bus = Bus.find_by(route_name: params[:route_name])
    bus.update(congestion: params[:congestion])
    render :json => bus
  end

end
