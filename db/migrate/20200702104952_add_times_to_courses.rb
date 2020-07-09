class AddTimesToCourses < ActiveRecord::Migration[6.0]
  def change
    add_column :courses, :start_time, :datetime
    add_column :courses, :end_time, :datetime
  end
end
