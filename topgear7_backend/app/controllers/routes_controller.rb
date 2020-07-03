class RoutesController < ApplicationController
  def index
    render :json => Route.all, :include => :buses
  end

  def show
    render :json => Route.find_by(bus_line_name: params[:bus_line_name]).buses
  end
end
