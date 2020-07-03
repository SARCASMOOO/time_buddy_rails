class AddSchoolToCourse < ActiveRecord::Migration[6.0]
  def change
    add_reference :schools, :course
  end
end
