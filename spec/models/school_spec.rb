require 'rails_helper'

RSpec.describe School, type: :model do
  it 'should consider a new school to be valid' do
    school = School.new
    expect(school.valid?).to be_truthy
  end
end
