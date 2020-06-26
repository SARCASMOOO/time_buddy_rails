class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.text :name
      t.text :url
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
