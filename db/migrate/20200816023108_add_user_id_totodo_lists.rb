class AddUserIdTotodoLists < ActiveRecord::Migration[6.0]
  def change
    add_column :todo_lists, :UserID, :integer
  end
end
