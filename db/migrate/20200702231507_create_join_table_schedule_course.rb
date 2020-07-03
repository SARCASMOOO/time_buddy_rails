class CreateJoinTableScheduleCourse < ActiveRecord::Migration[6.0]
  def change
    create_join_table :schedules, :courses do |t|
      t.index [:schedule_id, :course_id]
      t.index [:course_id, :schedule_id]
    end
  end
end
