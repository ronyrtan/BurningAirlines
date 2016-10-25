class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :row
      t.integer :column

      t.timestamps null: false
    end
  end
end
