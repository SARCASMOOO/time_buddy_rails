require 'rails_helper'

RSpec.describe School, type: :model do
  let(:school) { School.new }

  before(:example) do
    school
  end

  it 'should consider a new school to be valid' do
    expect(school.valid?).to be_truthy
  end
end