require 'rails_helper'

RSpec.describe School, type: :model do
  let(:school) { School.new }

  describe 'Data Validation', http: true do
    it "is valid with valid attributes" do
      expect(school.valid?).to be_truthy
    end

    it "is not valid without a longitude" do
      expect(school.valid?).to_not be_truthy
    end
  end
end