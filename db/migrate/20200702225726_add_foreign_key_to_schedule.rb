class AddForeignKeyToSchedule < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :schedules, :users
  end
end
