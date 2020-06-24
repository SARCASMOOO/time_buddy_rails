require 'rails_helper'

# Change this ArticlesController to your project
RSpec.describe PagesController, type: :controller do
  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {}
      expect(response).to be_successful # be_successful expects a HTTP Status code of 200
      # expect(response).to have_http_status(302) # Expects a HTTP Status code of 302
    end
  end
end