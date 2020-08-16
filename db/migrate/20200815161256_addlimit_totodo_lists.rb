class AddlimitTotodoLists < ActiveRecord::Migration[6.0]
  def change
    add_column :todo_lists, :limit, :datetime
  end
end
