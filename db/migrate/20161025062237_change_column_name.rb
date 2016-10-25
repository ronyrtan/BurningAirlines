class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :airplanes, :row, :rows
    rename_column :airplanes, :column, :columns
  end
end
