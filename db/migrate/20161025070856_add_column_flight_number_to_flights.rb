class AddColumnFlightNumberToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :flight_number, :integer
  end
end
