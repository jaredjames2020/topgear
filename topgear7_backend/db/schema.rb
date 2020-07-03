# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_03_183743) do

  create_table "activities", force: :cascade do |t|
    t.string "route_name"
    t.string "route_destination"
    t.string "direction"
    t.string "next_stop"
    t.string "stops_away"
    t.string "congestion"
    t.string "delay"
    t.integer "route_id"
    t.integer "user_id"
    t.integer "bus_id"
    t.string "vehicle"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "buses", force: :cascade do |t|
    t.string "route_name"
    t.string "route_destination"
    t.string "route_origin"
    t.string "congestion"
    t.string "current_location"
    t.string "next_stop"
    t.string "stops_away"
    t.string "user_location"
    t.integer "route_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "routes", force: :cascade do |t|
    t.string "bus_line_name"
    t.string "service_stops"
    t.string "service_status"
    t.string "service_origin"
    t.string "service_destination"
    t.integer "bus_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
