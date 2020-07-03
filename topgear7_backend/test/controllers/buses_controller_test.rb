require 'test_helper'

class BusesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get buses_index_url
    assert_response :success
  end

  test "should get show" do
    get buses_show_url
    assert_response :success
  end

  test "should get update" do
    get buses_update_url
    assert_response :success
  end

end
