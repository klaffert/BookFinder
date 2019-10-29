class AddBookStringToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_column :favorites, :book_string, :string
  end
end
