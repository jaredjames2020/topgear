class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :route_name
      t.string :route_destination
      t.string :direction
      t.string :next_stop
      t.string :stops_away
      t.string :congestion
      t.string :delay
      t.integer :route_id
      t.integer :user_id
      t.integer :bus_id
      t.string :vehicle

      t.timestamps
    end
  end
end
