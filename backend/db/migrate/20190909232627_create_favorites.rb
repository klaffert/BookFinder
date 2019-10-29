class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :author
      t.integer :year
      t.integer :stars
      t.integer :number_of_reviews
      t.string :image_url
      t.string :details

      t.timestamps
    end
  end
end
