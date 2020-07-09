class AddForeignKeyToCourse < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :schools, :courses
  end
end
