class School < ApplicationRecord
  #<School id: nil, name: nil, url: nil, latitude: nil, longitude: nil, created_at: nil, updated_at: nil>
  has_many :courses
end
