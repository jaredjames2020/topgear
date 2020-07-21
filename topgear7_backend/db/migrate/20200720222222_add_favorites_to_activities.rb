class AddFavoritesToActivities < ActiveRecord::Migration[6.0]
  def change
    add_column :activities, :favorites, :string
  end
end
