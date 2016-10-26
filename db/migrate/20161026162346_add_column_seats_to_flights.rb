class AddColumnSeatsToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :seats, :integer
  end
end
