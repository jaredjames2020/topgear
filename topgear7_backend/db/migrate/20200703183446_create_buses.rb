class CreateBuses < ActiveRecord::Migration[6.0]
  def change
    create_table :buses do |t|
      t.string :route_name
      t.string :route_destination
      t.string :route_origin
      t.string :congestion
      t.string :current_location
      t.string :next_stop
      t.string :stops_away
      t.string :user_location
      t.integer :route_id
      t.integer :user_id

      t.timestamps
    end
  end
end
