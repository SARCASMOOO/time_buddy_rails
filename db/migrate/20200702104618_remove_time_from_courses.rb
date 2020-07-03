class RemoveTimeFromCourses < ActiveRecord::Migration[6.0]
  def change
    remove_column :courses, :time, :datetime
  end
end
