class CreateRoutes < ActiveRecord::Migration[6.0]
  def change
    create_table :routes do |t|
      t.string :bus_line_name
      t.string :service_stops
      t.string :service_status
      t.string :service_origin
      t.string :service_destination
      t.integer :bus_id
      t.integer :user_id

      t.timestamps
    end
  end
end
