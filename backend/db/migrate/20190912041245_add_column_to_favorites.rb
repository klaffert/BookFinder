class AddColumnToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_column :favorites, :title, :string
    add_column :favorites, :authors, :string
    add_column :favorites, :image_url, :string
  end
end
