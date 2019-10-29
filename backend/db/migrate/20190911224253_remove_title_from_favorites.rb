class RemoveTitleFromFavorites < ActiveRecord::Migration[5.2]
  def change
    remove_column :favorites, :title, :string
    remove_column :favorites, :author, :string
    remove_column :favorites, :year, :integer
    remove_column :favorites, :stars, :integer
    remove_column :favorites, :number_of_reviews, :integer
    remove_column :favorites, :image_url, :string
    remove_column :favorites, :details, :string
  end
end
