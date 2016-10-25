class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :airplane_id
      t.string :origin
      t.string :destination
      t.date :date

      t.timestamps null: false
    end
  end
end
